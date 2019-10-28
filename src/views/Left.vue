<template>
  <div class="left-container">
    <grid :projects="gridData" :headers="gridColumns" :filter-key="searchQuery">
    </grid>
  </div>
</template>

<script>
import Grid from '../components/Grid'
export default {
  data() {
    return {
      searchQuery: '',
      gridColumns: ['project', 'type', 'year'],
      gridData: [{
          project: 'suntar',
          type: 'typeface',
          year:  2019,
          info: 'info for suntar'
        },
        {
          project: 'sfmomabathrooms',
          type: 'website',
          year: 2017,
          info: 'info for sfmomabathrooms'
        },
        {
          project: 'elemental calder',
          type: 'exhibition',
          year: 2018,
          info: 'info for elemental calder'
        },
        {
          project: 'qiblah',
          type: 'object',
          year: 2017,
          info: 'info for qiblah'
        }
      ]
    }
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
  width: 50vw;
  display: flex;
  justify-content: center;
}
</style>
