<script setup lang="ts">
const props = defineProps<{
  hasMore: boolean
}>()

const emit = defineEmits<{
  loadMore: []
}>()

const sentinel = ref<HTMLElement | null>(null)

useInfiniteScroll(sentinel, () => {
  if (props.hasMore) {
    emit('loadMore')
  }
})
</script>

<template>
  <div ref="sentinel" class="flex justify-center py-8">
    <div v-if="hasMore" class="flex items-center gap-2 text-brand-500 text-sm font-semibold">
      <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      <span>Chargement...</span>
    </div>
  </div>
</template>
