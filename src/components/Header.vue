<template>
  <!--Pour le sementique HTML on declare un barre de navigation avec la balise header-->
  <header class="p-6 border-b-2 border-slate-900 text-slate-900">
    <div class="container mx-auto block lg:flex justify-between items-center">
      <!--Titre de mon site-->
      <h3 class="font-bold text-2xl text-center">{{ titre }}</h3>
      <!--Liste des liens -->
      <nav>
        <ul class="flex gap-10">
          <!-- SOLUCE 1 
                    <MenuHeader 
                    v-for="(link, index) of links"
                    :key="index"
                    :href="link.href"
                    :nomDulien="link.nomDulien" />
                    -->
          <!-- SOLUCE 2 -->

          <li class="text-lg">
            <router-link to="/" class-active="active" exact>
              Accueil
            </router-link>
          </li>

          <li class="text-lg">
            <router-link to="/posts" class-active="active" exact>
              Nos Articles
            </router-link>
          </li>

          <li class="text-lg">
            <router-link
              :to="`/about/${myParam}/${myParam2}`"
              class-active="active"
              exact
            >
              A propos
            </router-link>
          </li>

          <li class="text-lg">
            <router-link to="/contact" class-active="active" exact>
              Contact
            </router-link>
          </li>
          <li class="text-lg">
            <router-link to="/todo" class-active="active" exact>
              TodoVuex
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
//import MenuHeader from "./MenuHeader.vue";

export default {
  name: "Header",
  components: {
   // MenuHeader,
  },
  data() {
    return {
        /*
      links: [
        { href: "/", nomDulien: "Accueil" },
        { href: "/posts", nomDulien: "Blog" },
        { href: `/about/${myParam}/${myParam2}`, nomDulien: "A propos" },
        { href: "/contact", nomDulien: "Contact" },
      ],
      */
      myParam: "param1",
      myParam2: "param2",
    };
  },
  //props: ['titre'] si je ne souhaite pas typer mon props je peux la declarer comme ??a
  props: {
    titre: {
      type: String, // on d??finis le type de la valeur attendu
      default: "Dawan", // on d??finis une valeur par d??faut si elle n'est pas renseign?? par le parent
    },
  },
};
</script>
<style>
.router-link-active {
  border-bottom: 3px solid #3f51b5;
  color: #3f51b5;
  font-weight: 600;
}
</style>