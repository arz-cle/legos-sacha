<script setup lang="ts">
defineProps<{
  totalCount?: number
}>()
</script>

<template>
  <header class="bg-white border-b border-brand-600/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div class="flex items-end justify-between gap-6">
        <div>
          <p class="font-mono text-sm text-brand-600 mb-3">
            Collection LEGO
          </p>
          <h1 class="text-5xl sm:text-7xl font-bold tracking-tighter text-brand-600 leading-none">
            Les LEGO<br />de Sacha
          </h1>
        </div>
        <div v-if="totalCount !== undefined" class="hidden sm:block text-right">
          <p class="font-mono text-sm text-brand-600">Sets</p>
          <p class="text-5xl font-semibold tracking-tight text-brand-900 mt-0.5">{{ totalCount }}</p>
        </div>
      </div>
    </div>
  </header>
</template>
