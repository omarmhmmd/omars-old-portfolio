<template>
<div class="table-container">
  <table id="table">
    <thead>
      <tr>
        <th id="table-headers" v-for="header in headers" v-bind:key='header' :class="{ active: sortKey == header }">
          <div v-if="header === 'year'">
            <!-- <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'">
                </span> -->
            <!-- <span @click="sortBy(header)">{{ header | capitalize }}</span> -->
            <span>{{ header | capitalize }}</span>
          </div>
          <div v-else>
            <!-- <span @click="sortBy(header)">{{ header | capitalize }}</span> -->
            <span>{{ header | capitalize }}</span>
            <!-- <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'">
                </span> -->
          </div>
        </th>
      </tr>
    </thead>
    <tbody v-for="(filteredProject, index) in filteredProjects" :key="filteredProject">
      <tr id="table-rows" @click="activeProject = filteredProjects[index], current = index">
        <td>
          <div :class="{current:index == current}">
            <td id="table-data">
              {{filteredProjects[index].project}}
            </td>
          </div>
        </td>
        <td>
          <div :class="{current:index == current}">
            <td id="table-data">
              {{filteredProjects[index].type}}
            </td>
          </div>
        </td>
        <td>
          <div :class="{current:index == current}">
            <td id="table-data-year">
              {{filteredProjects[index].year}}
            </td>
          </div>
        </td>
      </tr>
      <td :class="{current:index == current}" v-if="activeProject === filteredProjects[index]" id="table-toggle" colspan="100%">
        <div class="bg-blur">
          <div id="info-padding">
            <span>INFO: </span>{{filteredProjects[index].info}}
          </div>
        </div>
      </td>
    </tbody>
  </table>
</div>
</template>

<script>
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
      infoIndex: 0,
      activeProject: 0,
      current: 0
    }
  },
  created() {
    /* START ON NAME SORT */
    // this.sortKey = "project"
    /* END START ON NAME SORT */
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
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>

<style>
body {
  background-color: var(--bg);
}
:root {
  /* --black: #cbc3b2;
  --borders: #cbc3b2; */
  --black: white;
  --borders: white;
  --bg: #413C34;
  /* --bg: white;
  --black: #413C34;
  --borders: #413C34; */
}

.table-container {
  display: flex;
  justify-content: center;
  width: 97.5%;
}

#table {
  width: 97.5%;
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
  /* cursor: pointer; */
}

#table-rows {
  font-size: 11px;
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
}

#table-rows:hover {
  background-color: var(--bg);
  cursor: pointer;
  color: var(--black);
  text-decoration: underline;
}

#table-data {
  display: flex;
  position: relative;
  top: 0%;
  left: 0%;
  width: auto;
  /*****/
  padding: 8px 8px 8px 8px;
}

#table-data-year {
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 0%;
  left: 0%;
  margin: 0;
  /*****/
  padding: 8px 8px 8px 8px;
}

#table-toggle {
  font-family: sans-serif;
  font-weight: 200;
  text-transform: none;
  line-height: 19px;
  font-size: 12px;
}

.current {
  position: relative;
  /* text-decoration: underline; */
}

.current::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* filter: blur(3px); */
  position: absolute;
  background-color: var(--bg);
}

#info-padding {
  position: relative;
  top: 0%;
  left: 0%;
  width: auto;
  padding: 8px 8px 8px 8px;
}

#info-padding span {
  font-family: "AKZROM";
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
