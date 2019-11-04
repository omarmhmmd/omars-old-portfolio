<template>
<div class="table-container">
  <table id="table">
    <thead>
      <tr>
        <!-- <th id="table-headers" v-for="header in headers" v-bind:key='header' :class="{ active: sortKey == header }">
          <div v-if="header === 'year'">
            <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'">
                </span>
            <span @click="sortBy(header)">{{ header | capitalize }}</span>
          </div>
          <div v-else>
            <span @click="sortBy(header)">{{ header | capitalize }}</span>
            <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'">
                </span>
          </div>
        </th> -->
        <th id="table-headers" v-for="header in headers" v-bind:key='header' :class="{ active: sortKey == header }">
          <span>{{ header | capitalize }}</span>
        </th>
      </tr>
    </thead>
    <tbody v-for="(filteredProject, index) in filteredProjects" :key="filteredProject">
      <tr :class="{current: current == index}" id="table-rows" @click="activeProject = filteredProjects[index], getActiveProject(), current = index">
        <td id="table-data">
          <div class="withWebsite" v-if="activeProject === filteredProjects[index] && filteredProjects[index].hasOwnProperty('website')">
            {{filteredProjects[index].project}} <img id="arrow" src="assets/arrow.png" alt=""> <a target="_blank" :href="filteredProjects[index].website">{{filteredProjects[index].website}} </a>
          </div>
          <div v-else>
            {{filteredProjects[index].project}}
          </div>
        </td>
        <td id="table-data">
          {{filteredProjects[index].type}}
        </td>
        <td id="table-data">
          {{filteredProjects[index].year}}
        </td>
      </tr>
      <td v-if="activeProject === filteredProjects[index]" id="table-toggle" colspan="100%">
        <div id="info-one">
          <span class="bold-type">INFO: </span>{{filteredProjects[index].info}}
        </div>
        <div id="info-two">
          <div>
            <span class="bold-type">MATERIALS: </span>{{filteredProjects[index].materials}}
          </div>
          <div>
            <span class="bold-type">OUTPUT: </span>{{filteredProjects[index].output}}
          </div>
        </div>
      </td>
    </tbody>
    <tbody>
      <!-- <tr :class="{current: current == index}" id="table-rows" @click="activeProject = filteredProjects[index], getActiveProject(), current = index"> -->
      <tr :class="{current: current == null}" @click="setAbout" id="table-row-about">
        <td id="table-data">
          Omar Mohammad
        </td>
        <td id="table-data">
          About
        </td>
        <td id="table-data">
          2019
        </td>
      </tr>
      <td id="table-toggle-about" colspan="100%">
        <div class="info-about">
          <div>
            <span class="bold-type">INFO: </span>Omar Mohammad is a first generation Afghan-American born and raised in the Bay Area of California. He is the son of Said & Fariha Mohammad, refugees who evaded the Soviet Invasion of Afghanistan c. 1985.
            He is a designer, artist, and programmer creating work that surpasses boundaries and media. His work oscillates between the paradigms of self initiated projects and cultural/commercial clients through graphic/object/interactive pieces and
            speculative/critical studies. WORKING WITH graphics, new media, architecture, and the internet, he provides the world with art and design that generates discourse and inquiry.
          </div>
        </div>
        <div class="info-about">
          <div id="info-about-left">
            <span class="bold-type">Experience:</span>
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
            <span class="bold-type">Collaborators:</span>
            <ul>
              <li>
                2019 <br> NABIBOYD <br> <a target="_blank" href="https://nabiboyd.com">https://nabiboyd.com</a>
              </li>
              <br>
              <li>
                2018 <br> Letterform archive <br> <a target="_blank" href="https://letterformarchive.org/news/announcing-the-online-archive">https://letterformarchive.org/<br>news/announcing-the-online-archive</a>
              </li>
              <br>
            </ul>
          </div>
          <div id="info-about-right">
            <span class="bold-type">EDUCATION: </span>
            <ul>
              <li>
                2018 <br> UC Davis <br> B.A. Design
              </li>
            </ul>
            <br>
            <span class="bold-type">LOCATION: </span>
            <ul>
              <li>
                Berkeley, CA
              </li>
            </ul>
            <br>
            <span class="bold-type">INTERNET: </span>
            <ul>
              <li>
                instagram.com/omarmhmmd1
              </li>
              <li>
                linkedin.com/omarmhmmd
              </li>
              <li>
                github.com/omarmhmmd
              </li>
              <li>
                are.na/omarmhmmd
              </li>
            </ul>
            <br>
            <span class="bold-type">AWARDS/PRESS: </span>
            <ul>
              <li>
                2018 <br> UC DAVIS PRIZED WRITING <br> AWARD & PUBLICATION <br> <span id = "publication">What, How, and Where to Build: <br> The American Mosque</span>
              </li>
              <br>
              <li>
                2018 <br> HOVERSTATE.ES <br> http://hoverstat.es/features/<br>sfmoma-bathrooms <br>
              </li>
              <br>
              <li>
                2018 <br> brutalistwebsites.com
              </li>
              <br>
            </ul>
          </div>
        </div>
      </td>
    </tbody>
  </table>
</div>
</template>

<script>
import {
  EventBus
} from "../event-bus.js";

