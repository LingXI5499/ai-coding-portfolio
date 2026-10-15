import {defineConfig} from 'vite';
export default defineConfig({
  worker:{format:'es'},
  build:{
    rollupOptions:{output:{manualChunks:{three:['three','three/addons/controls/OrbitControls.js'],highlight:['highlight.js/lib/core'],editor:['@codemirror/state','@codemirror/view','@codemirror/commands','@codemirror/language','@codemirror/lang-sql','@codemirror/lang-java','@codemirror/lang-javascript','@codemirror/lang-json','@codemirror/lang-xml','@codemirror/legacy-modes/mode/yaml']}}},
    chunkSizeWarningLimit:650
  }
});
