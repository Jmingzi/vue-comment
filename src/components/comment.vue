<template>
  <div class="vue-comment">
    <div class="vue-comment__header">
      <span class="vue-comment__header-num">
        <template v-if="nums">共 <span>{{ nums }}</span> 条评论</template>
        <template v-else>沙发还在～</template>
      </span>
      <a
        href="https://github.com/Jmingzi/vue-comment"
        target="_blank"
        class="vue-comment__header-logo"
      >
        what`s v-comment ?
      </a>
    </div>
    <div class="vue-comment__list">
      <comment-item
        v-for="item in list"
        :key="item.id"
        :detail="item"
        :is-self="user && item.user.id === user.id"
        @opt="type => handleOpt(type, item)"
      />
    </div>
    <comment-editor
      :quote-input.sync="currentReplyContent"
      :user="user"
      ref="editor"
      @submit="handleSubmit"
      @login="login"
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
    handleOpt (type: 'reply' | 'edit' | 'del', item: CommentListItem) {
      if (type === 'reply') {
        this.currentReplyContent = item.input
      } else if (type === 'del') {
        this.$emit('del', item)
      }
    },

    handleSubmit (input: string, inputCompiler: string) {
      this.$emit('submit', input, inputCompiler)
    },

    login () {
      if (!this.user) {
        this.$emit('login')
      }
    },

    resetEditor () {
      // @ts-ignore
      this.$refs.editor.resetEditor()
    }
  }
})
</script>
