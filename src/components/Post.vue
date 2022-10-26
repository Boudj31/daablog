<template>
    <div 
    class="flex w-96 flex-col justify-center bg-white shadow-lg shadow-slate-300/60"
    @click="goToPost(post.id)">
    <!-- img -->
    <img
      class="aspect-video w-96 object-cover object-center"
      :src="post.image" />
    <!-- text information -->
    <div class="p-4">
      <small
       class="text-indigo-500 text-lg">
       {{post.category}}</small>
      <h1 
      class="text-xl font-medium text-slate-600 pb-2 my-1">
      {{post.title}}</h1>
      <p 
      class="text-sm tracking-tight font-light text-slate-600 leading-6">
     {{ post.content | truncate(150) }}
     </p>
    </div>
  </div>
</template>
<script>

export default {
    name: 'Post',
    props: ["post"],
    methods: {
        goToPost(id) {
            this.$router.push(`/posts/${id}`)

        }
    },
    filters: {
        // SOLUTION ANTOINE
        truncate(value, nombre) {
            if(!value) {
                return null
            } else {
                value = value.split("").slice(0 , nombre).join("")
                return value + "..."
            }
        },
        truncate2(value, nombre) {
            if(!value) {
                return null
            }  else {
                if(value.length > nombre) {
                    return value.slice(0, nombre - 4) + "..."
                } else {
                    return value
                }
            }
        }
    }
}
</script>
<style>
    
</style>