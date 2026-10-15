using StarfallRuins.Collectibles;
using StarfallRuins.Core;
using StarfallRuins.Environment;
using StarfallRuins.Interaction;
using StarfallRuins.Player;
using StarfallRuins.UI;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.InputSystem.UI;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

/// <summary>
/// Deterministic builder for the Starfall Ruins V0.1 gameplay content.
///
/// Design contract:
///   * Every object this builder creates lives under the single root "StarfallRuins".
///     The existing sandbox content (Environment, Player, Target, Directional Light)
///     is preserved and only queried, then adopted under that root. Nothing is rebuilt.
///   * The builder is idempotent: the previous "StarfallRuins" root is deleted before
///     new content is created, so re-running never duplicates objects.
///   * Only Cube / Sphere / Cylinder / Plane primitives are used. No Blender asset is
///     touched in V0.1.
/// </summary>
public static class BuildStarfallRuinsV01
{
    private const string ScenePath = "Assets/Scenes/MainScene.unity";
    private const string RootName = "StarfallRuins";
    private const string HudName = "HUD";
    private const string MaterialFolder = "Assets/Art/Materials/Starfall";

    // --- Play-area geometry -------------------------------------------------
    // The sandbox ground is a 10x10 plane; scale 8 gives the 80m x 80m play area the
    // level-blockout phase calls for, with room for three exploration partitions.
    private static readonly Vector3 GroundScale = new Vector3(8f, 1f, 8f);
    private const float GroundExtent = 40f;

    // --- Gameplay layout ----------------------------------------------------
    // Every position below must stay inside the ground bounds (GroundExtent either
    // side of the origin) or the player and props fall out of the world.
    private static readonly Vector3 PlayerSpawn = new Vector3(0f, 1.1f, -30f);
    private static readonly Vector3 GameManagerPosition = new Vector3(0f, 0f, -28f);

    private static readonly Vector3[] FragmentPositions =
    {
        new Vector3(-30f, 1.4f, 6f),    // west ruins
        new Vector3(4f, 1.4f, 32f),     // north ridge
        new Vector3(26f, 1.4f, -22f),   // east basin
    };

    private static readonly Vector3[] AltarPositions =
    {
        new Vector3(-14f, 0f, -14f),
        new Vector3(14f, 0f, -14f),
        new Vector3(0f, 0f, 16f),
    };

    private static readonly Vector3 PortalPosition = new Vector3(0f, 0f, 0f);

    // The gate ring is sunk into the ground so its lower arc is buried: that is what
    // turns the ring into a doorway the player can walk through instead of a wall.
    // Ring centre + radius - ring radius must stay below the floor plane.
    private const float PortalRingCentreY = 1.6f;
    private const float PortalRingRadius = 3.6f;
    private const float PortalSpinRingRadius = 2.2f;

