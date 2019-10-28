<template>
  <div class="home-container">
    <app-left></app-left>
    <app-right></app-right>
  </div>
</template>

<script>
import Left from './Left.vue';
import Right from './Right.vue';

export default {
  components: {
    appLeft: Left,
    appRight: Right
  }
}
</script>

<style>
.home-container {
  display: flex;
  flex-direction: row;
}
</style>
