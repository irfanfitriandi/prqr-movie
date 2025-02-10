export const useLanguageStore = defineStore('language', () => {
  const languageList = ref<Language[]>([])
  const fetchLanguages = async () => {
    if (languageList.value.length === 0) {
      const { data } = await useApi<Language[]>(API.LANGUAGE.GET_LANGUAGES)
      if (data.value) {
        languageList.value = data.value
      }
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

  fetchLanguages()

  return {
    languageList,
    fetchLanguages,
    getLanguage,
  }
})
