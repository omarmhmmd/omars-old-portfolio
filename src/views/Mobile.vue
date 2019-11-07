<template>
<div class="mobile-container">
  <div class="mobile-header">
    <div class="mobile-omar">
      Omar Mohammad
      <div class = "mobile-omar-sub">designer/programmer/artist</div>
    </div>
    <img @click = "isOpen = !isOpen" v-show="isOpen" id="mobile-question" :src="this.mobileButton" alt="">
    <img @click = "isOpen = !isOpen" v-show="!isOpen" id="mobile-arrow-two" :src="this.backButton" alt="">
  </div>
  <div v-show="isOpen" :id="test.tag" class="mobile-images" v-for="test in projectJson.projects" :key="test">
    <div id="mobile-projects">
      <div class="mobile-title">
        <img id="mobile-arrow" src="assets/arrow-white.png" alt="">
        <div><span class="mobile-project"> {{test.project}}</span> <span class="mobile-type">{{test.type}}, {{test.year}}</span></div>
      </div>
      <br>
      <div class="mobile-info">
        <span class = "mobile-bold">info:</span> {{test.info}}
      </div>
      <br>
      <div class="mobile-materials">
        <span class = "mobile-bold">materials:</span> {{test.materials}}
      </div>
      <br>
      <div class="mobile-output">
        <span class = "mobile-bold">output:</span> {{test.output}}
      </div>
    </div>
    <img v-for="(item, index) in test.images" :id="test.tag" :key="item" :src="test.images[index]">
  </div>
  <div v-show="!isOpen">
    <div id="mobile-projects">
      <div class="mobile-info">
        <span class = "mobile-bold">info:</span> Omar Mohammad
      </div>
      <br>
      <div class="mobile-materials">
        <span class = "mobile-bold">materials:</span> Is
      </div>
      <br>
      <div class="mobile-output">
        <span class = "mobile-bold">output:</span> Cool
      </div>
    </div>
  </div>
</div>
</template>

<script>
import projectJson from '../json/om001.js'

export default {
  data() {
    return {
      projectJson,
      mobileButton: "assets/question.png",
      backButton: "assets/arrow-white.png",
      isOpen: true
    }
  },
  methods: {
    checkClick() {
      alert("wtf")
    }


  }
}
</script>

<style>
.mobile-container {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-content: center;
  font-family: "AKZLIGHT";
  /* height: 101vh; */
  color: white;
  background-color: black;
  text-transform: uppercase;

}

.mobile-header {
  width: 100vw !important;
  z-index: 1;
  height: 100px;
  background-color: black;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.mobile-omar {
  width: 75vw;
  font-size: 27.5px;
}

.mobile-omar-sub {
  font-size: 3vw;
}

#mobile-projects {
  width: 92vw;
  padding-bottom: 2.5vh;
  line-height: 19px;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mobile-title {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* justify-content: space-between; */
}

.mobile-project {
  font-size: 25px;
  padding-left: 2.5vh;
  text-decoration: underline;
}

.mobile-info {
  text-transform: none;
  font-size: 14px;
}

.mobile-type {
  padding-left: 2.5vh;
}

#mobile-arrow {
  margin-bottom: 0 !important;
  width: 5.5vw;
  padding-bottom: 1.25vw;
}

#mobile-arrow-two {
  margin-bottom: 0 !important;
  width: 8.5vw;
  transform: rotate(180deg);
}

#mobile-question {
  margin-bottom: 0 !important;
  width: 8.5vw;
}

.mobile-bold {
  font-family: "AKZROM";
  text-transform: uppercase;
}


.mobile-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vw;
}

.mobile-images img {
  width: 92vw;
  margin-bottom: 3vw;
}
</style>
