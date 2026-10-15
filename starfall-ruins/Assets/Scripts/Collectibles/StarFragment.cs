using StarfallRuins.Core;
using StarfallRuins.Interaction;
using UnityEngine;

namespace StarfallRuins.Collectibles
{
    /// <summary>
    /// A collectible star fragment. Interacting picks it up, increments the
    /// <see cref="GameManager"/> counter and removes the fragment from the scene.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class StarFragment : MonoBehaviour, IInteractable
    {
        [Header("Presentation")]
        [Tooltip("Model that spins and bobs. Falls back to this transform when empty.")]
        [SerializeField] private Transform visual;

        [SerializeField] private float spinDegreesPerSecond = 70f;
        [SerializeField] private float bobAmplitude = 0.18f;
        [SerializeField] private float bobSpeed = 1.6f;

        [Tooltip("Renderer tinted when the fragment is collected. Optional.")]
        [SerializeField] private Renderer tintRenderer;

        [SerializeField] private Color collectedColor = new Color(0.95f, 0.95f, 1f, 1f);

        [Tooltip("Light switched off when the fragment is collected. Optional.")]
        [SerializeField] private Light glow;

        [Header("Interaction")]
        [SerializeField] private string prompt = "Press E to collect Star Fragment";

        private Vector3 visualStartPosition;
        private bool collected;

        /// <inheritdoc />
        public string Prompt => prompt;

        /// <inheritdoc />
        public bool CanInteract => !collected;

        private void Awake()
        {
            if (visual == null) visual = transform;
            visualStartPosition = visual.localPosition;
        }

        /// <summary>
        /// Editor-time wiring used by the scene builder. Not intended for runtime use,
        /// where the serialized fields are the source of truth.
        /// </summary>
        public void Configure(Transform visualTransform, Renderer tint, Light fragmentGlow)
        {
            visual = visualTransform;
            tintRenderer = tint;
            glow = fragmentGlow;
        }

        private void Update()
        {
            if (collected) return;
            if (visual == null) return;

            visual.Rotate(Vector3.up, spinDegreesPerSecond * Time.deltaTime, Space.Self);
            float bob = Mathf.Sin(Time.time * bobSpeed) * bobAmplitude;
            visual.localPosition = visualStartPosition + Vector3.up * bob;
        }

        /// <inheritdoc />
        public void Interact(GameObject interactor)
        {
            if (collected) return;

            GameManager manager = GameManager.Instance;
            if (manager == null)
            {
                Debug.LogError("StarFragment: no GameManager in the scene; cannot record the pickup.", this);
                return;
            }

            if (!manager.CollectFragment()) return;

            collected = true;
            if (tintRenderer != null && tintRenderer.material != null)
                tintRenderer.material.color = collectedColor;
            if (glow != null) glow.enabled = false;

            // Stop offering this target immediately, then hide the object. Destroy() is
            // deferred to the end of the frame, so a probe query issued later in the same
            // frame would still find this fragment alive and usable.
            DisableInteractionVolumes();
            gameObject.SetActive(false);
            Destroy(gameObject);
        }

        private void DisableInteractionVolumes()
        {
            Collider[] colliders = GetComponentsInChildren<Collider>(true);
            for (int i = 0; i < colliders.Length; i++) colliders[i].enabled = false;

            InteractionTarget[] targets = GetComponentsInChildren<InteractionTarget>(true);
            for (int i = 0; i < targets.Length; i++) targets[i].enabled = false;
        }
    }
}
