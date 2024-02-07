<script setup>
  import UserHeader from './components/UserHeader.vue'
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-full h-full">
      <UserHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: { UserHeader },
    watch: {
      '$route'(to) {
        document.title = to.meta.title ? `${to.meta.title} | IMS` : "IMS";
      }
    }
  }
</script>
