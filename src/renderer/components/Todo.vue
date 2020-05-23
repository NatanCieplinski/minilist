<template>
   <div class="todo">
      <BaseCheckbox />
      <span>
         {{ todo.title }}
      </span>
      
   </div>
</template>

<script>
export default {
   props: {
      todo: {
         type: Object,
         default: null
      }
   }
}
</script>
<style lang="sass" scoped>
.todo
   height: 40px
   border-bottom: 1px solid #dfdfdf
   display: grid
   align-items: center
   grid-template-rows: 1fr
   grid-template-columns: 24px auto 24px
   column-gap: 8px
</style>
