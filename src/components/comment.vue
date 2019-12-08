<template>
  <div class="vue-comment">
    <div class="vue-comment__header">
      <span class="vue-comment__header-num">
        <template v-if="nums">共 <span>36</span> 条评论</template>
        <template>沙发还在～</template>
      </span>
      <a href="https://github.com/Jmingzi/vue-comment" target="_blank" class="vue-comment__header-logo">来自 vue 通用评论组件</a>
    </div>
    <div class="vue-comment__list">
      <comment-item
        v-for="item in list"
        :key="item.id"
        :detail="item"
        @opt="type => handleOpt(type, item)"
      />
    </div>
    <comment-editor
      :quote-input.sync="currentReplyContent"
      :user="user"
      @submit="handleSubmit"
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import CommentItem from './comment-item.vue'
import CommentEditor from './comment-editor.vue'
import { CommentListItem } from '../types/comment'
Vue.use(VueCompositionApi)

export default Vue.extend({
  name: 'vue-comment',

  components: {
    CommentItem,
    CommentEditor
  },

  data () {
    return {
      currentReplyContent: ''
    }
  },

  props: {
    user: {
      type: Object
    },
    nums: {
      type: Number
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    handleOpt (type: 'reply' | 'edit', item: CommentListItem) {
      if (type === 'reply') {
        this.currentReplyContent = item.content
      }
    },

    handleSubmit (input: string, inputCompiler: string) {
      this.$emit('submit', input, inputCompiler)
    }
  }
})
</script>
