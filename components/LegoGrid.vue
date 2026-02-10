<script setup lang="ts">
defineProps<{
  legos: Array<{
    name: string
    theme: string
    image: string
    date?: string
    _path?: string
  }>
}>()
</script>

<template>
  <div>
    <div
      v-if="legos.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
    >
      <LegoCard
        v-for="lego in legos"
        :key="lego._path || lego.name"
        :lego="lego"
      />
    </div>

    <div
      v-else
      class="text-center py-20"
    >
      <div class="w-20 h-20 mx-auto mb-5 rounded-xl bg-brand-100 flex items-center justify-center">
        <span class="text-4xl">🧱</span>
      </div>
      <p class="text-xl font-extrabold text-gray-900">Aucun LEGO trouve</p>
      <p class="text-sm text-gray-400 mt-2">Essaie de modifier ta recherche ou tes filtres</p>
    </div>

    <slot name="after" />
  </div>
</template>
