<template>
  <div>
    <!-- Presentation du site -->
    <section class="my-20 lg:flex block gap-10 items-center">
      <div class="w-full lg:w-1/2">
        <h1 class="text-5xl font-bold mb-5">Restez Informer avec DaBlog</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam enim
          velit itaque placeat totam voluptatibus sunt quasi excepturi culpa,
          aut amet laborum maxime, deserunt fugit laboriosam fuga minus quia
          delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Alias deserunt itaque autem nisi maxime tempore qui mollitia!
          Reprehenderit perferendis inventore placeat illum aperiam ratione
          ipsam officiis, magni modi est voluptatem.
        </p>
        <button
          class="
            text-xl
            py-3
            px-5
            bg-indigo-500
            mt-5
            font-semibold
            text-white
            mb-7
            lg:mb-0
          "
        >
          <router-link to="contact">Nous contacter</router-link>
        </button>
      </div>
      <div class="w-full lg:w-1/2">
        <img
          src="https://mediablog.cdnpk.net/sites/9/2021/12/N4X8jH0f-1570x820-2-min.png"
          alt=""
        />
      </div>
    </section>
    <!-- Statistique -->
    <section class="my-20">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Quelques chiffres</h2>
        <div class="h-1 w-40 bg-indigo-500 rounded"></div>
      </div>
      <div class="my-10 gap-5 sm:grid md:grid-cols-2 xl:grid-cols-3">
        <!-- carte des statistiques -->
        <Stat v-for="(stat, index) in stats" :key="index" :stat="stat" />
      </div>
    </section>

    <!-- Les derniers articles -->
    <section class="my-20">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Derniers Articles</h2>
        <div class="h-1 w-40 bg-indigo-500 rounded"></div>
      </div>
      <div class="my-10 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4">
        <!--Mes carte article-->
        <Post
        v-for="post in the4latestPosts" :key="post.id"
        :post="post"
         />
      </div>
    </section>
  </div>
</template>
<script>
import Stat from "../components/Stat.vue";
import Post from "../components/Post.vue"
import { posts } from "../data";

export default {
  name: "Home",
  // pour debugger des element que je ne connais pas je peux utiliser le cycle de vie pour les afficher
  mounted() {
    console.table(this.the4latestPosts)
  },
  computed: {
    the4latestPosts() {
        return posts.sort((a, b) => b.id - a.id).slice(0, 4)
    },
    /*
    theDesignPost() {
        return posts.filter((post) => post.category === "Design")
    }
*/


  },
  data() {
    return {
      posts,
      stats: [
        {
          title: "1",
          subtitle: "Site Francophone",
          description: "Le premier site francophone par Dawan",
        },
        {
          title: "100",
          subtitle: "Articles",
          description: "Du contenu de qualité pour apprendre à dévéloper !",
        },
        {
          title: "1400",
          subtitle: "Références",
          description: "Plus de 1400 réferences",
        },
      ],
    };
  },
  components: {
    Stat,
    Post
  },
};
</script>
<style>
</style>