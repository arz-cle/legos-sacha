<script setup lang="ts">
const { data: allLegos } = await useAsyncData('all-legos', () =>
  queryContent('legos')
    .sort({ date: -1 })
    .find()
)

const { data: themesData } = await useAsyncData('themes', () =>
  queryContent('themes')
    .findOne()
)

const themes = computed(() => {
  const themeList = (themesData.value as any)?.themes
  if (!Array.isArray(themeList)) return []
  return themeList.map((t: { name: string }) => t.name)
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

    <main class="max-w-screen-xl mx-auto px-4 py-6">
      <div class="flex flex-col sm:flex-row gap-3 mb-5">
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
        class="mb-5"
      />

      <p class="text-sm text-lego-dark-gray mb-4 font-medium">
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
