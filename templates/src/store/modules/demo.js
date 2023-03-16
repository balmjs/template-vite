import { reactive, toRefs } from 'vue'

const state = reactive({
  demoMessage: 'Hello BalmUI'
})

const useDemoStore = () => {
  return {
    ...toRefs(state)
  }
}

export default useDemoStore
