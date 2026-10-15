using UnityEngine;

namespace StarfallRuins.Interaction
{
    /// <summary>
    /// Marker placed on a target's trigger volume so <see cref="PlayerInteractor"/>
    /// can find it with a cheap overlap query without scanning the whole hierarchy.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class InteractionTarget : MonoBehaviour
    {
        [Tooltip("The interactable that owns this volume. Defaults to a component on this GameObject.")]
        [SerializeField] private MonoBehaviour interactableBehaviour;

        public IInteractable Interactable
        {
            get
            {
                if (interactableBehaviour is IInteractable direct) return direct;
                return GetComponent<IInteractable>();
            }
        }

        private void Reset()
        {
            interactableBehaviour = GetComponent<IInteractable>() as MonoBehaviour;
        }
    }
}
