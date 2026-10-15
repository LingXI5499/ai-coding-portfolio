using StarfallRuins.Core;
using StarfallRuins.Interaction;
using UnityEngine;
using UnityEngine.UI;

namespace StarfallRuins.UI
{
    /// <summary>
    /// Minimal HUD: star fragment counter, interaction prompt and completion banner.
    /// Reads state from <see cref="GameManager"/> events and the
    /// <see cref="InteractionPrompt"/> service.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class HUDController : MonoBehaviour
    {
        /// <summary>Format used for the fragment counter.</summary>
        public const string CounterFormat = "Star Fragments {0}/{1}";

        [Header("Wiring")]
        [SerializeField] private Text counterLabel;
        [SerializeField] private Text altarLabel;
        [SerializeField] private Text promptLabel;
        [SerializeField] private Text completionLabel;

        [SerializeField] private string completionText = "DEMO COMPLETE";

        [Tooltip("Log HUD updates to the Console. Useful while validating the HUD wiring.")]
        [SerializeField] private bool logUpdates;

        private GameManager manager;

        private void Awake()
        {
            if (counterLabel == null) Debug.LogWarning("HUDController: counter label is not wired.", this);
            if (promptLabel == null) Debug.LogWarning("HUDController: prompt label is not wired.", this);
        }

        /// <summary>
        /// Editor-time wiring used by the scene builder. Not intended for runtime use,
        /// where the serialized fields are the source of truth.
        /// </summary>
        public void Configure(Text counter, Text altars, Text prompt, Text completion)
        {
            counterLabel = counter;
            altarLabel = altars;
            promptLabel = prompt;
            completionLabel = completion;
        }

        private void OnEnable()
        {
            InteractionPrompt.Register(OnPromptChanged);
        }

        private void OnDisable()
        {
            InteractionPrompt.Unregister(OnPromptChanged);
            Unsubscribe();
        }

        private void Start()
        {
            Subscribe();
            Refresh();
            if (completionLabel != null) completionLabel.enabled = false;
        }

        private void Subscribe()
        {
            manager = GameManager.Instance;
            if (manager == null)
            {
                Debug.LogWarning("HUDController: no GameManager in the scene; the HUD stays at its default text.", this);
                return;
            }

            manager.FragmentsChanged += OnFragmentsChanged;
            manager.AltarsChanged += OnAltarsChanged;
            manager.PortalUnlocked += OnPortalUnlocked;
            manager.DemoCompleted += OnDemoCompleted;
        }

        private void Unsubscribe()
        {
            if (manager == null) return;
            manager.FragmentsChanged -= OnFragmentsChanged;
            manager.AltarsChanged -= OnAltarsChanged;
            manager.PortalUnlocked -= OnPortalUnlocked;
            manager.DemoCompleted -= OnDemoCompleted;
        }

        private void Refresh()
        {
            int fragments = manager != null ? manager.Fragments : 0;
            int altars = manager != null ? manager.ActiveAltars : 0;
            SetCounter(fragments);
            SetAltars(altars);
            OnPromptChanged(InteractionPrompt.Target);
        }

        private void OnFragmentsChanged(int fragments)
        {
            SetCounter(fragments);
            if (logUpdates) Debug.Log("HUD: fragments = " + fragments, this);
        }

        private void OnAltarsChanged(int active, int required)
        {
            SetAltars(active);
            if (logUpdates) Debug.Log("HUD: altars = " + active + "/" + required, this);
        }

        private void SetCounter(int fragments)
        {
            if (counterLabel != null)
                counterLabel.text = string.Format(CounterFormat, fragments, GameManager.RequiredFragments);
        }

        private void SetAltars(int active)
        {
            if (altarLabel != null)
                altarLabel.text = "Altars " + active + "/" + GameManager.RequiredAltars;
        }

        private void OnPromptChanged(IInteractable focused)
        {
            if (promptLabel == null) return;
            bool visible = focused != null;
            promptLabel.enabled = visible;
            promptLabel.text = visible ? InteractionPrompt.Text : string.Empty;
        }

        private void OnPortalUnlocked()
        {
            if (promptLabel == null) return;
            promptLabel.enabled = true;
            promptLabel.text = "The portal is open - step inside";
        }

        private void OnDemoCompleted()
        {
            if (completionLabel == null) return;
            completionLabel.text = completionText;
            completionLabel.enabled = true;

            if (counterLabel != null) counterLabel.enabled = false;
            if (altarLabel != null) altarLabel.enabled = false;
            if (promptLabel != null) promptLabel.enabled = false;
        }
    }
}
