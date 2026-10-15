using StarfallRuins.Interaction;
using UnityEngine;
using UnityEngine.InputSystem;

namespace StarfallRuins.Player
{
    /// <summary>
    /// Finds the nearest <see cref="IInteractable"/> around a probe transform and
    /// runs it when the player presses the interact key.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class PlayerInteractor : MonoBehaviour
    {
        [Header("Probe")]
        [Tooltip("Origin of the interaction sphere. Falls back to this transform when empty.")]
        [SerializeField] private Transform probe;

        [Tooltip("Radius in meters. Must cover the trigger volumes the player should reach.")]
        [Min(0.1f)][SerializeField] private float radius = 2.6f;

        [Tooltip("Volume the probe must overlap. Use 0 to accept every layer.")]
        [SerializeField] private LayerMask interactableMask = ~0;

        [Tooltip("Draw the probe volume in the Scene view.")]
        [SerializeField] private bool drawGizmos = true;

        [Header("Out-of-world recovery")]
        [Tooltip("A CharacterController recovers to this height when it falls below the kill plane.")]
        [SerializeField] private float killPlaneY = -5f;

        [Tooltip("Where to put the player back. Leave zero to reuse the position this component started at.")]
        [SerializeField] private Vector3 respawnPoint;

        [Tooltip("Disable to let the player fall forever while debugging.")]
        [SerializeField] private bool respawnWhenBelowKillPlane = true;

        private readonly Collider[] hits = new Collider[32];
        private IInteractable current;
        private MonoBehaviour currentBehaviour;
        private CharacterController characterController;
        private Vector3 startPosition;
        private Vector3 probeOriginOffset;

        /// <summary>The interactable currently in range, or null.</summary>
        public IInteractable Current => current;

        /// <summary>True while a usable target is in range.</summary>
        public bool HasTarget => current != null;

        private void Reset()
        {
            probe = transform;
            interactableMask = ~0;
        }

        private void Awake()
        {
            characterController = GetComponent<CharacterController>();
            if (probe == null) probe = transform;
            startPosition = transform.position;

            // Probe from the middle of the character capsule so the reach is symmetric;
            // a CharacterController's transform sits at its feet.
            if (probe == transform && characterController != null)
            {
                probeOriginOffset = Vector3.up * characterController.center.y;
            }
        }

        /// <summary>
        /// Editor-time wiring used by the scene builder. Not intended for runtime use,
        /// where the serialized fields are the source of truth.
        /// </summary>
        public void Configure(Transform probeTransform, LayerMask mask, float interactionRadius)
        {
            probe = probeTransform;
            interactableMask = mask;
            radius = interactionRadius;
        }

        private void Update()
        {
            RecoverIfOutOfWorld();
            RefreshCurrent();

            Keyboard keyboard = Keyboard.current;
            if (keyboard == null) return;
            if (!keyboard.eKey.wasPressedThisFrame) return;

            TryInteract();
        }

        /// <summary>
        /// Run the focused interaction, if any. Exposed so a UI button or an automated
        /// test can drive the same path as the interact key.
        /// </summary>
        /// <returns>True when an interaction actually ran.</returns>
        public bool TryInteract()
        {
            // Re-evaluate the focus first: a caller can interact in the same frame the
            // player moved (scripted drive, UI button) before Update would refresh it.
            RefreshCurrent();

            if (current == null || currentBehaviour == null) return false;
            if (!currentBehaviour.isActiveAndEnabled) return false;
            if (!current.CanInteract) return false;

            current.Interact(gameObject);
            return true;
        }

        /// <summary>
        /// A CharacterController that leaves the level falls forever, which looks like a
        /// hang. Put it back instead so the demo stays playable while the level is a grey box.
        /// </summary>
        private void RecoverIfOutOfWorld()
        {
            if (!respawnWhenBelowKillPlane) return;
            if (characterController == null) return;
            if (transform.position.y >= killPlaneY) return;

            Vector3 target = respawnPoint == Vector3.zero ? startPosition : respawnPoint;
            characterController.enabled = false;
            transform.position = target;
            characterController.enabled = true;

            Debug.LogWarning("PlayerInteractor: player fell below " + killPlaneY
                + "m and was returned to " + target + ".", this);
        }

        /// <summary>World position the interaction sphere is centred on.</summary>
        private Vector3 ProbeOrigin => probe != null ? probe.position : transform.position + probeOriginOffset;

        /// <summary>Re-evaluate the focused target and publish it to the HUD.</summary>
        private void RefreshCurrent()
        {
            IInteractable best = null;
            MonoBehaviour bestBehaviour = null;
            float bestDistance = float.MaxValue;

            Vector3 origin = ProbeOrigin;
            int count = Physics.OverlapSphereNonAlloc(
                origin, radius, hits, interactableMask, QueryTriggerInteraction.Collide);

            for (int i = 0; i < count; i++)
            {
                Collider candidate = hits[i];
                if (candidate == null) continue;
                if (candidate.transform.IsChildOf(transform)) continue;

                InteractionTarget target = candidate.GetComponentInParent<InteractionTarget>();
                if (target == null) continue;

                IInteractable interactable = target.Interactable;
                if (interactable == null) continue;

                MonoBehaviour behaviour = interactable as MonoBehaviour;
                if (behaviour == null) continue;
                if (!behaviour.isActiveAndEnabled) continue;
                if (!interactable.CanInteract) continue;

                // Prefer the closest point on the collider so large volumes do not win by pivot distance.
                Vector3 closest = candidate.ClosestPoint(origin);
                float distance = Vector3.Distance(origin, closest);
                if (distance >= bestDistance) continue;

                bestDistance = distance;
                best = interactable;
                bestBehaviour = behaviour;
            }

            if (!ReferenceEquals(best, current))
            {
                current = best;
                currentBehaviour = bestBehaviour;
            }

            InteractionPrompt.SetTarget(current);
        }

        private void OnDisable()
        {
            current = null;
            currentBehaviour = null;
            InteractionPrompt.SetTarget(null);
        }

        private void OnDrawGizmosSelected()
        {
            if (!drawGizmos) return;
            Vector3 origin = Application.isPlaying ? ProbeOrigin : transform.position + probeOriginOffset;
            Gizmos.color = new Color(0.2f, 0.9f, 1f, 0.35f);
            Gizmos.DrawWireSphere(origin, radius);
        }
    }
}