    /// <summary>Rebuild the V0.1 gameplay content in the currently open MainScene.</summary>
    [MenuItem("AI3D Demo/Build Starfall Ruins V0.1 Content")]
    public static void Run()
    {
        Scene scene = SceneManager.GetActiveScene();
        if (scene.path != ScenePath)
        {
            bool proceed = EditorUtility.DisplayDialog(
                "Build Starfall Ruins in this scene?",
                "The active scene is:\n" + scene.path + "\n\nThis builder is written for:\n" + ScenePath
                + "\n\nContinue anyway?",
                "Continue", "Cancel");
            if (!proceed)
            {
                Debug.Log("BuildStarfallRuinsV01: cancelled; scene untouched.");
                return;
            }
        }

        GameObject environment = FindObjectByName("Environment");
        GameObject player = FindObjectByName("Player");
        if (environment == null || player == null)
        {
            Debug.LogError("BuildStarfallRuinsV01: MainScene is missing 'Environment' or 'Player'; "
                + "run 'AI3D Demo/Legacy/Rebuild Sandbox Main Scene' first.");
            return;
        }

        // Re-running this builder must reuse the sandbox content it adopted last time
        // instead of rebuilding it, so pull those objects back out of the old root
        // before that root is destroyed.
        Detach(environment);
        Detach(player);
        RemoveExisting(RootName);
        RemoveSandboxProps();

        EnsureFolder(MaterialFolder);

        Material stone = MakeMaterial("M_RuinStone", new Color(0.42f, 0.41f, 0.39f), 0.12f);
        Material pillar = MakeMaterial("M_Pillar", new Color(0.60f, 0.58f, 0.53f), 0.18f);
        Material crystal = MakeMaterial("M_AltarCrystal", new Color(0.28f, 0.30f, 0.34f), 0.35f);
        Material fragment = MakeMaterial("M_StarFragment", new Color(1f, 0.94f, 0.62f), 0.75f);
        Material portalRing = MakeMaterial("M_PortalRing", new Color(0.34f, 0.36f, 0.44f), 0.45f);
        Material portalCore = MakeMaterial("M_PortalCore", new Color(0.20f, 0.22f, 0.30f), 0.55f);
        Material landmark = MakeMaterial("M_Landmark", new Color(0.66f, 0.60f, 0.45f), 0.15f);

        GameObject root = new GameObject(RootName);
        Adopt(root, environment);
        Adopt(root, player);

        // Widen the sandbox ground to the 80m x 80m play area.
        Transform groundTransform = environment.transform.Find("Ground");
        if (groundTransform != null) groundTransform.localScale = GroundScale;

        BuildGameManager(root);
        BuildPlayerWiring(player);

        GameObject landmarks = Child(root, "Landmarks");
        GameObject fragments = Child(root, "Fragments");
        GameObject altars = Child(root, "Altars");
        GameObject portal = Child(root, "Portal");

        BuildLandmarks(landmarks, landmark, pillar);
        BuildFragments(fragments, fragment);
        BuildAltars(altars, stone, pillar, crystal);
        BuildPortal(portal, portalRing, portalCore);
        BuildHud(root);
        PositionPlayer(player);

        EditorSceneManager.MarkSceneDirty(scene);
        AssetDatabase.SaveAssets();
        Debug.Log("STARFALL V0.1 BUILD OK: 3 fragments, 3 altars, 1 portal, HUD, "
            + (GroundExtent * 2f) + "m x " + (GroundExtent * 2f) + "m play area");
    }

    // -------------------------------------------------------------- core setup

    private static void BuildGameManager(GameObject root)
    {
        GameObject managerObject = Child(root, "GameManager");
        managerObject.transform.position = GameManagerPosition;
        managerObject.AddComponent<GameManager>();
    }

    private static void BuildPlayerWiring(GameObject player)
    {
        PlayerInteractor interactor = player.GetComponent<PlayerInteractor>();
        if (interactor == null) interactor = player.AddComponent<PlayerInteractor>();
        interactor.Configure(player.transform, ~0, 3.2f);

        if (!player.CompareTag("Player"))
        {
            try
            {
                player.tag = "Player";
            }
            catch (UnityException)
            {
                Debug.LogWarning("BuildStarfallRuinsV01: the 'Player' tag is unavailable; "
                    + "portal entry will fall back to the CharacterController check.");
            }
        }
    }

    // ------------------------------------------------------------------ world

    private static void BuildLandmarks(GameObject parent, Material landmark, Material pillar)
    {
        // Three obvious partition landmarks, one per fragment area.
        MakeBlock(parent, "LM_West_Obelisk", new Vector3(-36f, 3f, 10f), new Vector3(1.6f, 6f, 1.6f),
            Quaternion.Euler(0f, 14f, 0f), landmark);
        MakeBlock(parent, "LM_West_Obelisk_Cap", new Vector3(-36f, 6.3f, 10f), new Vector3(2.4f, 0.8f, 2.4f),
            Quaternion.Euler(0f, 14f, 0f), pillar);

        MakeBlock(parent, "LM_North_Arch_L", new Vector3(-2.2f, 3.5f, 38f), new Vector3(1.6f, 7f, 1.6f),
            Quaternion.identity, landmark);
        MakeBlock(parent, "LM_North_Arch_R", new Vector3(10.2f, 3.5f, 38f), new Vector3(1.6f, 7f, 1.6f),
            Quaternion.identity, landmark);
        MakeBlock(parent, "LM_North_Arch_Top", new Vector3(4f, 7.4f, 38f), new Vector3(14f, 1.4f, 2f),
            Quaternion.identity, pillar);

        MakeCylinder(parent, "LM_East_SunkenPillar", new Vector3(32f, 4f, -28f),
            new Vector3(2.4f, 4f, 2.4f), Quaternion.identity, landmark);
        MakeBlock(parent, "LM_East_SunkenPillar_Cap", new Vector3(32f, 8.3f, -28f), new Vector3(3.4f, 0.7f, 3.4f),
            Quaternion.identity, pillar);

        // Scattered ruin blocks: rotation / scale reuse only, no new assets.
        Vector3[] rubble =
        {
            new Vector3(-24f, 0.4f, -8f), new Vector3(-12f, 0.3f, 12f), new Vector3(-30f, 0.5f, 24f),
            new Vector3(14f, 0.4f, 8f), new Vector3(24f, 0.3f, -10f), new Vector3(30f, 0.45f, 6f),
            new Vector3(-6f, 0.35f, 8f), new Vector3(6f, 0.3f, -6f), new Vector3(-20f, 0.4f, -26f),
            new Vector3(18f, 0.35f, 26f), new Vector3(-34f, 0.3f, -18f), new Vector3(34f, 0.4f, 20f),
        };
        for (int i = 0; i < rubble.Length; i++)
        {
            float size = 0.8f + (i % 4) * 0.4f;
            MakeBlock(parent, "Rubble_" + (i + 1).ToString("00"), rubble[i],
                new Vector3(size * 1.6f, size, size * 1.2f),
                Quaternion.Euler(0f, (i * 47f) % 360f, 0f), landmark);
        }
    }

