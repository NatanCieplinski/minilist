<template>
   <div id="app" class="fullscreen">
      <router-view />
   </div>
</template>

<script>
export default {
   name: 'Minilist'
}
</script>

<style lang="sass">
@import '~@/assets/variables'

.fullscreen
  box-sizing: border-box
  height: calc(100% - #{$titlebar-height})
  min-height: calc(100% - #{$titlebar-height})
  min-width: 100%
  padding: 8px
  width: 100%
</style>
