<template>
<div class="mobile-home">
    <app-mobile-work v-show = "isOpen" id = "mobile-home-work"></app-mobile-work>
    <app-mobile-about v-show = "!isOpen" id = "mobile-home-about"></app-mobile-about>
</div>
</template>

<script>
import {
  EventBus
} from "../event-bus.js";


import MobileWork from '../components/MobileWork';
import MobileAbout from '../components/MobileAbout';

export default {
  components: {
    appMobileWork: MobileWork,
    appMobileAbout: MobileAbout,
  },
  data() {
    return {
        isOpen: true
    }
  },
  created() {
    EventBus.$on("mobile-button-clicked", () => {
      this.isOpen = !this.isOpen
    });
  },
  methods: {

  }
}
</script>

<style>


</style>
