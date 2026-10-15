using System;
using UnityEngine;

namespace StarfallRuins.Core
{
    /// <summary>
    /// Single source of truth for Starfall Ruins run state: collected star fragments,
    /// altar activation and portal unlock.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class GameManager : MonoBehaviour
    {
        /// <summary>Number of star fragments the demo requires.</summary>
        public const int RequiredFragments = 3;

        /// <summary>Number of altars that must be lit to unlock the portal.</summary>
        public const int RequiredAltars = 3;

        [Tooltip("Log every state change to the Console.")]
        [SerializeField] private bool logStateChanges = true;

        private static GameManager instance;

        /// <summary>Live instance, or null when the scene has no GameManager.</summary>
        public static GameManager Instance
        {
            get
            {
                if (instance != null) return instance;
                instance = FindAnyObjectByType<GameManager>();
                return instance;
            }
        }

        /// <summary>Raised whenever a fragment is collected or consumed.</summary>
        public event Action<int> FragmentsChanged;

        /// <summary>Raised whenever an altar changes activation state.</summary>
        public event Action<int, int> AltarsChanged;

        /// <summary>Raised once when the portal unlocks.</summary>
        public event Action PortalUnlocked;

        /// <summary>Raised once when the player commits to the portal.</summary>
        public event Action DemoCompleted;

        /// <summary>Star fragments currently held.</summary>
        public int Fragments { get; private set; }

        /// <summary>Star fragments picked up so far (never decreases).</summary>
        public int FragmentsCollected { get; private set; }

        /// <summary>Altars currently lit.</summary>
        public int ActiveAltars { get; private set; }

        /// <summary>True once every altar is lit.</summary>
        public bool IsPortalUnlocked { get; private set; }

        /// <summary>True after the player finished the demo.</summary>
        public bool IsDemoComplete { get; private set; }

        private void Awake()
        {
            if (instance != null && instance != this)
            {
                Debug.LogWarning("GameManager: duplicate instance disabled on '" + name + "'.", this);
                enabled = false;
                return;
            }

            instance = this;
        }

        private void OnDestroy()
        {
            if (instance == this) instance = null;
        }

        /// <summary>Collect one star fragment.</summary>
        /// <returns>True when the fragment was accepted.</returns>
        public bool CollectFragment()
        {
            if (IsDemoComplete) return false;

            Fragments++;
            FragmentsCollected++;
            Log("Star fragment collected: " + Fragments + " held, " + FragmentsCollected + " total");
            FragmentsChanged?.Invoke(Fragments);
            return true;
        }

        /// <summary>True when a fragment is available to spend on an altar.</summary>
        public bool HasFragmentAvailable => Fragments > 0;

        /// <summary>Spend one fragment to light an altar.</summary>
        /// <returns>True when the altar was lit.</returns>
        public bool TryActivateAltar()
        {
            if (IsDemoComplete) return false;
            if (IsPortalUnlocked) return false;
            if (Fragments <= 0)
            {
                Log("Altar refused: no star fragment held");
                return false;
            }

            Fragments--;
            ActiveAltars++;
            Log("Altar activated: " + ActiveAltars + "/" + RequiredAltars + " lit, " + Fragments + " fragments left");
            FragmentsChanged?.Invoke(Fragments);
            AltarsChanged?.Invoke(ActiveAltars, RequiredAltars);

            if (ActiveAltars >= RequiredAltars) UnlockPortal();
            return true;
        }

        /// <summary>Unlock the portal once every altar is lit.</summary>
        private void UnlockPortal()
        {
            if (IsPortalUnlocked) return;
            IsPortalUnlocked = true;
            Log("All altars lit: portal unlocked");
            PortalUnlocked?.Invoke();
        }

        /// <summary>Finish the demo when the player enters the unlocked portal.</summary>
        /// <returns>True when this call completed the demo.</returns>
        public bool CompleteDemo()
        {
            if (IsDemoComplete) return false;
            if (!IsPortalUnlocked) return false;

            IsDemoComplete = true;
            Log("Portal entered: demo complete (" + FragmentsCollected + " fragments, "
                + ActiveAltars + "/" + RequiredAltars + " altars)");
            DemoCompleted?.Invoke();
            return true;
        }

        private void Log(string message)
        {
            if (logStateChanges) Debug.Log("[StarfallRuins] " + message, this);
        }
    }
}
