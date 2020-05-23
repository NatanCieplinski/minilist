<template>
   <div>{{ todo }}</div>
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
<style lang="sass" scoped></style>
