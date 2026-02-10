import type { Ref } from 'vue'

export function useInfiniteScroll(
  target: Ref<HTMLElement | null>,
  callback: () => void,
  options: IntersectionObserverInit = { rootMargin: '200px' }
) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        callback()
      }
    }, options)

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
