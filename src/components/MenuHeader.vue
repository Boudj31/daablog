<template >
     <li class="text-lg">
        <router-link :to="href" class-active="active" exact >{{nomDulien}}</router-link>
    </li>
</template>
<script>
export default {
    name: 'MenuHeader',
    props : ["href", "nomDulien"]
    
}
</script>
<style>
    
</style>