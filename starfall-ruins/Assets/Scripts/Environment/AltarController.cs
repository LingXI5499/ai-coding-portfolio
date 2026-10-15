using StarfallRuins.Core;
using StarfallRuins.Interaction;
using UnityEngine;

namespace StarfallRuins.Environment
{
    /// <summary>
    /// A ruin altar. Each altar consumes one star fragment and lights up;
    /// lighting all altars unlocks the portal.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class AltarController : MonoBehaviour, IInteractable
    {
        [Header("Presentation")]
        [Tooltip("Model that tilts while the altar is dormant.")]
        [SerializeField] private Transform visual;

        [Tooltip("Renderer tinted on activation.")]
        [SerializeField] private Renderer crystalRenderer;

        [SerializeField] private Color inactiveColor = new Color(0.28f, 0.3f, 0.34f, 1f);
        [SerializeField] private Color activeColor = new Color(0.45f, 0.9f, 1f, 1f);

        [Tooltip("Light switched on when the altar is activated. Optional.")]
        [SerializeField] private Light crystalLight;

        [Tooltip("Degrees per second while dormant.")]
        [SerializeField] private float dormantSpinDegreesPerSecond = 24f;

        [Header("State")]
        [SerializeField] private bool isActive;

        [Header("Interaction")]
        [SerializeField] private string prompt = "Press E to offer a Star Fragment";

        /// <summary>True once this altar is lit.</summary>
        public bool IsActive => isActive;

        /// <inheritdoc />
        public string Prompt
        {
            get
            {
                if (isActive) return "Altar is lit";
                GameManager manager = GameManager.Instance;
                if (manager != null && !manager.HasFragmentAvailable)
                    return "Need a Star Fragment to light this altar";
                return prompt;
            }
        }

        /// <inheritdoc />
        public bool CanInteract
        {
            get
            {
                if (isActive) return false;
                GameManager manager = GameManager.Instance;
                return manager != null && manager.HasFragmentAvailable;
            }
        }

        private void Awake()
        {
            if (visual == null) visual = transform;
        }

        /// <summary>
        /// Editor-time wiring used by the scene builder. Not intended for runtime use,
        /// where the serialized fields are the source of truth.
        /// </summary>
        public void Configure(Transform visualTransform, Renderer crystal, Light altarLight)
        {
            visual = visualTransform;
            crystalRenderer = crystal;
            crystalLight = altarLight;
        }

        private void Start()
        {
            ApplyVisualState();
        }

        private void Update()
        {
            if (isActive) return;
            if (visual == null) return;
            visual.Rotate(Vector3.up, dormantSpinDegreesPerSecond * Time.deltaTime, Space.Self);
        }

        /// <inheritdoc />
        public void Interact(GameObject interactor)
        {
            if (isActive) return;

            GameManager manager = GameManager.Instance;
            if (manager == null)
            {
                Debug.LogError("AltarController: no GameManager in the scene.", this);
                return;
            }

            if (!manager.TryActivateAltar()) return;

            isActive = true;
            ApplyVisualState();
        }

        private void ApplyVisualState()
        {
            if (crystalRenderer != null && crystalRenderer.material != null)
            {
                Color tint = isActive ? activeColor : inactiveColor;
                crystalRenderer.material.color = tint;
                if (crystalRenderer.material.HasProperty("_EmissionColor"))
                {
                    crystalRenderer.material.EnableKeyword("_EMISSION");
                    crystalRenderer.material.SetColor("_EmissionColor", isActive ? tint * 1.6f : Color.black);
                }
            }

            if (crystalLight != null) crystalLight.enabled = isActive;
        }
    }
}
