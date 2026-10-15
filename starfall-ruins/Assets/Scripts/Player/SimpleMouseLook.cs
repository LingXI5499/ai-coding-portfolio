using UnityEngine;
using UnityEngine.InputSystem;

public sealed class SimpleMouseLook : MonoBehaviour
{
    [SerializeField] private Transform player;
    [Min(0.01f)] public float sensitivity = 0.12f;
    [Range(10f, 89f)] public float maxPitch = 75f;

    private float pitch;

    public void SetPlayer(Transform target)
    {
        player = target;
    }

    private void Start()
    {
        LockCursor();
    }

    private void OnDisable()
    {
        Cursor.lockState = CursorLockMode.None;
        Cursor.visible = true;
    }

    private void Update()
    {
        Keyboard keyboard = Keyboard.current;
        if (keyboard != null && keyboard.escapeKey.wasPressedThisFrame)
        {
            Cursor.lockState = CursorLockMode.None;
            Cursor.visible = true;
        }

        Mouse mouse = Mouse.current;
        if (mouse == null) return;

        if (Cursor.lockState != CursorLockMode.Locked)
        {
            if (mouse.leftButton.wasPressedThisFrame) LockCursor();
            return;
        }

        Vector2 delta = mouse.delta.ReadValue() * sensitivity;
        if (player != null) player.Rotate(Vector3.up, delta.x, Space.World);
        pitch = Mathf.Clamp(pitch - delta.y, -maxPitch, maxPitch);
        transform.localRotation = Quaternion.Euler(pitch, 0f, 0f);
    }

    private static void LockCursor()
    {
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }
}
