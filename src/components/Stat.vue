<template>
    <div class="mt-8">
              <h2 class="text-6xl text-slate-900">{{stat.title}}</h2>
              <h3 class="text-2xl text-indigo-500 my-3">{{stat.subtitle}}</h3>
              <p class="text-lg">{{stat.description}}</p>
    </div>
</template>
<script>

export default {
    name: 'Stat',
    props: ["stat"]



    
}
</script>
<style>
    
</style>