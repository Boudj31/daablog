import axios from "axios";
import Vue from "vue";
import VueX from 'vuex'

Vue.use(VueX);

const store = new VueX.Store({
    state: {
        posts: [],
        todos: [], 
    }, // contient l'ensemble des propriétés -> data
    getters: {
        allTodos(state) {
            return state.todos
        }, 
        todoNotCompleted(state) {
          return state.todos.filter((todo) => todo.completed)
        },
        todoCompleted(state) {
            return state.todos.filter((todo) => !todo.completed)
          },
        postPublic(state) {
            return state.posts.filter((post) => post.isPublic)
        }
    }, // les propriétés calculées -> computed
    mutations: {
        SET_POST(state, posts) {
            console.log(posts)
            state.posts = posts
        },
        ADD_TODO(state, todo) {
            state.todos.push(todo)
        },

        SET_TODOS(state, todos) {
            console.log(todos)
            state.todos = todos
        },
        DELETE_TODO(state, todo) {
            let todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        COMPLETE_TODO(state, todo) {
            todo.completed = !todo.completed
        }


    }, // permet de modifer mon state
    actions: {
        addTodo( {commit}, title) {
            const newTodo = {
                userId: 1,
                id: Math.floor(Math.random() * 100),
                title: title,
                completed: false
            }
            commit("ADD_TODO", newTodo)
        },
        deleteTodo({commit}, todo){
            commit("DELETE_TODO", todo)
        },

        async loadPost({commit}) {
            await axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
                       .then((response) => {
                        commit("SET_POST", response.data)
                       })
        },
        async loadTodos({commit}) {
            await axios.get("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10")
                       .then((response) => {
                        commit("SET_TODOS", response.data)
                       })
        },
        completeTodo({commit}, todo) {
            commit("COMPLETE_TODO", todo)
           },
    }, // permet d'effecter de la logique dans mon code -> methods
})

export default store;