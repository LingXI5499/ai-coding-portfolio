using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

public static class BuildDemoScene
{
    private const string ScenePath = "Assets/Scenes/MainScene.unity";
    private const string RockPath = "Assets/Art/Models/SM_Rock_01.fbx";
    private const string PrefabPath = "Assets/Prefabs/PF_Rock_01.prefab";

    [MenuItem("AI3D Demo/Legacy/Rebuild Sandbox Main Scene %#&r")]
    public static void Run()
    {
        // This entry point creates a NEW empty scene and overwrites MainScene.unity,
        // so it destroys any scene content that was not produced by this builder.
        // Starfall Ruins content is built by BuildStarfallRuins instead; this menu is
        // kept only as a reproducible record of the original pipeline validation.
        bool overwrite = EditorUtility.DisplayDialog(
            "Rebuild sandbox MainScene?",
            "This DISCARDS the current MainScene content and rebuilds the original\n" +
            "pipeline-validation sandbox (ground, 5 obstacles, 8 rocks, player, target).\n\n" +
            "It does NOT contain Starfall Ruins gameplay.\n\n" +
            "Target: " + ScenePath + "\n\nContinue?",
            "Rebuild and overwrite",
            "Cancel");
        if (!overwrite)
        {
            Debug.Log("BuildDemoScene: cancelled by user; MainScene left untouched.");
            return;
        }

        AssetDatabase.Refresh(ImportAssetOptions.ForceSynchronousImport);
        GameObject rockModel = AssetDatabase.LoadAssetAtPath<GameObject>(RockPath);
        if (rockModel == null) throw new System.InvalidOperationException("Rock FBX was not imported: " + RockPath);

        Scene scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
        Material groundMaterial = MakeMaterial("Assets/Art/Materials/M_Ground.mat", new Color(0.26f, 0.43f, 0.31f));
        Material playerMaterial = MakeMaterial("Assets/Art/Materials/M_Player.mat", new Color(0.27f, 0.54f, 0.9f));
        Material targetMaterial = MakeMaterial("Assets/Art/Materials/M_Target.mat", new Color(0.9f, 0.12f, 0.09f));
        Material obstacleMaterial = MakeMaterial("Assets/Art/Materials/M_Obstacle.mat", new Color(0.53f, 0.47f, 0.36f));

        GameObject environment = new GameObject("Environment");
        GameObject ground = GameObject.CreatePrimitive(PrimitiveType.Plane);
        ground.name = "Ground";
        ground.transform.SetParent(environment.transform);
        ground.transform.localScale = new Vector3(3f, 1f, 3f);
        ground.GetComponent<Renderer>().sharedMaterial = groundMaterial;

        GameObject player = new GameObject("Player");
        player.transform.position = new Vector3(0f, 1f, -6f);
        CharacterController controller = player.AddComponent<CharacterController>();
        controller.height = 2f;
        controller.radius = 0.45f;
        player.AddComponent<SimplePlayerController>();
        GameObject body = GameObject.CreatePrimitive(PrimitiveType.Capsule);
        body.name = "Visual";
        body.transform.SetParent(player.transform, false);
        Object.DestroyImmediate(body.GetComponent<CapsuleCollider>());
        body.GetComponent<Renderer>().sharedMaterial = playerMaterial;
        GameObject pivot = new GameObject("CameraPivot");
        pivot.transform.SetParent(player.transform, false);
        pivot.transform.localPosition = new Vector3(0f, 0.65f, 0f);
        pivot.AddComponent<SimpleMouseLook>().SetPlayer(player.transform);
        GameObject cameraObject = new GameObject("Main Camera");
        cameraObject.tag = "MainCamera";
        cameraObject.transform.SetParent(pivot.transform, false);
        cameraObject.transform.localPosition = new Vector3(0f, 0.8f, -4f);
        cameraObject.transform.localRotation = Quaternion.Euler(8f, 0f, 0f);
        cameraObject.AddComponent<Camera>();
        cameraObject.AddComponent<AudioListener>();

        GameObject obstacles = new GameObject("Obstacles");
        obstacles.transform.SetParent(environment.transform);
        Vector3[] obstaclePositions = {
            new Vector3(-5f, 1f, -1f), new Vector3(5f, 1.5f, 0f),
            new Vector3(-7f, 0.75f, 6f), new Vector3(7f, 2f, 7f),
            new Vector3(3f, 1f, 10f)
        };
        for (int i = 0; i < obstaclePositions.Length; i++)
        {
            GameObject obstacle = GameObject.CreatePrimitive(PrimitiveType.Cube);
            obstacle.name = "Obstacle_" + (i + 1).ToString("00");
            obstacle.transform.SetParent(obstacles.transform);
            obstacle.transform.position = obstaclePositions[i];
            obstacle.transform.localScale = new Vector3(1.5f + i * 0.25f, obstaclePositions[i].y * 2f, 1.5f);
            obstacle.GetComponent<Renderer>().sharedMaterial = obstacleMaterial;
        }

        GameObject prefabRoot = new GameObject("PF_Rock_01");
        GameObject modelInstance = (GameObject)PrefabUtility.InstantiatePrefab(rockModel);
        modelInstance.transform.SetParent(prefabRoot.transform, false);
        BoxCollider rockCollider = prefabRoot.AddComponent<BoxCollider>();
        rockCollider.center = new Vector3(0f, 0.75f, 0f);
        rockCollider.size = new Vector3(2f, 1.5f, 1.3f);
        GameObject rockPrefab = PrefabUtility.SaveAsPrefabAsset(prefabRoot, PrefabPath);
        Object.DestroyImmediate(prefabRoot);
        if (rockPrefab == null) throw new System.InvalidOperationException("Could not save rock prefab");

        Vector3[] rockPositions = {
            new Vector3(-9f, 0f, -8f), new Vector3(-4f, 0f, -7f),
            new Vector3(5f, 0f, -9f), new Vector3(10f, 0f, -4f),
            new Vector3(-10f, 0f, 3f), new Vector3(-4f, 0f, 9f),
            new Vector3(5f, 0f, 5f), new Vector3(10f, 0f, 10f)
        };
        for (int i = 0; i < rockPositions.Length; i++)
        {
            GameObject rock = (GameObject)PrefabUtility.InstantiatePrefab(rockPrefab);
            rock.name = "Rock_" + (i + 1).ToString("00");
            rock.transform.SetParent(environment.transform);
            rock.transform.position = rockPositions[i];
            rock.transform.rotation = Quaternion.Euler(0f, (i * 53f) % 360f, 0f);
            rock.transform.localScale = Vector3.one * (0.8f + (i % 4) * 0.2f);
        }

        GameObject target = GameObject.CreatePrimitive(PrimitiveType.Cube);
        target.name = "Target";
        target.transform.position = new Vector3(0f, 1.5f, 6f);
        target.transform.localScale = new Vector3(1.2f, 1.2f, 1.2f);
        target.GetComponent<Renderer>().sharedMaterial = targetMaterial;
        target.AddComponent<RotateTarget>();

        GameObject lightObject = new GameObject("Directional Light");
        lightObject.transform.rotation = Quaternion.Euler(48f, -30f, 0f);
        Light light = lightObject.AddComponent<Light>();
        light.type = LightType.Directional;
        light.intensity = 1.2f;
        RenderSettings.ambientLight = new Color(0.5f, 0.55f, 0.58f);

        EditorSceneManager.SaveScene(scene, ScenePath);
        EditorBuildSettings.scenes = new[] { new EditorBuildSettingsScene(ScenePath, true) };
        AssetDatabase.SaveAssets();
        Debug.Log("AI3D-DEMO BUILD OK: 8 rocks, 5 obstacles, player, target, camera");
    }

    private static Material MakeMaterial(string path, Color color)
    {
        Material material = AssetDatabase.LoadAssetAtPath<Material>(path);
        if (material == null)
        {
            Shader shader = Shader.Find("Universal Render Pipeline/Lit");
            if (shader == null) throw new System.InvalidOperationException("URP Lit shader unavailable");
            material = new Material(shader);
            AssetDatabase.CreateAsset(material, path);
        }
        material.color = color;
        material.SetFloat("_Smoothness", 0.15f);
        EditorUtility.SetDirty(material);
        return material;
    }
}
