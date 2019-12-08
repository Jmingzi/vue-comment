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
import Avatar from './avatar.vue'

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
