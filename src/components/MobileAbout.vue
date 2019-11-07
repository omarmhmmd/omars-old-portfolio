<template>
  <div class="mobile-about-container">
    <div class="mobile-about-header">
      <div class="mobile-about-omar">
        Omar Mohammad
        <div class = "mobile-omar-sub">designer/programmer/artist</div>
      </div>
      <img @click = "checkMobilePage" id="mobile-arrow-about" :src="this.backButton" alt="">
    </div>
    <div class="mobile-info-about">
      <div class="info-about">
        <div>
          <span class="bold-type">INFO: </span>Omar Mohammad is a first generation Afghan-American born and raised in the Bay Area of California. He is the son of Said & Fariha Mohammad, refugees who evaded the Soviet Invasion of Afghanistan c. 1985.
          He is a designer, programmer, and artist. <br><br> His work oscillates between cultural/commercial and self initiated projects. Working with graphics, architecture, the internet, code, and speculative/critical studies, he creates websites, books, objects, identities, and exhibitions.
        </div>
      </div>
      <div class="info-about-columns">
        <div id="info-about-left">
          <span class="bold-type">EDUCATION </span>
          <ul>
            <li>
              2018 <br> UC Davis <br> B.A. Design
            </li>
          </ul>
          <br>
          <span class="bold-type">LOCATION </span>
          <ul>
            <li>
              Berkeley, CA
            </li>
          </ul>
          <br>
          <span class="bold-type">INTERNET </span>
          <ul>
            <li>
              <a target="_blank" href="https://www.instagram.com/omarmhmmd1/">instagram</a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/omarmhmmd/">linkedin</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/omarmhmmd">github</a>
            </li>
            <li>
              <a target="_blank" href="https://www.are.na/omar-mhmmd">are.na</a>
            </li>
          </ul>
          <br>
          <span class="bold-type">CONTACT </span>
          <ul>
            <li>
             omar.mhmmd@gmail.com
            </li>
          </ul>
          <br>
        </div>
        <div id="info-about-middle" class = "info-columns">
          <span class="bold-type">Work Experience</span>
          <ul>
            <li>
              2018 - 2019 <br> SFMOMA <br> Designer
            </li>
            <br>
            <li>
              2018 <br> SFMOMA <br> Web + Digital Intern
            </li>
            <br>
            <li>
              2017 <br> UC Davis Library <br> Graphic Designer
            </li>
          </ul>
          <br>
          <span class="bold-type">Collaborators</span>
          <ul>
            <li>
              <a target="_blank" href="https://letterformarchive.org/news/announcing-the-online-archive">Letterform archive</a>
            </li>
            <li>
              <a target="_blank" href="https://nabiboyd.com">NABIBOYD</a>
            </li>
            <li>
              OAKLAND PUBLIC LIBRARY
            </li>
            <br>
          </ul>
        </div>
        <div id="info-about-right" class = "info-columns">
          <span class="bold-type">AWARDS/PRESS </span>
          <ul>
            <li>
              2018 <br> UC DAVIS PRIZED WRITING <br> AWARD & PUBLICATION <br> <span id = "italic">What, How, and Where to Build: <br> The American Mosque</span>
            </li>
            <br>
            <li>
              2018 <br> <a target="_blank" href="http://hoverstat.es/features/sfmoma-bathrooms">hoverstat.es</a>
            </li>
            <br>
            <li>
              2018 <br> <a target="_blank" href="https://brutalistwebsites.com/">brutalistwebsites.com</a>
            </li>
            <br>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  EventBus
} from "../event-bus.js";


export default {
  data() {
    return {
      backButton: "assets/arrow-black.png",
    }
  },
  methods: {
    checkMobilePage() {
      EventBus.$emit("mobile-button-clicked");
    }

  }
}
</script>

<style>
.mobile-about-container {
  background-color: #A09A90;
  /* height: 100vh; */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: "AKZLIGHT";
  color: black;
  text-transform: uppercase;
}

.mobile-about-header {
  width: 100vw;
  z-index: 1;
  height: 100px;
  background-color: #A09A90;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.mobile-about-omar {
  width: 73vw;
  font-size: 27.5px;
}

.mobile-omar-sub {
  font-size: 3vw;
}

#mobile-arrow-about {
  transform: rotate(180deg);
  margin-bottom: 0 !important;
  width: 8.5vw;
}

.mobile-info-about {
  padding-top: 15px;
  line-height: 18px;
  width: 92vw;
  display: flex;
  flex-direction: column;
  justify-content:center;
  font-size: 14px !important;
}

</style>
