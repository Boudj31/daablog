<template lang="">
    <main>
       <div class="mt-16" v-if="currentPost">
        <h2 class="text-5xl font-semibold">{{ currentPost.title}}</h2>
        <h3 class="text-xl font-semibold text-indigo-500 my-4">{{ currentPost.category}}</h3>
        <img :src="currentPost.image" :alt="currentPost.title">
        <p class="text-lg">{{currentPost.summary}}</p>
        <div class="my-8">
         <p class="font-thin">{{currentPost.content}}</p>
        </div>
        <div>
         <p class="text-lg">Ecrit par {{currentPost.author}} le {{currentPost.date}}</p>
        </div>
        <BackButton />
     </div>  
     <div v-else>
         une erreur est survenu
     </div>
   </main>
 </template>
 <script>
 import { posts } from '../data';
 import BackButton from '../components/BackButton.vue';
 
 export default {
     name: 'PostDetails',
     components: {
         BackButton
     },
     methods: {
        getThePost() {
            const {id} = this.$route.params  
          posts.map((p) => {
             if(p.id == id) {
                this.currentPost = p
             }
         })
        }
     },
     data() {
         return{
             currentPost: null
         }
     },
   mounted() {
    this.getThePost()
    
     }
     /*
     
     */
     
 }
 </script>
 <style>
     
 </style>