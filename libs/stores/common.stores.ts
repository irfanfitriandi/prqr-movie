export const useCommonStore = defineStore('common', () => {
  //State
  const isShow = ref(false)

  //Actions
  function toggleShow() {
    isShow.value = !isShow.value
  }

  return {
    isShow,
    toggleShow,
  }
})
