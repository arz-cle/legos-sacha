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
  <div class="group bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden border border-brand-600/5">
    <div class="aspect-[4/3] overflow-hidden bg-white p-3 flex items-center justify-center">
      <img
        :src="lego.image"
        :alt="lego.name"
        loading="lazy"
        class="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
      />
    </div>
    <div class="p-3.5">
      <h3 class="font-extrabold text-sm sm:text-base text-gray-900 leading-tight mb-2">
        {{ lego.name }}
      </h3>
      <span class="badge bg-brand-100 text-brand-700">
        {{ lego.theme }}
      </span>
    </div>
  </div>
</template>
