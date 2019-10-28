<template>
  <div class="left-container">
    <grid
      :heroes="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </grid>
  </div>
</template>

<script>
import Grid from '../components/Grid'
export default {
  data() {
    return {
      searchQuery: '',
      gridColumns: ['name', 'type', 'year'],
      gridData: [{
          name: 'suntar',
          type: 'typeface',
          year:  2019
        },
        {
          name: 'sfmomabathrooms',
          type: 'website',
          year: 2017
        },
        {
          name: 'elemental calder',
          type: 'exhibition',
          year: 2018
        },
        {
          name: 'qiblah',
          type: 'object',
          year: 2017
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
  font-family: 'AKZLIGHT';
  width: 50vw;
  display: flex;
  justify-content: center;
}
</style>