    private static void BuildFragments(GameObject parent, Material fragmentMaterial)
    {
        for (int i = 0; i < FragmentPositions.Length; i++)
        {
            GameObject group = Child(parent, "StarFragment_" + (i + 1).ToString("00"));
            group.transform.position = FragmentPositions[i];

            // Trigger volume the interaction probe looks for.
            SphereCollider trigger = group.AddComponent<SphereCollider>();
            trigger.isTrigger = true;
            trigger.radius = 1.6f;
            trigger.center = Vector3.zero;

            GameObject core = MakeBlock(group, "Core", new Vector3(0f, -0.2f, 0f),
                new Vector3(0.45f, 0.45f, 0.45f), Quaternion.Euler(30f, 30f, 0f), fragmentMaterial);
            Object.DestroyImmediate(core.GetComponent<Collider>());

            GameObject glow = Child(group, "Glow");
            glow.transform.localPosition = Vector3.zero;
            Light light = glow.AddComponent<Light>();
            light.type = LightType.Point;
            light.color = new Color(1f, 0.93f, 0.62f);
            light.intensity = 1.6f;
            light.range = 7f;

            StarFragment component = group.AddComponent<StarFragment>();
            component.Configure(core.transform, core.GetComponent<Renderer>(), light);
            group.AddComponent<InteractionTarget>();
        }
    }

    private static void BuildAltars(GameObject parent, Material stone, Material pillar, Material crystal)
    {
        for (int i = 0; i < AltarPositions.Length; i++)
        {
            GameObject group = Child(parent, "Altar_" + (i + 1).ToString("00"));
            group.transform.position = AltarPositions[i];

            MakeBlock(group, "Base", new Vector3(0f, 0.15f, 0f), new Vector3(2.6f, 0.3f, 2.6f),
                Quaternion.identity, stone);
            MakeBlock(group, "Pedestal", new Vector3(0f, 0.65f, 0f), new Vector3(1.3f, 0.7f, 1.3f),
                Quaternion.Euler(0f, 45f, 0f), stone);
            MakeBlock(group, "Trim", new Vector3(0f, 1.05f, 0f), new Vector3(1.7f, 0.14f, 1.7f),
                Quaternion.identity, pillar);

            GameObject crystalObject = MakeBlock(group, "Crystal", new Vector3(0f, 1.65f, 0f),
                new Vector3(0.7f, 0.95f, 0.7f), Quaternion.Euler(45f, 45f, 0f), crystal);
            Object.DestroyImmediate(crystalObject.GetComponent<Collider>());

            GameObject glow = Child(group, "Glow");
            glow.transform.localPosition = new Vector3(0f, 1.9f, 0f);
            Light light = glow.AddComponent<Light>();
            light.type = LightType.Point;
            light.color = new Color(0.45f, 0.9f, 1f);
            light.intensity = 2.2f;
            light.range = 10f;
            light.enabled = false;

            BoxCollider trigger = group.AddComponent<BoxCollider>();
            trigger.isTrigger = true;
            trigger.center = new Vector3(0f, 1.1f, 0f);
            trigger.size = new Vector3(2.8f, 2.4f, 2.8f);

            AltarController component = group.AddComponent<AltarController>();
            component.Configure(null, crystalObject.GetComponent<Renderer>(), light);

            group.AddComponent<InteractionTarget>();
        }
    }

