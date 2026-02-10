<script setup lang="ts">
// Netlify Identity redirect (only runs client-side)
if (import.meta.client) {
  const win = window as any
  if (win.netlifyIdentity) {
    win.netlifyIdentity.on('init', (user: any) => {
      if (!user) {
        win.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <slot />
  </div>
</template>
