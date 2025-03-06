export const useLanguageStore = defineStore('language', () => {
  const languageList = ref<Language[]>([])
  const isLoading = ref(false)

  const fetchLanguages = async () => {
    if (isLoading.value || languageList.value.length > 0) return

    isLoading.value = true

    try {
      const { data } = await useApi<Language[]>(API.LANGUAGE.GET_LANGUAGES)
      if (data?.value?.length) {
        languageList.value = data.value
      }
    } catch (error) {
      console.error('Failed to fetch languages', error)
    } finally {
      isLoading.value = false
    }
  }
  const getLanguage = (id: string) => {
    if (languageList.value.length === 0) {
      fetchLanguages()
      return 'Loading...'
    }

    const language = languageList.value.find((l) => l.iso_639_1 === id)
    return language ? language.english_name : 'Unknown'
  }

  return {
    languageList,
    fetchLanguages,
    getLanguage,
  }
})
