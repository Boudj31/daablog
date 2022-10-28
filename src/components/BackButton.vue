<template>
    <div>
        <button
         @click="back"
         class="bg-slate-900 p-4 my-5 text-white"
         >Retour</button>

    </div>
</template>
<script>
export default {
    name: "BackButton",
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
    
}
</script>
<style>
    
</style>