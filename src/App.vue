<template>
    <div>
        <ul>
            <router-link to="/blog-list">list blog</router-link>
            <router-link to="/blog-view">view blog</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
  import router from './router/index'

  export default {
    name: "App",
    router
  }
</script>

<style scoped>

</style>