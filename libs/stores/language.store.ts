export const useLanguageStore = defineStore('language', () => {
  const languages = ref<Language[]>([])
  const isLoading = ref(false)

  const fetchLanguages = async () => {
    if (isLoading.value || languages.value.length > 0) return

    isLoading.value = true

    try {
      const { data } = await useApi<Language[]>(API.LANGUAGE.GET_LANGUAGES)
      if (data?.value?.length) {
        languages.value = data.value
      }
    } catch (error) {
      console.error('[LanguageStore]', error)
    } finally {
      isLoading.value = false
    }
  }

  const getLanguage = (id: string) => {
    if (languages.value.length < 1) {
      fetchLanguages()
      return 'Unknown'
    }

    const language = languages.value.find((l) => l.iso_639_1 === id)
    return language?.english_name || 'Unknown'
  }

  return {
    getLanguage,
  }
})
