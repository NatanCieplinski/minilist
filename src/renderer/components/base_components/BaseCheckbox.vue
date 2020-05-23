<template>
   <div class="checkbox">
      <div class="border" @click="check">
         <div class="inner" :class="{ checked: checked }">
            <BaseIcon width="14px" height="14px" color="#ffffff">
               <CheckIcon />
            </BaseIcon>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         checked: false
      }
   },
   methods: {
      check() {
         this.$emit('check', this.checked)
         this.checked = !this.checked
      }
   }
}
</script>

<style lang="sass" scoped>
.checkbox
  display: flex
  align-items: center
  >.border
    width: 20px
    height: 20px
    box-sizing: border-box
    border: 3px solid #248ffd
    border-radius: 9px
    padding: 0px
    display: flex
    align-items: center
    justify-content: center
    >.inner
      transition: .1s all linear
      background-color: #248ffd
      width: 0px
      height: 0px
      display: flex
      align-items: center
      justify-content: center
    .checked
      transition: .1s width height linear
      width: 20px
      height: 20px
      border-radius: 10px
</style>
