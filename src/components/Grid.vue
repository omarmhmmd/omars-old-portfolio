<template>
<div class="table-container">
  <table id="table">
    <thead>
      <tr>
        <th id="table-headers" v-for="header in headers" v-bind:key='header' :class="{ active: sortKey == header }">
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
        </th>
      </tr>
    </thead>
    <tbody v-for="(filteredProject, index) in filteredProjects" :key="filteredProject">
      <tr :class="{current: current == index}" id="table-rows" @click="activeProject = filteredProjects[index], getActiveProject(), current = index">
        <td id="table-data">
          {{filteredProjects[index].project}}
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
  </table>
</div>
</template>

<script>
import { EventBus } from "../event-bus.js";

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
    this.sortBy("year")

    // console.log(this.activeProject.project)
    /* END START ON NAME SORT */
  },
  mounted() {

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
      this.current = 0
      this.activeProject = this.filteredProjects[0]
      EventBus.$emit("sort-projects", this.filteredProjects);
    },
    getActiveProject: function() {
      // console.log(this.activeProject.project)
    }
  }
}
</script>

<style>
body {
  background-color: var(--bg);
}

:root {
  /* --black: black;
  --borders: black;
  --bg: #9B968C; */
  /* --bg: #413C34;
  --black: white;
  --borders: white;*/
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

#table-rows:hover {
  /* background-color: #9B968C; */
  cursor: pointer;
  color: black;
  text-decoration: underline;
}

#table-data {
  /*****/
  padding: 8px 8px 8px 8px;
}


#table-toggle {
  /* background-color: #9B968C; */
  font-family: sans-serif;
  font-weight: 200;
  text-transform: none;
  line-height: 17px;
  font-size: 11px;
  border-bottom: 1px solid var(--borders);
}

.current {
  /* font-family: "AKZROM"; */
  background-color: #A09A90;
  position: relative;
  text-decoration: underline;
}

#info-one {
  padding: 8px 8px 8px 8px;
}

#info-two {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 8px 8px 8px 8px;
}

.bold-type {
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
  text-decoration: underline;
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
