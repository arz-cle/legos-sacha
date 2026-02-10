<script setup lang="ts">
defineProps<{
  currentSort: 'date' | 'name'
}>()

const emit = defineEmits<{
  'update:currentSort': [value: 'date' | 'name']
}>()
</script>

<template>
  <div class="flex bg-white border border-gray-200 rounded-xl overflow-hidden">
    <button
      @click="emit('update:currentSort', 'date')"
      :class="[
        'px-3 py-2 text-sm font-semibold transition-all duration-200',
        currentSort === 'date'
          ? 'bg-lego-blue text-white'
          : 'text-lego-dark-gray hover:text-lego-blue'
      ]"
    >
      Date
    </button>
    <button
      @click="emit('update:currentSort', 'name')"
      :class="[
        'px-3 py-2 text-sm font-semibold transition-all duration-200',
        currentSort === 'name'
          ? 'bg-lego-blue text-white'
          : 'text-lego-dark-gray hover:text-lego-blue'
      ]"
    >
      Nom
    </button>
  </div>
</template>
