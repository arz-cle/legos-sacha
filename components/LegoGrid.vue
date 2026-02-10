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
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      <LegoCard
        v-for="lego in legos"
        :key="lego._path || lego.name"
        :lego="lego"
      />
    </div>

    <div
      v-else
      class="text-center py-16"
    >
      <div class="text-5xl mb-4">🧱</div>
      <p class="text-lg font-semibold text-lego-dark-gray">Aucun LEGO trouvé</p>
      <p class="text-sm text-gray-400 mt-1">Essaie de modifier ta recherche ou tes filtres</p>
    </div>

    <slot name="after" />
  </div>
</template>
