using UnityEngine;

public sealed class RotateTarget : MonoBehaviour
{
    [Min(0f)] public float degreesPerSecond = 75f;

    private void Update()
    {
        transform.Rotate(Vector3.up, degreesPerSecond * Time.deltaTime, Space.World);
    }
}
