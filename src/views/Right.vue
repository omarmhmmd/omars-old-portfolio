<template>
<div @scroll="onScroll" class="right-container">
  <div class="images" v-for="test in newJson" :key="test">
    <img  v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"  class = "lazy-img-fadeIn" v-for="(item, index) in test.images" :id="test.tag" :key="item" v-lazy="test.images[index]" lazy="loaded">
    <!-- <img data-aos="fade" v-for="(item, index) in test.images" :id="test.tag" :key="item" v-lazy="test.images[index]" lazy="loaded"> -->
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
      activeProjectTag: '',
      projectJson,
      intersectionOptions: {
        threshold: [0.5]
      }
    }
  },
  created() {
    EventBus.$on("sorted-projects", (sortedProjects) => {
      this.newJson = sortedProjects
    });
    EventBus.$on("set-active-project", activeProject => {
      this.activeProjectTag = activeProject
      var elmnt = document.getElementById(this.activeProjectTag);
      elmnt.scrollIntoView();
    });
  },
  methods: {
    onWaypoint({
      el,
      going,
      direction
    }) {
      console.log(el.id + " is " + going + " viewport, direction: " + direction)
      if (going == "in") {
        EventBus.$emit("set-project-on-scroll", el.id);
      }

    },
    onScroll({
      target: {
        scrollTop,
        clientHeight,
        scrollHeight
      }
    }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        EventBus.$emit("scrolled-to-bottom");
      }
    }
  }
}
</script>

<style>
.lazy-img-fadeIn[lazy=loaded] {

}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.right-container {
  height: 101vh;
  overflow-y: scroll;
  width: 50vw;
  color: white;
  background-color: black;
}

.images {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1vw;
}

.images img {
  width: 95%;
  margin-bottom: 1vw;
  /* transform: rotate(90deg); */
}
</style>
