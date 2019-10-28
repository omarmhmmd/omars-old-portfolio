<template>
  <table id="table">
    <thead>
      <tr>
        <th id="table-headers" v-for="header in headers" v-bind:key='header' :class="{ active: sortKey == header }">
          <div v-if="header === 'year'" class="">
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
      <tr v-on:click="toggleInfo(index)" id="table-rows">
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
      <td v-show="isOpen" id="table-data-toggle" colspan="100%">
        <div>
          {{filteredProjects[index].info}}
        </div>
      </td>
    </tbody>
  </table>
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
      isOpen: false,
      infoIndex: 0
    }
  },
  created() {
    /* START ON NAME SORT */
    this.sortKey = "project"
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
      console.log(projects);
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
    },
    toggleInfo(index) {
      console.log(index);
      this.infoIndex = index
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style>
:root {
  --black: #333333;
  --borders: #888888;
}

#table {
  width: 47.5vw;
  font-size: 11px;
  text-transform: uppercase;
  color: var(--black);
}

#table-headers {
  font-size: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
  border-bottom: 1px solid var(--borders);
}

#table-headers {
  padding: 8px 0px 8px 0px;
}

#table-headers div span {
  cursor: pointer;
}

#table-headers:first-child,
#table-data:first-child {}

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
  color: black;
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

#table-rows {
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
}

#table-rows:hover {
  background-color: #A09A90;
  cursor: pointer;
  color: black;
}

/* #table-rows:first-child{
  border: 1px solid var(--borders);
  background-color: #A09A90;
  filter: blur(5px);
  color: black;
} */

#table-data {
  padding: 8px 0px 8px 0px;
}

#table-data-toggle {

  padding: 8px 0px 8px 0px;
  line-height: normal;
  width: 47.5vw;
}
</style>