export default {
  props: {
    projects: Array,
    headers: Array,
    filterKey: String
  },
  data: function() {
    var sortOrders = {}
    this.headers.forEach(function(key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      activeProject: 0,
      current: 0,
    }
  },
  created() {
    /* START ON NAME SORT */
    this.current = 0
    this.activeProject = this.filteredProjects[0]

    /**** RANDOMIZE THIS????****/
    // this.sortBy("year")

    // console.log(this.activeProject.project)
    /* END START ON NAME SORT */
  },
  mounted() {
    EventBus.$on("set-project-on-scroll", (scrolledID) => {
      this.$router.push({
        path: scrolledID
      })
      for (var i = 0; i < this.filteredProjects.length; i++) {
        if (scrolledID == this.filteredProjects[i].tag) {
          this.current = i;
          this.activeProject = this.filteredProjects[i]
        }
      }
    });

    EventBus.$on("scrolled-to-bottom", () => {
      this.current = null
      // var elmnt = document.getElementById('table-toggle-about');
      // elmnt.scrollIntoView();
    });
  },
  computed: {
    filteredProjects: function() {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var projects = this.projects
      if (filterKey) {
        projects = projects.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        projects = projects.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return projects
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function(key) {
      this.current = null
      this.activeProject = null
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
      /**** SET ACTIVE PROJECT WITH THID ****/
      this.current = 0
      this.activeProject = this.filteredProjects[0]
      /**** SET ACTIVE PROJECT WITH THID ****/
      EventBus.$emit("sorted-projects", this.filteredProjects);
      window.scrollTo(0, 0);
    },
    getActiveProject: function() {
      this.$router.push({
        path: this.activeProject.tag
      })
      EventBus.$emit("set-active-project", this.activeProject.tag);
      window.scrollTo(0, 0);
    },
    setAbout() {
      this.current = null
      this.activeProject = null
      var elmnt = document.getElementById('table-row-about');
      elmnt.scrollIntoView();
    }
  }
}
</script>

<style>
.info-about {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 8px 8px 8px 8px;
}

#info-about-left {
  width: auto;
  /* background-color: red; */
}

#info-about-right {
  width: auto;
  padding-right: 10px;
  /* background-color: green; */
}

#publication {
  font-family: sans-serif;
  font-style: italic;
  font-weight: 200;
  font-size: 11.75px;
}

.info-about ul {
  /* list-style-type: circle;
  list-style-position: inside;
  list-style-image: url('/arrow.png'); */
}

body {
  letter-spacing: 0.125px;
  background-color: var(--bg);
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.withWebsite {

  /* background-color: red; */
}

:root {
  /* --black: black;
  --borders: black;
  --bg: #9B968C; */
  /* --bg: #413C34;
  --black: white;
  --borders: white; */
  /* --black: white;
  --borders: white;
  --bg: black; */
  --black: black;
  --borders: black;
  --bg: white;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

#table {
  width: 95%;
  text-transform: uppercase;
  color: var(--black);
}

#table-headers {
  font-size: 9px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
  margin: 10px;
  border-bottom: 1px solid var(--borders);
}

#table-headers {
  padding: 8px 8px 8px 8px;
}

#table-headers div span {
  cursor: pointer;
}

#table-headers div span:hover {
  text-decoration: underline;
}

#table-rows {
  font-size: 12px;
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
}

#table-row-about {
  font-size: 12px;
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
}

#table-rows:hover, #table-row-about:hover {
  /* background-color: #9B968C; */
  cursor: pointer;
  color: black;
  text-decoration: underline;
}

.current {
  /* font-family: "AKZROM"; */
  background-color: #A09A90;
  /* background-color: #9B968C; */
  position: relative;
  /* text-decoration: underline; */
  /* border-top: 2px solid #A09A90 !important; */
  border-bottom: 1px solid #A09A90 !important;
  /* border-bottom: 0px solid var(--borders) !important; */
  cursor: auto !important;
}

.current:hover {
  text-decoration: none !important;
}

#arrow {
  padding-left: 10px;
  padding-right: 10px;
  width: 12px;
}

#table-data {
  padding: 8px 8px 8px 8px;
}

#table-toggle {
  /* background-color: #9B968C; */
  /* letter-spacing: 0.25px; */
  font-family: "AKZLIGHT";
  /* font-weight: 200; */
  line-height: 17px;
  font-size: 12px;
  border-bottom: 1px solid var(--borders);
}

#table-toggle-about {
  /* background-color: #9B968C; */
  /* letter-spacing: 0.25px; */
  font-family: "AKZLIGHT";
  /* font-weight: 200; */
  line-height: 17px;
  font-size: 12px;
  /* border-bottom: 1px solid var(--borders); */
}

#info-one {
  padding: 6px 8px 8px 8px;
  text-transform: uppercase;
}

#info-two {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 8px 8px 8px 8px;
}

.bold-type {
  text-transform: uppercase;
  font-family: "AKZROM";
  font-size: 11.5px;
}

#table-headers:nth-child(2),
#table-data:nth-child(2) {
  text-align: left;
  width: 7.5vw;
}

#table-headers:last-child,
#table-data:last-child {
  text-align: right;
}

#table-headers.active {
  /* text-decoration: underline; */
}

#table-headers.active .arrow {
  opacity: 1;
  color: var(--black);
}

.arrow {
  display: inline-block;
  vertical-align: bottom;
  width: 0;
  height: 0;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 3.5px;
  opacity: 0;
}

.arrow.asc {
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 4px solid var(--black);
}

.arrow.dsc {
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 4px solid var(--black);
}
</style>
