<template>
  <div class="layout_wrapper">
    <side-bar />
    <main class="main-wrapper">
      <div class="main-container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>
<script>
  import SideBar from '../components/SideBar.vue';
  export default {
    components: {
      SideBar,
    }
  }

</script>
