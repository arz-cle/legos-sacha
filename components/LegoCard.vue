<script setup lang="ts">
defineProps<{
  lego: {
    name: string
    theme: string
    image: string
    date?: string
  }
}>()
</script>

<template>
  <div class="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
    <div class="aspect-[4/3] overflow-hidden bg-lego-light-gray">
      <img
        :src="lego.image"
        :alt="lego.name"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-3">
      <h3 class="font-bold text-sm sm:text-base text-lego-black leading-tight mb-1.5">
        {{ lego.name }}
      </h3>
      <span class="badge bg-lego-yellow/20 text-lego-black/70">
        {{ lego.theme }}
      </span>
    </div>
  </div>
</template>
