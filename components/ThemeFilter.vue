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
        'shrink-0 px-4 py-2.5 rounded-2xl text-sm font-mono font-light transition-all duration-200',
        activeTheme === null
          ? 'bg-brand-600 text-white'
          : 'bg-white text-brand-900/60 border border-brand-600/10 hover:border-brand-600/20 hover:text-brand-600'
      ]"
    >
      Tous
    </button>
    <button
      v-for="theme in themes"
      :key="theme"
      @click="selectTheme(theme)"
      :class="[
        'shrink-0 px-4 py-2.5 rounded-2xl text-sm font-mono font-light transition-all duration-200',
        activeTheme === theme
          ? 'bg-brand-600 text-white'
          : 'bg-white text-brand-900/60 border border-brand-600/10 hover:border-brand-600/20 hover:text-brand-600'
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