    private static void BuildPortal(GameObject group, Material ringMaterial, Material coreMaterial)
    {
        // The controller, its trigger and the visual children all live on this one
        // object so the portal is a single interactable/enterable unit.
        group.transform.position = PortalPosition;

        GameObject ring = Child(group, "RingFrame");
        // The gate face: segments sit in the pivot's local XY plane, so the ring faces
        // along Z - the axis the player approaches on from the -Z spawn. This frame
        // does not move; PortalController spins the inner ring instead, so the gate
        // stays readable as a doorway while it animates.
        ring.transform.localPosition = new Vector3(0f, PortalRingCentreY, 0f);
        ring.transform.localRotation = Quaternion.identity;

        const int segments = 12;
        BuildRing(ring.transform, segments, PortalRingRadius, 0.7f, ringMaterial);

        // Inner ring: the part that spins, so the gate animates without tumbling.
        GameObject innerRing = Child(group, "RingSpin");
        innerRing.transform.localPosition = new Vector3(0f, PortalRingCentreY, 0f);
        innerRing.transform.localRotation = Quaternion.identity;
        BuildRing(innerRing.transform, 8, PortalSpinRingRadius, 0.45f, coreMaterial);

        MakeBlock(group, "Base", new Vector3(0f, 0.15f, 0f), new Vector3(5.4f, 0.3f, 5.4f),
            Quaternion.identity, ringMaterial);

        GameObject core = MakeBlock(group, "Core", new Vector3(0f, 0.1f, 0f),
            new Vector3(5.6f, 0.06f, 5.6f), Quaternion.identity, coreMaterial);
        Object.DestroyImmediate(core.GetComponent<Collider>());

        GameObject glow = Child(group, "Glow");
        glow.transform.localPosition = new Vector3(0f, PortalRingCentreY + 1.4f, 0f);
        Light light = glow.AddComponent<Light>();
        light.type = LightType.Point;
        light.color = new Color(0.35f, 0.85f, 1f);
        light.intensity = 3.2f;
        light.range = 16f;
        light.enabled = false;

        // The entry volume is the doorway itself: a slab the player has to cross. A
        // box on the gate plane beats a sphere here, because a sphere centred on the
        // old standing ring also fired for a player who merely walked alongside it.
        BoxCollider entry = group.AddComponent<BoxCollider>();
        entry.isTrigger = true;
        entry.center = new Vector3(0f, 1.8f, 0f);
        entry.size = new Vector3(5.4f, 3.6f, 2f);

        PortalController component = group.AddComponent<PortalController>();
        component.Configure(innerRing.transform, core.GetComponent<Renderer>(), light);
    }

    /// <summary>
    /// Lay out a closed ring of cubes in the parent's local XY plane, so the ring
    /// stands upright and faces along the parent's local Z.
    /// </summary>
    private static void BuildRing(Transform parent, int segments, float radius, float thickness, Material material)
    {
        for (int i = 0; i < segments; i++)
        {
            float angle = i * (360f / segments);
            float radians = angle * Mathf.Deg2Rad;
            Vector3 position = new Vector3(Mathf.Cos(radians) * radius, Mathf.Sin(radians) * radius, 0f);
            GameObject segment = MakeBlock(parent.gameObject, "Ring_" + i.ToString("00"), Vector3.zero,
                new Vector3(thickness, thickness, thickness), Quaternion.identity, material);
            segment.transform.localPosition = position;
        }
    }

    // -------------------------------------------------------------------- HUD

    /// <summary>
    /// Create the HUD canvas directly under the world root. The Canvas object is the
    /// HUD; adding a container around it would leave a transform-only "HUD/HUD" level.
    /// </summary>
    private static void BuildHud(GameObject parent)
    {
        GameObject canvasObject = Child(parent, HudName);
        Canvas canvas = canvasObject.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        CanvasScaler scaler = canvasObject.AddComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1920f, 1080f);
        scaler.matchWidthOrHeight = 0.5f;
        canvasObject.AddComponent<GraphicRaycaster>();

        Font font = LoadBuiltinFont();

        Text counter = MakeLabel(canvasObject, "StarFragmentCount", font, 40, TextAnchor.UpperLeft,
            new Color(1f, 0.95f, 0.72f), new Vector2(36f, -28f), new Vector2(760f, 56f), new Vector2(0f, 1f));
        counter.text = string.Format(HUDController.CounterFormat, 0, GameManager.RequiredFragments);

