<script setup lang="ts">
defineProps<{
  themes: string[]
  activeTheme: string | null
}>()

const emit = defineEmits<{
  'update:activeTheme': [value: string | null]
}>()

function selectTheme(theme: string | null) {
  emit('update:activeTheme', theme)
}
</script>

<template>
  <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4">
    <button
      @click="selectTheme(null)"
      :class="[
        'shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200',
        activeTheme === null
          ? 'bg-lego-red text-white shadow-sm'
          : 'bg-white text-lego-dark-gray border border-gray-200 hover:border-lego-red/30 hover:text-lego-red'
      ]"
    >
      Tous
    </button>
    <button
      v-for="theme in themes"
      :key="theme"
      @click="selectTheme(theme)"
      :class="[
        'shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200',
        activeTheme === theme
          ? 'bg-lego-red text-white shadow-sm'
          : 'bg-white text-lego-dark-gray border border-gray-200 hover:border-lego-red/30 hover:text-lego-red'
      ]"
    >
      {{ theme }}
    </button>
  </div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
