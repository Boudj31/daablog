<template>
    <div>
        <h1 class="text-5xl font-bold my-7">TodoList avec <span class="text-indigo-500">VueX</span></h1>
        <main class="bg-slate-200 p-4 w-1/2">
            <!--Formulaire -->
            <form @submit.prevent="addTodo">
                <input 
                class="text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-slate-900 lg:w-1/2 text-lg w-full"
                type="text" v-model="newTodo" placeholder="ajouter une tache">
                <button
                type="submit"
                 class="bg-slate-900 py-2 px-4 text-white">Ajouter +</button>
            </form>

            <!--Liste de todos-->
            <h2>A faire</h2>
            <div v-for="todo in todoCompleted" :key="todo.id" class="flex gap-5">
                <p
                @click.prevent="completeTodo(todo)" 
             >{{todo.title}} </p>
                <button @click.prevent="deleteTodo(todo)">X</button>
            </div>

            <h2>Terminées</h2>
            <div v-for="todo in todoNotCompleted" :key="todo.id" class="flex gap-5">
                <p
                @click.prevent="completeTodo(todo)" 
                :style="todo.completed ? 'text-decoration:line-through' : null" >{{todo.title}} </p>
                <button @click.prevent="deleteTodo(todo)">X</button>
            </div>
            


        </main>

        
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: "TodoVueX",
    data() {
        return {
           newTodo: ''
        }
    },
    methods: {
       addTodo() {
        this.$store.dispatch("addTodo", this.newTodo)
        this.newTodo = ''
       },
       deleteTodo(todo) {
        this.$store.dispatch("deleteTodo", todo)
       },
       completeTodo(todo) {
        this.$store.dispatch("completeTodo", todo)
       }
    },
    mounted() {
        this.$store.dispatch("loadTodos")
    },
    computed: {
        ...mapGetters(["allTodos"]),
        ...mapGetters(["todoNotCompleted"]),
        ...mapGetters(["todoCompleted"])

        /*
        allTodos() {
            return this.$store.getters.allTodos
        }
        */

    }
    
}
</script>
<style lang="">
    
</style>