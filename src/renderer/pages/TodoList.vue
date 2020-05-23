<template>
   <div>
      <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
   </div>
</template>

<script>
import { mapState } from 'vuex'
import Todo from '@/components/Todo.vue'

export default {
   components: {
      Todo
   },
   computed: {
      ...mapState('todo', ['todos'])
   }
}
</script>

<style lang="sass" scoped></style>
