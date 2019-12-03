<template>
  <box :url="detail.user.avatar">
    <div slot="header-left" style="padding: 10px 0">
      <a href="https://github.com/jmingzi" target="_blank">{{ detail.user.name }}</a>
      <span class="vue-comment__time">commented on 1年前</span>
    </div>
    <div slot="header-right" class="vue-comment__opt" style="padding: 10px 0">
      <template v-if="isSelf">
        <span @click="handleOpt('edit')">编辑</span>
        <span>删除</span>
      </template>
      <span v-else @click="handleOpt('reply')">回复</span>
    </div>
    <span>{{ detail.content }}</span>
  </box>
</template>

<script lang='ts'>
import Vue from 'vue'
import Box from './box.vue'

export default Vue.extend({
  data () {
    return {
    }
  },

  components: {
    Box
  },

  props: {
    detail: {
      type: Object
    },
    isSelf: {
      type: Boolean
    }
  },

  methods: {
    handleOpt (type: string) {
      this.$emit('opt', type)
    }
  }
})
</script>

<style lang="less">
@import '../style/var';

.vue-comment {
  &__time {
    margin-left: 10px;
    color: #666;
  }
  &__opt {
    color: #666;
    span {
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
  }
}
</style>
