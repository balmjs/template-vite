<template>
  <ui-editor v-model="content"></ui-editor>
  <ui-button icon="add" @click="$alert(content)">SayHi</ui-button>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useStore } from 'balm-ui'

const store = useStore()

const state = reactive({
  content: store.demoMessage
})

const { content } = toRefs(state)
</script>
