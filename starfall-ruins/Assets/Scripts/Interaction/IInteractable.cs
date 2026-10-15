using UnityEngine;

namespace StarfallRuins.Interaction
{
    /// <summary>
    /// Anything the player can target with the interact key.
    /// Implementations live on the same GameObject that <see cref="PlayerInteractor"/>
    /// discovers through physics overlap queries.
    /// </summary>
    public interface IInteractable
    {
        /// <summary>Text shown in the HUD while this target is focused.</summary>
        string Prompt { get; }

        /// <summary>False when the target is present but currently refuses interaction.</summary>
        bool CanInteract { get; }

        /// <summary>Called once when the player presses the interact key.</summary>
        void Interact(GameObject interactor);
    }
}
