<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

let debounceTimer: ReturnType<typeof setTimeout> | null = null

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    emit('update:modelValue', value)
  }, 300)
}
</script>

<template>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      type="text"
      :value="modelValue"
      @input="onInput"
      placeholder="Rechercher un LEGO..."
      class="w-full pl-4 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-brand-100 rounded-lg
             text-sm font-medium text-gray-900 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-300
             shadow-sm hover:shadow-soft transition-all duration-200"
    />
  </div>
</template>
