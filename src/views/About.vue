<template>
    <div>
        <h1>About</h1>
        <p>{{param}}</p>
        <p>{{param2}}</p>
        
    </div>
</template>
<script>
export default {
    name: "About" ,
    computed: {
        param() {
            // avec desctructuration d'un ob
            const {titre1} = this.$route.params
            return titre1.toUpperCase()
        },
        param2() {
            // sans desctructuration d'un ob
            return this.$route.params.titre2
        },

    }
}
</script>
<style>
    
</style>