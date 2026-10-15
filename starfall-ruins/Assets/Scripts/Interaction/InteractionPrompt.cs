using StarfallRuins.Interaction;
using UnityEngine;

namespace StarfallRuins.Interaction
{
    /// <summary>
    /// Small service seam between the interaction probe and the HUD.
    /// <see cref="PlayerInteractor"/> publishes the focused target; the HUD registers
    /// itself as the renderer. Keeps gameplay code free of UI references.
    /// </summary>
    public static class InteractionPrompt
    {
        /// <summary>Receives the focused target whenever it changes. May be null.</summary>
        public delegate void Renderer(IInteractable focused);

        private static Renderer renderer;
        private static IInteractable target;

        /// <summary>The target most recently published by the interaction probe.</summary>
        public static IInteractable Target => target;

        /// <summary>True when a target is focused and usable.</summary>
        public static bool IsVisible => target != null;

        /// <summary>Prompt text to display, or an empty string when nothing is focused.</summary>
        public static string Text
        {
            get
            {
                if (target == null) return string.Empty;
                string prompt = target.Prompt;
                return string.IsNullOrEmpty(prompt) ? "Press E to interact" : prompt;
            }
        }

        /// <summary>Publish the focused target. Called by the interaction probe every frame.</summary>
        public static void SetTarget(IInteractable focused)
        {
            if (ReferenceEquals(target, focused)) return;
            target = focused;
            renderer?.Invoke(target);
        }

        /// <summary>Register the HUD renderer and immediately replay the current target.</summary>
        public static void Register(Renderer candidate)
        {
            renderer = candidate;
            renderer?.Invoke(target);
        }

        /// <summary>Unregister the HUD renderer. Ignores a stale unregister.</summary>
        public static void Unregister(Renderer candidate)
        {
            if (!ReferenceEquals(renderer, candidate)) return;
            renderer = null;
        }
    }
}
