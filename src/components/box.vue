<template>
  <div class="vue-comment__box">
    <avatar :url="url" />
    <div class="vue-comment__box-right">
      <div class="vue-comment__box-header">
        <slot name="header-left" />
        <slot name="header-right" />
      </div>
      <div class="vue-comment__box-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Avatar from './avatar'

export default Vue.extend({
  props: {
    url: {
      type: String
    }
  },

  components: {
    Avatar
  }
})
</script>

<style lang="less">
@import '../style/var';

.vue-comment__box {
  display: flex;
  margin-bottom: 20px;

  &-right {
    flex-grow: 1;
    border: 1px @border-color solid;
    border-radius: 4px;
  }
  &-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    // line-height: 35px;
    background-color: @bg-color;
    padding: 0 10px;
    a {
      text-decoration: none;
      color: @main-color;
    }
    &:before {
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      border: 1px @border-color solid;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%) rotate(45deg);
      border-radius: 3px;
      background-color: @bg-color;
    }
  }
  &-content {
    padding: 20px 10px;
  }
}
</style>
