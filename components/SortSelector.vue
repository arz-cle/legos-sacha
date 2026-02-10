<script setup lang="ts">
defineProps<{
  currentSort: 'date' | 'name'
}>()

const emit = defineEmits<{
  'update:currentSort': [value: 'date' | 'name']
}>()
</script>

<template>
  <div class="flex bg-white border border-brand-600/10 rounded-2xl overflow-hidden">
    <button
      @click="emit('update:currentSort', 'date')"
      :class="[
        'px-5 py-3 text-sm font-mono font-light transition-all duration-200',
        currentSort === 'date'
          ? 'bg-brand-600 text-white'
          : 'text-brand-900/60 hover:text-brand-600'
      ]"
    >
      Date
    </button>
    <button
      @click="emit('update:currentSort', 'name')"
      :class="[
        'px-5 py-3 text-sm font-mono font-light transition-all duration-200',
        currentSort === 'name'
          ? 'bg-brand-600 text-white'
          : 'text-brand-900/60 hover:text-brand-600'
      ]"
    >
      Nom
    </button>
  </div>
</template>
