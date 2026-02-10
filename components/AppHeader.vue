<script setup lang="ts">
defineProps<{
  totalCount?: number
}>()
</script>

<template>
  <header class="bg-lego-red text-white shadow-md">
    <div class="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-lego-yellow rounded-lg flex items-center justify-center shadow-sm">
          <span class="text-lego-black font-extrabold text-lg">L</span>
        </div>
        <div>
          <h1 class="text-xl sm:text-2xl font-extrabold tracking-tight">
            Collection LEGO de Sacha
          </h1>
        </div>
      </div>
      <div v-if="totalCount !== undefined" class="hidden sm:flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
        <span class="text-sm font-semibold">{{ totalCount }} set{{ totalCount !== 1 ? 's' : '' }}</span>
      </div>
    </div>
  </header>
</template>
