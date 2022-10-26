/**
 * Ce fichier va etre le centre de toute ma navigation
 * c'est ici qu'on va définir quelle route appartient à quelle View
 */

import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact'
import NotFound from '../views/NotFound'

// indinque a Vuejs qu'il peux utiliser le router partout 
Vue.use(VueRouter);
const routes = [
    // Page d'accueil par defaut sur l'url sans slash /
    {path: '/', name: "Home", component: Home, alias: "/home"},
    {path: '/posts', name: 'Blog', component: Blog},
    {path: '/about/:titre/:titre2', name: "About", component: About},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '*', name: 'NotFound', component: NotFound}
]

// 
const router = new VueRouter({
    mode: 'history',
    // tableau d'objet contenant chacune des mes vues
    routes
})

export default router;









