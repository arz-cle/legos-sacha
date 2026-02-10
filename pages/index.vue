<script setup lang="ts">
const { data: allLegos } = await useAsyncData('all-legos', () =>
  queryContent('legos')
    .sort({ date: -1 })
    .find()
)

const { data: themesData } = await useAsyncData('themes', () =>
  queryContent('themes')
    .sort({ title: 1 })
    .find()
)

const themes = computed(() => {
  if (!Array.isArray(themesData.value)) return []
  return themesData.value.map((t: any) => t.title).filter(Boolean)
})

const {
  visibleLegos,
  searchQuery,
  activeTheme,
  currentSort,
  hasMore,
  loadMore,
  totalCount,
} = useLegoCollection(allLegos as any, { batchSize: 20 })
</script>

<template>
  <div>
    <AppHeader :total-count="totalCount" />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-col sm:flex-row gap-3 mb-8">
        <SearchBar v-model="searchQuery" class="flex-1" />
        <SortSelector
          :current-sort="currentSort"
          @update:current-sort="currentSort = $event"
        />
      </div>

      <ThemeFilter
        :themes="themes"
        :active-theme="activeTheme"
        @update:active-theme="activeTheme = $event"
        class="mb-8"
      />

      <p class="font-mono text-sm text-brand-600 mb-6">
        {{ totalCount }} set{{ totalCount !== 1 ? 's' : '' }}
      </p>

      <LegoGrid :legos="visibleLegos">
        <template #after>
          <InfiniteScrollTrigger
            :has-more="hasMore"
            @load-more="loadMore"
          />
        </template>
      </LegoGrid>
    </main>

    <AppFooter />
  </div>
</template>
