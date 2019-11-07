<template>
  <div class="left-container">
    <grid :projects="gridData" :headers="gridColumns" :filter-key="searchQuery">
    </grid>
  </div>
</template>

<script>
import Grid from '../components/Grid'
import projectJson from '../json/om001.js'

export default {
  data() {
    return {
      projectJson,
      searchQuery: '',
      gridColumns: ['project', 'type', 'year'],
      gridData: projectJson.projects,
    }
  },
  mounted() {

  },
  components: {
    Grid
  }
}
</script>

<style scoped>
.left-container {
  padding-top: 0.5vw;
  height: 100vh;
  overflow-y: scroll;
  font-family: 'AKZLIGHT';
  /* font-family: 'AKZROM'; */
  width: 50vw;
  display: flex;
  justify-content: center;
}
</style>
