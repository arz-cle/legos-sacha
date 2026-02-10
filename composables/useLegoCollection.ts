import type { Ref } from 'vue'

interface LegoItem {
  name: string
  theme: string
  image: string
  date?: string
  createdAt?: string
  _path?: string
}

interface UseLegoCollectionOptions {
  batchSize?: number
}

export function useLegoCollection(
  allLegos: Ref<LegoItem[] | null>,
  options: UseLegoCollectionOptions = {}
) {
  const batchSize = options.batchSize ?? 20

  const searchQuery = ref('')
  const activeTheme = ref<string | null>(null)
  const currentSort = ref<'date' | 'name'>('date')
  const displayCount = ref(batchSize)

  const normalize = (str: string): string =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

  const filteredLegos = computed(() => {
    let items = allLegos.value ?? []

    if (activeTheme.value) {
      items = items.filter(item => item.theme === activeTheme.value)
    }

    if (searchQuery.value.trim()) {
      const query = normalize(searchQuery.value.trim())
      items = items.filter(item =>
        normalize(item.name).includes(query) ||
        normalize(item.theme).includes(query)
      )
    }

    if (currentSort.value === 'date') {
      items = [...items].sort((a, b) => {
        const dateA = a.date || a.createdAt || '1970-01-01'
        const dateB = b.date || b.createdAt || '1970-01-01'
        return new Date(dateB).getTime() - new Date(dateA).getTime()
      })
    } else {
      items = [...items].sort((a, b) =>
        a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
      )
    }

    return items
  })

  watch([searchQuery, activeTheme, currentSort], () => {
    displayCount.value = batchSize
  })

  const visibleLegos = computed(() =>
    filteredLegos.value.slice(0, displayCount.value)
  )

  const hasMore = computed(() =>
    displayCount.value < filteredLegos.value.length
  )

  const totalCount = computed(() => filteredLegos.value.length)

  function loadMore() {
    displayCount.value += batchSize
  }

  return {
    visibleLegos,
    searchQuery,
    activeTheme,
    currentSort,
    hasMore,
    loadMore,
    totalCount,
  }
}
