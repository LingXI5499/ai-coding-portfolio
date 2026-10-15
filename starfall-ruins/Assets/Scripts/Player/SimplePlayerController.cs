using UnityEngine;
using UnityEngine.InputSystem;

[RequireComponent(typeof(CharacterController))]
public sealed class SimplePlayerController : MonoBehaviour
{
    [Min(0.1f)] public float moveSpeed = 6f;
    [Min(0.1f)] public float jumpHeight = 1.5f;
    public float gravity = -20f;

    [Tooltip("Ignore keyboard input while the game window does not have focus. "
        + "Keeps the demo paused when the Editor is behind another window.")]
    [SerializeField] private bool requireFocus = true;

    private CharacterController characterController;
    private float verticalVelocity;

    private void Awake()
    {
        characterController = GetComponent<CharacterController>();
    }

    private void Update()
    {
        // Still apply gravity while unfocused so the player settles on the ground
        // instead of hanging in the air.
        bool acceptInput = !requireFocus || Application.isFocused;

        Keyboard keyboard = acceptInput ? Keyboard.current : null;

        float x = 0f;
        float z = 0f;
        if (keyboard != null)
        {
            x = (keyboard.dKey.isPressed ? 1f : 0f) - (keyboard.aKey.isPressed ? 1f : 0f);
            z = (keyboard.wKey.isPressed ? 1f : 0f) - (keyboard.sKey.isPressed ? 1f : 0f);
        }

        Vector3 horizontal = Vector3.ClampMagnitude(transform.right * x + transform.forward * z, 1f) * moveSpeed;

        if (characterController.isGrounded && verticalVelocity < 0f)
            verticalVelocity = -2f;

        if (keyboard != null && characterController.isGrounded && keyboard.spaceKey.wasPressedThisFrame)
            verticalVelocity = Mathf.Sqrt(jumpHeight * -2f * gravity);

        verticalVelocity += gravity * Time.deltaTime;
        characterController.Move((horizontal + Vector3.up * verticalVelocity) * Time.deltaTime);
    }
}
