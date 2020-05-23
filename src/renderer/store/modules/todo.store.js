import { v4 as uuidv4 } from 'uuid'

export default {
   namespaced: true,
   state: {
      todos: [
         {
            id: '366d8fc0-62eb-4ff1-bc26-ee632d7785fd',
            completed: false,
            title: 'Fare la spesa',
            description:
               'Fare la spesa per la festa che voglio dare a casa mia',
            important: false
         },
         {
            id: '8c6a471e-52df-4ed2-b02e-d26bc712d653',
            completed: false,
            title: 'Pulire casa',
            description:
               'Pulire casa per gli ospiti che devono venire a trovarmi',
            important: true
         }
      ]
   },
   mutations: {},
   actions: {
      newTodo() {
         const id = uuidv4()
      }
   },
   getters: {}
}
