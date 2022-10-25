<template>
   <footer class="bg-slate-900 text-white py-5">
        <p class="text-center text-lg uppercase"> Dablog {{date}} - CopyRight - Tous droits reservé</p>
     </footer>
</template>
<script>
export default {
    name: "Footer",
    data () {
        return {
            date : new Date().getFullYear()
        }
    }

}
</script>

<style>
    
</style>

