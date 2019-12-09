<template>
  <div id="app">
    <comment
      :list="mock"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Comment from './components/comment.vue'

const mock = [
  {
    id: 1,
    inputCompiler: '文案氛围二',
    input: '文案氛围二',
    user: {
      id: 1,
      name: '姓名',
      avatar: 'https://avatars3.githubusercontent.com/u/25201066?v=4'
    }
  },
  {
    id: 2,
    inputCompiler: 'Typed some nice words in markdown without logging-in, then logged-in and came back here, those words were gone. Anyway, good job.',
    input: 'Typed some nice words in markdown without logging-in, then logged-in and came back here, those words were gone. Anyway, good job.',
    user: {
      id: 2,
      name: 'mogita',
      avatar: 'https://avatars3.githubusercontent.com/u/1173069?v=4'
    }
  }
]

export default Vue.extend({
  name: 'app',

  data () {
    return {
      mock
    }
  },

  components: {
    Comment
  }
})
</script>

<style lang="less">
@import './style/var.less';
@import './style/index.less';
</style>
