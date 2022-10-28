<template>
    <div>
        <h1>About</h1>
        <p>{{param}}</p>
        <p>{{param2}}</p>
        <h2
        v-show="post"
         v-for="post in posts" :key="post.id"
         >{{post.title}}</h2>

         <h3 class="text-xl font-bold">Ajouter un article</h3>
         <input type="text" v-model="title">
         <input type="text" v-model="body">
         <button @click="addPosts">Ajouter</button>
        
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "About",
     mounted() {
       // this.getPosts()
       console.log(this.posts)
       this.$store.dispatch("loadPost")
     
    },
    methods: {
       async addPosts() {
        const newPost = {
            userId: 1,
            id: 101,
            title: this.title,
            body: this.body
        }

        await axios.post("https://jsonplaceholder.typicode.com/posts", newPost).then((response) =>{
            this.posts.push(response.data)
        }).catch((e) => {
          console.log(e)
       })



       }, 
       async getPosts() {
               // une methode asyncron est une methode qui ne bloquera pas l'execution de mon script
             // elle s'executera en arriere plan 
        await axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10").then((response) => {
          this.posts = response.data
           console.log(this.posts)
         }).catch((e) => {
          console.log(e)
       })

        }

    },
    computed: {
        posts() {
         return this.$store.state.posts
        },
        param() {
            // avec desctructuration d'un ob
            const {titre1} = this.$route.params
            return titre1
        },
        param2() {
            // sans desctructuration d'un ob
            return this.$route.params.titre2
        },

    },
    data() {
        return {
           // posts: [],
            title: '',
            body: ''

        }
    },
}
</script>
<style>
    
</style>