        Text altar = MakeLabel(canvasObject, "AltarCount", font, 32, TextAnchor.UpperLeft,
            new Color(0.72f, 0.92f, 1f), new Vector2(36f, -92f), new Vector2(760f, 48f), new Vector2(0f, 1f));
        altar.text = "Altars 0/" + GameManager.RequiredAltars;

        Text prompt = MakeLabel(canvasObject, "InteractionPrompt", font, 40, TextAnchor.LowerCenter,
            new Color(1f, 1f, 1f), new Vector2(0f, 120f), new Vector2(1200f, 64f), new Vector2(0.5f, 0f));
        prompt.text = string.Empty;
        prompt.enabled = false;

        Text completion = MakeLabel(canvasObject, "CompletionBanner", font, 86, TextAnchor.MiddleCenter,
            new Color(0.5f, 0.95f, 1f), Vector2.zero, new Vector2(1400f, 160f), new Vector2(0.5f, 0.5f));
        completion.text = "DEMO COMPLETE";
        completion.enabled = false;

        HUDController hud = canvasObject.AddComponent<HUDController>();
        hud.Configure(counter, altar, prompt, completion);

        GameObject eventSystemObject = Child(parent, "EventSystem");
        EventSystem eventSystem = eventSystemObject.AddComponent<EventSystem>();
        eventSystem.sendNavigationEvents = false;

