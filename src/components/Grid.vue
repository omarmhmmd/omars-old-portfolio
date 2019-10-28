<template>
  <table id = "table">
    <thead>
      <tr>
        <th id="th" v-for="key in columns" v-bind:key="key" @click="sortBy(key)" :class="{ active: sortKey == key }">
          {{ key | capitalize }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredHeroes" v-bind:key="entry">
        <td id = "td" v-for="key in columns" v-bind:key="key">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    heroes: Array,
    columns: Array,
    filterKey: String
  },
  data: function() {
    var sortOrders = {}
    this.columns.forEach(function(key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  created() {
    /* START ON NAME SORT */
    this.sortKey = "name"
    /* END START ON NAME SORT */
  },
  computed: {
    filteredHeroes: function() {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var heroes = this.heroes
      if (filterKey) {
        heroes = heroes.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        heroes = heroes.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return heroes
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
#table {
  width: 47.5vw;
  font-size: 11px;
  text-transform: uppercase;
}

#th {
  font-size: 10px;
  color: black;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}

#th:first-child, #td:first-child {
  /* text-align: center; */
}

#th:nth-child(2), #td:nth-child(2) {
  /* text-align: right; */
}

#th:last-child, #td:last-child {
  text-align: left;
  width: 4vw;
}

#td {
  border-top: 0.15px solid #888888;
  border-bottom: 0.15px solid #888888;
}

#th, #td {
  padding: 8px 0px 8px 0px;
}

#th.active {
  text-decoration: underline;
}

#th.active .arrow {
  opacity: 1;
  color: black;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid black;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid black;
}
</style>
