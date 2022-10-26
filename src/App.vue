<template>
  <div id="app">
    <div class="flex flex-col justify-between min-h-screen">
        <!-- MENU -->
    <Header :titre="siteTitre" />
    <!--INTRODUCTION-->
    <!-- Composant dynamique qui me donne la possibilité de changer de page -->
    <!--Router-view est une balise de vue-router qui va se charger de recupere le bon composants en fonction 
    du chemin relatif ou je me situe -->
    <div class="container mx-auto">
      <router-view>
      </router-view>

    </div>
   

    <!--STATS -->

    <!--DERNIERS POSTS -->

    <!--FOOTER -->
    <Footer />   
      
    </div>
   
    
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue';
import Header from "@/components/Header.vue"

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  data () {
    return {
      siteTitre: "DaBlog"
    }
  },
  methods: {

  },
}
</script>

<style>

</style>