        // Input System is the project's active input backend, so the UI module must
        // come from that package rather than the legacy StandaloneInputModule.
        eventSystemObject.AddComponent<InputSystemUIInputModule>();
    }

    private static Font LoadBuiltinFont()
    {
        Font font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
        if (font == null) font = Resources.GetBuiltinResource<Font>("Arial.ttf");
        if (font == null) Debug.LogWarning("BuildStarfallRuinsV01: no built-in font found; HUD labels may not render.");
        return font;
    }

    private static Text MakeLabel(GameObject parent, string name, Font font, int fontSize, TextAnchor anchor,
        Color color, Vector2 anchoredPosition, Vector2 size, Vector2 pivot)
    {
        GameObject labelObject = Child(parent, name);
        RectTransform rect = labelObject.AddComponent<RectTransform>();
        labelObject.AddComponent<CanvasRenderer>();
        Text text = labelObject.AddComponent<Text>();

        rect.anchorMin = pivot;
        rect.anchorMax = pivot;
        rect.pivot = pivot;
        rect.anchoredPosition = anchoredPosition;
        rect.sizeDelta = size;

        text.font = font;
        text.fontSize = fontSize;
        text.alignment = anchor;
        text.color = color;
        text.horizontalOverflow = HorizontalWrapMode.Overflow;
        text.verticalOverflow = VerticalWrapMode.Overflow;
        text.raycastTarget = false;
        return text;
    }

    // ----------------------------------------------------------------- layout

    private static void PositionPlayer(GameObject player)
    {
        CharacterController controller = player.GetComponent<CharacterController>();
        bool wasEnabled = controller != null && controller.enabled;
        if (wasEnabled) controller.enabled = false;

        player.transform.SetPositionAndRotation(PlayerSpawn, Quaternion.identity);

        // Aim the camera pivot roughly at the portal so the first frame frames the goal.
        Transform pivot = player.transform.Find("CameraPivot");
        if (pivot != null)
        {
            pivot.localRotation = Quaternion.Euler(6f, 0f, 0f);
            if (pivot.TryGetComponent(out SimpleMouseLook look)) look.SetPlayer(player.transform);

            // The sandbox camera sits only 4m behind a 2m-tall capsule, so the body fills
            // the view. Pull it back for a usable third-person framing without turning
            // the player into a speck.
            Transform cameraTransform = pivot.Find("Main Camera");
            if (cameraTransform != null)
            {
                cameraTransform.localPosition = new Vector3(0f, 1.0f, -5.2f);
                cameraTransform.localRotation = Quaternion.Euler(11f, 0f, 0f);
            }
            pivot.localPosition = new Vector3(0f, 0.9f, 0f);
        }

        if (wasEnabled) controller.enabled = true;
    }

    // ---------------------------------------------------------------- helpers

    /// <summary>Reparent an object under the world root, keeping its world transform.</summary>
    private static void Adopt(GameObject parent, GameObject child)
    {
        if (child == null) return;
        child.transform.SetParent(parent.transform, true);
    }

    /// <summary>Find a GameObject by name anywhere in the loaded scene, active or not.</summary>
    private static GameObject FindObjectByName(string name)
    {
        foreach (GameObject candidate in Resources.FindObjectsOfTypeAll<GameObject>())
        {
            if (candidate.name != name) continue;
            if (EditorUtility.IsPersistent(candidate)) continue;
            if (!candidate.scene.IsValid()) continue;
            return candidate;
        }
        return null;
    }

    /// <summary>Move an object to the scene root, keeping its world transform.</summary>
    private static void Detach(GameObject target)
    {
        if (target == null) return;
        if (target.transform.parent == null) return;
        target.transform.SetParent(null, true);
    }

    private static GameObject FindRoot(string name)
    {
        Scene scene = SceneManager.GetActiveScene();
        foreach (GameObject candidate in scene.GetRootGameObjects())
        {
            if (candidate.name == name) return candidate;
        }
        return null;
    }

    private static void RemoveExisting(string name)
    {
        GameObject existing = FindRoot(name);
        if (existing != null)
        {
            Debug.Log("BuildStarfallRuinsV01: replacing existing '" + name + "'.");
            Object.DestroyImmediate(existing);
        }
    }

    /// <summary>
    /// Drop the pipeline-validation props that have no place in the ruins: the spinning
    /// red 'Target' cube and the five grey box 'Obstacles'. Both sat inside the level
    /// courtyard and read as leftover sandbox geometry rather than level content.
    /// </summary>
    private static void RemoveSandboxProps()
    {
        GameObject target = FindObjectByName("Target");
        if (target != null)
        {
            Object.DestroyImmediate(target);
            Debug.Log("BuildStarfallRuinsV01: removed the sandbox 'Target' cube.");
        }

        GameObject obstacles = FindObjectByName("Obstacles");
        if (obstacles != null)
        {
            Object.DestroyImmediate(obstacles);
            Debug.Log("BuildStarfallRuinsV01: removed the five sandbox 'Obstacles' boxes.");
        }
    }

    private static GameObject Child(GameObject parent, string name)
    {
        GameObject child = new GameObject(name);
        child.transform.SetParent(parent.transform, false);
        return child;
    }

    private static GameObject MakeBlock(GameObject parent, string name, Vector3 position, Vector3 scale,
        Quaternion rotation, Material material)
    {
        return MakePrimitive(PrimitiveType.Cube, parent, name, position, scale, rotation, material);
    }

    private static GameObject MakeCylinder(GameObject parent, string name, Vector3 position, Vector3 scale,
        Quaternion rotation, Material material)
    {
        return MakePrimitive(PrimitiveType.Cylinder, parent, name, position, scale, rotation, material);
    }

    private static GameObject MakePrimitive(PrimitiveType type, GameObject parent, string name, Vector3 position,
        Vector3 scale, Quaternion rotation, Material material)
    {
        GameObject primitive = GameObject.CreatePrimitive(type);
        primitive.name = name;
        primitive.transform.SetParent(parent.transform, false);
        primitive.transform.localPosition = position;
        primitive.transform.localRotation = rotation;
        primitive.transform.localScale = scale;

        Renderer renderer = primitive.GetComponent<Renderer>();
        if (renderer != null && material != null) renderer.sharedMaterial = material;
        return primitive;
    }

    private static Material MakeMaterial(string name, Color color, float smoothness)
    {
        string path = MaterialFolder + "/" + name + ".mat";
        Material material = AssetDatabase.LoadAssetAtPath<Material>(path);
        if (material == null)
        {
            Shader shader = Shader.Find("Universal Render Pipeline/Lit");
            if (shader == null) throw new System.InvalidOperationException("URP Lit shader unavailable");
            material = new Material(shader);
            AssetDatabase.CreateAsset(material, path);
        }

        material.SetColor("_BaseColor", color);
        material.SetColor("_Color", color);
        material.SetFloat("_Smoothness", smoothness);
        material.SetFloat("_Metallic", 0f);
        material.SetFloat("_Surface", 0f);
        material.SetFloat("_Blend", 0f);
        EditorUtility.SetDirty(material);
        return material;
    }

    private static void EnsureFolder(string folder)
    {
        if (AssetDatabase.IsValidFolder(folder)) return;
        string parent = System.IO.Path.GetDirectoryName(folder).Replace('\\', '/');
        string leaf = System.IO.Path.GetFileName(folder);
        if (!AssetDatabase.IsValidFolder(parent)) EnsureFolder(parent);
        AssetDatabase.CreateFolder(parent, leaf);
    }
}
