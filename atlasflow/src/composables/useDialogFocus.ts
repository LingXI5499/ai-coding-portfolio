import { onMounted, onBeforeUnmount, type Ref } from 'vue'
export function useDialogFocus(root: Ref<HTMLElement | undefined>) {
  let previous: HTMLElement | null = null
  function trap(event: KeyboardEvent) {
    if (event.key !== 'Tab' || !root.value) return
    const nodes = Array.from(
      root.value.querySelectorAll<HTMLElement>(
        'button:not(:disabled), a[href], input, [tabindex="0"]',
      ),
    ).filter((el) => el.getClientRects().length)
    if (!nodes.length) {
      event.preventDefault()
      return
    }
    const first = nodes[0]!,
      last = nodes[nodes.length - 1]!
    if (
      event.shiftKey &&
      (document.activeElement === first || document.activeElement === root.value)
    ) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
  onMounted(() => {
    previous = document.activeElement as HTMLElement | null
    root.value?.querySelector<HTMLElement>('button')?.focus()
    document.addEventListener('keydown', trap)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', trap)
    if (previous?.isConnected) previous.focus()
  })
}
