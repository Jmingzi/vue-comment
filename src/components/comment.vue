<template>
  <div class="vue-comment">
    <div class="vue-comment__header">
      <span class="vue-comment__header-num">共 <span>36</span> 条评论</span>
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
      :quote-input="currentReplyContent"
      :has-login="false"
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import CommentItem from './comment-item.vue'
import CommentEditor from './comment-editor.vue'
import { CommentListItem } from '../types/comment'

export default Vue.extend({
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
    }
  }
})
</script>

<style lang="less">
@import '../style/var';

.vue-comment {
  max-width: 700px;
  margin: 10px auto;
  font-size: 14px;
  &__header {
    line-height: 45px;
    border-bottom: 1px @border-color dashed;
    &-num {
      color: #666;
      span {
        color: @main-color;
      }
    }
  }
  &__list {
    padding: 20px 0;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
