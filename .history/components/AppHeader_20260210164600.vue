<script setup lang="ts">
defineProps<{
  totalCount?: number
}>()
</script>

<template>
  <header class="relative overflow-hidden gradient-bg">
    <!-- Decorative blobs -->
    <div class="absolute w-96 h-96 rounded-full bg-brand-300/40 -top-48 -left-24 blur-[80px] pointer-events-none" />
    <div class="absolute w-72 h-72 rounded-full bg-purple-300/30 -top-20 right-10 blur-[80px] pointer-events-none" />
    <div class="absolute w-56 h-56 rounded-full bg-cyan-300/30 top-10 left-1/3 blur-[80px] pointer-events-none" />

    <div class="relative max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-brand-600 font-bold text-sm tracking-wide uppercase mb-2">
            Collection LEGO
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-950 tracking-tight leading-none">
            Les LEGO<br />de Sacha
          </h1>
        </div>
        <div v-if="totalCount !== undefined" class="hidden sm:block">
          <div class="glass rounded-xl px-5 py-3 shadow-soft border border-white/50">
            <p class="text-3xl font-extrabold text-brand-700">{{ totalCount }}</p>
            <p class="text-xs font-semibold text-brand-500 uppercase tracking-wide">set{{ totalCount !== 1 ? 's' : '' }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
