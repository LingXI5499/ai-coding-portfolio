import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {cities,routes} from './content.js';

export function geoPosition(lat,lon,r=2) {
  const p=THREE.MathUtils.degToRad(lat),t=THREE.MathUtils.degToRad(lon);
  return new THREE.Vector3(-r*Math.cos(p)*Math.cos(t),r*Math.sin(p),r*Math.cos(p)*Math.sin(t));
}

export function createGlobe(container,{route=0,onSelect=()=>{}}={}) {
  let disposed=false,raf,routeIndex=route,speed=1,running=false,phase=0;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(39,1,.1,100);
  camera.position.copy(geoPosition(24,113,6.9));
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7));
  renderer.setClearColor(0x080e1b,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  container.append(renderer.domElement);
  const controls=new OrbitControls(camera,renderer.domElement);
  controls.enableDamping=true;controls.dampingFactor=.06;controls.enablePan=false;
  controls.minDistance=4.5;controls.maxDistance=9;controls.rotateSpeed=.5;
  const texture=new THREE.TextureLoader().load('/assets/earth.jpg');texture.colorSpace=THREE.SRGBColorSpace;
  const specular=new THREE.TextureLoader().load('/assets/earth-specular.jpg');
  const earth=new THREE.Mesh(new THREE.SphereGeometry(2,80,60),new THREE.MeshPhongMaterial({map:texture,specularMap:specular,specular:0x16282b,shininess:10,color:0x91a4ba}));
  scene.add(earth,new THREE.AmbientLight(0xabc7cf,1.5));
  const key=new THREE.DirectionalLight(0xc8e8ff,2.2);key.position.copy(geoPosition(45,100,7));scene.add(key);
  const fill=new THREE.DirectionalLight(0x448899,.7);fill.position.set(-4,0,-3);scene.add(fill);
  const atmosphere=new THREE.Mesh(new THREE.SphereGeometry(2.075,64,48),new THREE.ShaderMaterial({
    side:THREE.BackSide,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,
    uniforms:{glow:{value:new THREE.Color(0x4e719f)}},
    vertexShader:'varying vec3 n; varying vec3 v; void main(){vec4 p=modelViewMatrix*vec4(position,1.0);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}',
    fragmentShader:'varying vec3 n; varying vec3 v; uniform vec3 glow; void main(){float a=pow(1.0-abs(dot(n,v)),3.2);gl_FragColor=vec4(glow,a*0.5);}'
  }));scene.add(atmosphere);
  // Geographic coastlines are local Natural Earth 1:110m public-domain data.
  fetch('/assets/land.geojson').then(r=>r.json()).then(data=>{
    if(disposed)return;
    const vertices=[];
    for(const f of data.features) {
      const polygons=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;
      for(const polygon of polygons)for(const ring of polygon)for(let i=1;i<ring.length;i++) {
        const a=geoPosition(ring[i-1][1],ring[i-1][0],2.006),b=geoPosition(ring[i][1],ring[i][0],2.006);
        vertices.push(a.x,a.y,a.z,b.x,b.y,b.z);
      }
    }
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
    scene.add(new THREE.LineSegments(geometry,new THREE.LineBasicMaterial({color:0x9ec0e5,transparent:true,opacity:.2})));
  }).catch(()=>{});
  const gridMaterial=new THREE.LineBasicMaterial({color:0x8198b8,transparent:true,opacity:.09});
  for(let lat=-60;lat<=60;lat+=30) {
    const points=Array.from({length:181},(_,i)=>geoPosition(lat,i*2-180,2.015));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),gridMaterial));
  }
  for(let lon=-180;lon<180;lon+=30) {
    const points=Array.from({length:91},(_,i)=>geoPosition(i*2-90,lon,2.015));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),gridMaterial));
  }
  let paths=[],markers=[],packets=[],labels=[];
  function clearRoutes(){
    for(const x of [...paths,...markers,...packets]){scene.remove(x);x.geometry?.dispose();x.material?.dispose();}
    paths=[];markers=[];packets=[];
    for(const el of labels)el.remove();labels=[];
  }
  function setRoute(index){
    routeIndex=index;clearRoutes();const ids=routes[index].ids;
    ids.forEach((id,i)=>{
      const city=cities[id],pos=geoPosition(city.lat,city.lon,2.04);
      const marker=new THREE.Mesh(new THREE.SphereGeometry(.042,12,12),new THREE.MeshBasicMaterial({color:i===0?0x8ddbf6:0xecb86d}));marker.position.copy(pos);scene.add(marker);markers.push(marker);
      const ring=new THREE.Mesh(new THREE.RingGeometry(.072,.083,32),new THREE.MeshBasicMaterial({color:0x8ddbf6,side:THREE.DoubleSide,transparent:true,opacity:.7}));ring.position.copy(pos.clone().multiplyScalar(1.006));ring.lookAt(pos.clone().multiplyScalar(2));scene.add(ring);markers.push(ring);
      const label=document.createElement('button');label.className='city-label';label.innerHTML=`<span>${city.en}</span><b>${city.name}</b>`;label.setAttribute('aria-label',`查看${city.name}节点`);label.onclick=()=>onSelect(id);container.append(label);labels.push(label);
    });
    for(let i=1;i<ids.length;i++) {
      const a=cities[ids[i-1]],b=cities[ids[i]],start=geoPosition(a.lat,a.lon),end=geoPosition(b.lat,b.lon);
      const angle=start.angleTo(end),points=[];
      for(let n=0;n<=100;n++) {
        const t=n/100;
        const dir=angle<.001?start.clone():start.clone().multiplyScalar(Math.sin((1-t)*angle)/Math.sin(angle)).add(end.clone().multiplyScalar(Math.sin(t*angle)/Math.sin(angle)));
        points.push(dir.normalize().multiplyScalar(2.05+Math.sin(t*Math.PI)*(.3+angle*.38)));
      }
      const curve=new THREE.CatmullRomCurve3(points);
      const line=new THREE.Mesh(new THREE.TubeGeometry(curve,100,.007,6,false),new THREE.MeshBasicMaterial({color:0x7bddf5,transparent:true,opacity:.85}));scene.add(line);paths.push(line);
      for(let p=0;p<3;p++) {
        const packet=new THREE.Mesh(new THREE.SphereGeometry(.025,10,10),new THREE.MeshBasicMaterial({color:p===0?0xffffff:0x7bddf5}));packet.userData={curve,offset:p/3,segment:i-1};scene.add(packet);packets.push(packet);
      }
    }
  }
  setRoute(route);
  const resize=new ResizeObserver(()=>{const {width,height}=container.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();});resize.observe(container);
  const clock=new THREE.Clock();let elapsed=0;
  function animate(){
    if(disposed)return;raf=requestAnimationFrame(animate);const dt=Math.min(clock.getDelta(),.05);elapsed+=dt;
    controls.update();
    packets.forEach(p=>{const t=(elapsed*(running?.19:.035)*speed+p.userData.offset)%1;p.position.copy(p.userData.curve.getPoint(phase===5?1-t:t));p.visible=running||p.userData.offset===0;});
    const ids=routes[routeIndex].ids;
    labels.forEach((label,i)=>{
      const c=cities[ids[i]],pos=geoPosition(c.lat,c.lon,2.1),visible=pos.dot(camera.position.clone().sub(pos))>0;
      const projected=pos.clone().project(camera);
      label.style.display=visible?'':'none';label.style.left=`${(projected.x*.5+.5)*container.clientWidth}px`;label.style.top=`${(-projected.y*.5+.5)*container.clientHeight}px`;
    });renderer.render(scene,camera);
  }animate();
  return {
    setRoute,setRunning:(v)=>{running=v;},setSpeed:(v)=>{speed=v;},setPhase:(v)=>{phase=v;},
    resetView:()=>{camera.position.copy(geoPosition(24,113,6.9));controls.target.set(0,0,0);controls.update();},
    dispose:()=>{disposed=true;cancelAnimationFrame(raf);resize.disconnect();controls.dispose();clearRoutes();scene.traverse(o=>{o.geometry?.dispose();if(o.material&&!Array.isArray(o.material))o.material.dispose();});texture.dispose();specular.dispose();renderer.dispose();renderer.domElement.remove();}
  };
}
