<template>
  <div class="home-container">
    <app-left id = "app-left"></app-left>

    <app-right id = "app-right"></app-right>
    <app-mobile id = "app-mobile"></app-mobile>
  </div>
</template>

<script>
import Left from './Left.vue';
import Right from './Right.vue';
import Mobile from './Mobile.vue';

export default {
  components: {
    appLeft: Left,
    appRight: Right,
    appMobile: Mobile
  }
}
</script>

<style>
#app-mobile {
  display: none;
}

.home-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

@media only screen and (max-width: 768px) {
  #app-left, #app-right {
    display: none;
  }

  #app-mobile {
    display: block;
  }
}
</style>
