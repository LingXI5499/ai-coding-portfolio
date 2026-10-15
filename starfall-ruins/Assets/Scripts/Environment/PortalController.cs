using StarfallRuins.Core;
using UnityEngine;

namespace StarfallRuins.Environment
{
    /// <summary>
    /// The central portal. It stays dormant until every altar is lit, then becomes
    /// enterable; stepping into it while unlocked completes the demo.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class PortalController : MonoBehaviour
    {
        [Header("Presentation")]
        [Tooltip("Ring that spins faster once the portal unlocks.")]
        [SerializeField] private Transform ring;

        [SerializeField] private float dormantSpinDegreesPerSecond = 18f;
        [SerializeField] private float unlockedSpinDegreesPerSecond = 150f;

        [Tooltip("Renderer tinted when the portal unlocks.")]
        [SerializeField] private Renderer coreRenderer;

        [SerializeField] private Color dormantColor = new Color(0.2f, 0.22f, 0.3f, 1f);
        [SerializeField] private Color unlockedColor = new Color(0.35f, 0.85f, 1f, 1f);

        [Tooltip("Light switched on when the portal unlocks. Optional.")]
        [SerializeField] private Light portalLight;

        [Header("State")]
        [SerializeField] private bool isUnlocked;

        /// <summary>True once every altar is lit.</summary>
        public bool IsUnlocked => isUnlocked;

        private void Awake()
        {
            // The entry trigger must stay enabled: a disabled collider cannot report
            // entry, and the unlock check inside the handler is what gates progress.
            Collider entry = GetComponent<Collider>();
            if (entry != null && !entry.isTrigger)
            {
                Debug.LogWarning("PortalController: entry collider on '" + name
                    + "' is not a trigger; the portal cannot detect the player.", this);
            }
        }

        private void Start()
        {
            GameManager manager = GameManager.Instance;
            if (manager != null)
            {
                manager.PortalUnlocked += OnPortalUnlocked;
                if (manager.IsPortalUnlocked) OnPortalUnlocked();
            }

            ApplyVisualState();
        }

        /// <summary>
        /// Editor-time wiring used by the scene builder. Not intended for runtime use,
        /// where the serialized fields are the source of truth.
        /// </summary>
        public void Configure(Transform ringTransform, Renderer core, Light light)
        {
            ring = ringTransform;
            coreRenderer = core;
            portalLight = light;
        }

        private void OnDestroy()
        {
            GameManager manager = GameManager.Instance;
            if (manager != null) manager.PortalUnlocked -= OnPortalUnlocked;
        }

        private void Update()
        {
            if (ring == null) return;
            float speed = isUnlocked ? unlockedSpinDegreesPerSecond : dormantSpinDegreesPerSecond;
            ring.Rotate(Vector3.up, speed * Time.deltaTime, Space.Self);
        }

        private void OnTriggerEnter(Collider other)
        {
            if (!isUnlocked) return;
            if (!IsPlayer(other)) return;

            GameManager manager = GameManager.Instance;
            if (manager == null) return;
            manager.CompleteDemo();
        }

        private static bool IsPlayer(Collider other)
        {
            if (other == null) return false;
            if (other.CompareTag("Player")) return true;
            return other.GetComponentInParent<CharacterController>() != null;
        }

        private void OnPortalUnlocked()
        {
            if (isUnlocked) return;
            isUnlocked = true;
            ApplyVisualState();
        }

        private void ApplyVisualState()
        {
            if (coreRenderer != null && coreRenderer.material != null)
            {
                Color tint = isUnlocked ? unlockedColor : dormantColor;
                coreRenderer.material.color = tint;
                if (coreRenderer.material.HasProperty("_EmissionColor"))
                {
                    coreRenderer.material.EnableKeyword("_EMISSION");
                    coreRenderer.material.SetColor("_EmissionColor", isUnlocked ? tint * 2f : Color.black);
                }
            }

            if (portalLight != null) portalLight.enabled = isUnlocked;
        }
    }
}
