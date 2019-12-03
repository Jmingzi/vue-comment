<template>
  <div class="vue__editor">
    <box>
      <div slot="header-left" class="vue__editor-tabs">
        <span
          :class="['vue__editor-tab', { active: tab === 0 }]"
          @click="handleTab(0)"
        >Write</span>
        <span
          :class="['vue__editor-tab', { active: tab === 1 }]"
          @click="handleTab(1)"
        >Preview</span>
      </div>
      <div class="flex-center-vertical" slot="header-right">
        <a href="javascript:;">使用 github 登录</a>
      </div>
      <div class="vue__editor-input">
        <textarea
          v-model="input"
          ref="input"
          rows="10"
          placeholder="Leave a comment"
          maxlength="1000"
        />
      </div>
      <div style="text-align: right; padding-top: 10px;">
        <div
          class="vue__editor__btn"
          :class="{
            disabled: btnDisabled
          }"
          @click="handleSubmit"
        >
          提 交
        </div>
      </div>
    </box>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Box from './box'

export default Vue.extend({
  components: {
    Box
  },

  data () {
    return {
      tab: 0,
      input: ''
    }
  },

  watch: {
    quoteInput: {
      handler (val, oldVal) {
        if (val && val !== oldVal) {
          this.input = `> ${val}\n${oldVal ? this.input.replace(this.getQuotaReg(oldVal), '') : ''}`
        }
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      },
      immediate: true
    }
  },

  props: {
    quoteInput: {
      type: String,
      default: ''
    },
    hasLogin: {
      type: Boolean
    }
  },

  computed: {
    btnDisabled () {
      return !this.input.length || !this.hasLogin
    }
  },

  methods: {
    getQuotaReg (str: string) {
      return new RegExp(`> ${str}\n`, 'g')
    },

    handleTab (tab: 0 | 1) {
      this.tab = tab
    },

    handleSubmit () {
      if (!this.btnDisabled) {
      }
    }
  }
})
</script>

<style lang="less">
@import '../style/var';

.vue__editor {
  &-tabs {
    display: flex;
    padding-top: 10px;
  }
  &-tab {
    padding: 10px;
    background-color: @bg-color;
    color: #666;
    cursor: pointer;
    &:hover {
      color: #000;
    }
    &.active {
      background-color: #fff;
      border: 1px @border-color solid;
      border-bottom: none;
      border-radius: 4px;
      color: #000;
    }
  }
  &-input {
    display: flex;
    textarea {
      flex-grow: 1;
      padding: 0;
      border: none;
      font: inherit;
      -webkit-appearance: none;
      line-height: 1.6;
      &:focus {
        outline: none;
      }
    }
  }
  &__btn {
    display: inline-block;
    padding: 7px 20px;
    background-color: @main-color;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    &.disabled {
      opacity: 0.5;
      cursor: initial;
    }
  }
  .flex-center-vertical {
    display: flex;
    align-items: center;
  }
}
</style>
