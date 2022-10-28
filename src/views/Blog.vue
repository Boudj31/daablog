<template>
  <main class="relative">
    <Spinner />
    <!--Message de succès
    <div class="flex justify-between items-center bg-emerald-500 w-1/5 p-5"></div>
    -->
        <!-- Intro -->
        <div class="my-10 lg:flex justify-between items-center block">
                <div>
                    <h2 class="text-5xl font-semibold mb-2">Tous les articles</h2>
                    <div class="h-1 w-60 bg-indigo-500 rounded"></div>
                </div>

                <button
                    class="text-xl py-3 px-5 bg-indigo-500 mt-5 font-semibold text-white mb-7 lg:mt-0 mt-3 ">
                    Ajouter un article
                </button>


            </div>
<!--Formulaire de recherche-->
    <form>
      <div>
        <!--Recherche par titre et description-->
        <input
        v-model="search"
          class="
            text-slate-900
            p-3
            focus:outline-none focus:border-indigo-500
            mt-4
            border-b-4 border-slate-900
            lg:w-1/2
            text-lg
            w-full
          "
          type="text"
          placeholder="Taper votre recherche.."
        />
        <!--Recherche par catégorie-->
        <select
        v-model="searchCategory"
          class="
            text-slate-900
            p-3
            focus:outline-none focus:border-indigo-500
            mt-4
            border-b-4 border-slate-900
            lg:w-1/2
            w-full
            text-lg
          "
        >
          <option value="" selected disabled default>
            Selectionner une categorie
          </option>
          <option value="Programmning">Programmation</option>
          <option value="Design">Design</option>
          <option value="Politics">Politique</option>
          <option value="Cuisine">Cuisine</option>
        </select>
        <!-- .prevent est equivalent a e.preventDefault()-->
        <button 
        @click.prevent="reset"
        v-show="search.length > 0 || searchCategory > 0"
        class="font-bold text-xl text-indigo-500">X</button>
      </div>
    </form>
    <!--Resultat-->
    <p v-if="filteredPost.length > 0" class="text-lg font-semibold text-center my-2">Resultat <span class="text-indigo-500">{{filteredPost.length}}</span></p>
    <p class="text-center text-indigo-500 text-2xl my-10" v-else>Aucun résultat</p>

    <!--Grille des articles-->
    <div class=' my-20 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4' >
        <!--Article-->
        <Post  
         v-for="post in filteredPost"
         :post="post"
         :key="post.id" 
         />
    </div>


  </main>
</template>
<script>
import { posts } from '@/data';
import Post from '@/components/Post.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: "Blog",
  components: { Post, Spinner },
  data() {
    return {
      search:  '',
      searchCategory: '',
      

    }
  },
  methods: {
    reset() {
      this.search = ''
      this.searchCategory = ''
    }
  },
  computed: {
    filteredPost() {
      // copie du tableau des posts
      let allPosts = [...posts]
     // ici on controle que l'utilisateur a inserer du text dans le input
     if(this.search.length > 0) {
      const result = allPosts.filter((post) => {
        return (
          post.title.toLowerCase().match(this.search.toLowerCase()) ||
          post.content.toLowerCase().match(this.search.toLowerCase())
        )
      })
      allPosts = result
     }
     if(this.searchCategory.length > 0) {
      const result = allPosts.filter((post) => {
       return post.category.match(this.searchCategory)
      })

      allPosts = result
     }
     return allPosts;
     
      } 

       
    }
};
</script>
<style>
</style>