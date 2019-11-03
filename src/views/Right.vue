<template>
<div class="right-container">
  <div class="images" v-for="test in newJson" :key="test">
    <img v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" v-for="(item, index) in test.images" :id="test.tag" :key="item" :src="test.images[index]">
  </div>
</div>
</template>

<script>
import projectJson from '../json/om001.js'
import {
  EventBus
} from "../event-bus.js";

export default {
  data() {
    return {
      newJson: projectJson.projects,
      projectJson,
      intersectionOptions: {
        threshold: [0.5]
      }
    }
  },
  created() {
    EventBus.$on("sort-projects", sortedProjects => {
      this.newJson = sortedProjects
    });
  },
  methods: {
    onWaypoint({el, going, direction}) {
      console.log(el.getAttribute('id') + " is " + going + " viewport, direction: " + direction)
    }
  }
}
</script>

<style>
.right-container {
  height: 101vh;
  overflow-y: scroll;
  width: 50vw;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
}

.images {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}

.images img {
  width: 95%;
  padding-bottom: 2vw;
}
</style>
