<template>
  <div class="vue__editor">
    <box :url="user && user.avatar">
      <div slot="header-left" class="vue__editor-tabs">
        <span
          :class="['vue__editor-tab', { active: tab === 0 }]"
          @click="handleTab(0)"
        >
          Write
        </span>
        <span
          :class="['vue__editor-tab', { active: tab === 1 }]"
          @click="handleTab(1)"
        >
          Preview
        </span>
      </div>
      <div class="flex-center-vertical" slot="header-right">
        <a href="javascript:;" @click="handleLogin">使用 github 登录</a>
      </div>
      <div class="vue__editor-input">
        <textarea
          v-show="tab === 0"
          v-model="input"
          ref="textarea"
          rows="3"
          placeholder="Leave a comment"
          maxlength="1000"
        />
        <div
          v-if="tab === 1"
          class="markdown-body editor__style"
          v-html="inputCompiler || 'Leave a comment'"
          style="padding: 0;"
        >
          <span>转化中...</span>
        </div>
      </div>
      <div style="text-align: right; padding-top: 10px;">
        <div
          class="vue__editor__btn"
          :class="{
            disabled: btnDisabled
          }"
          @click="handleSubmit()"
        >
          提 交
        </div>
      </div>
    </box>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import hljs from 'highlight.js'
import marked from 'marked'
import { createComponent, reactive, watch, computed, toRefs, onMounted } from '@vue/composition-api'
import Box from './box.vue'
import { User } from '../types/comment'

const getQuotaReg = function (str: string) {
  return new RegExp(`> ${str}\n`, 'g')
}

export default createComponent<{ quoteInput: string, user: User }>({
  components: {
    Box
  },

  setup (props, context) {
    const state = reactive({
      tab: 0,
      input: '',
      inputCompiler: '',
      oldInput: ''
    })
    const btnDisabled = computed(() => {
      return !state.input.length || !props.user
    })
    const compiler = function () {
      state.inputCompiler = marked(state.input, {
        sanitize: true,
        smartlists: true,
        smartypants: true,
        highlight (code: string) {
          return hljs.highlightAuto(code).value
        }
      })
    }
    const handleTab = function (tab: 0 | 1) {
      if (tab === 1) {
        compiler()
        Vue.nextTick(() => {
          state.tab = tab
        })
      } else {
        state.tab = tab
      }
    }
    const handleSubmit = function () {
      if (!btnDisabled.value) {
        compiler()
        context.emit('submit', state.input, state.inputCompiler)
      }
    }

    onMounted(() => {
      watch(() => props.quoteInput, (val: string) => {
        if (val) {
          state.input = `> ${val}\n${state.oldInput
            ? state.input.replace(getQuotaReg(state.oldInput), '')
            : state.input
          }`
          state.oldInput = val
        }
        Vue.nextTick(() => {
          context.emit('update:quote-input', '')
          // @ts-ignore
          context.refs.textarea.focus()
        })
      })
    })
    return {
      handleTab,
      handleSubmit,
      ...toRefs(state),
      btnDisabled,
      handleLogin () {
        context.emit('login')
      }
    }
  },

  props: {
    quoteInput: {
      type: String,
      default: ''
    },
    user: {
      type: Object
    }
  }
})
</script>
