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
          info: 'Suntar 909 is a typeface inspired by found material discovered at an estate sale in El Cerrito, CA on September 23, 2018. A line of Super 8mm film viewers and editors, Suntar products were made in Japan by Sansei Koki circa 1970s. The graphic design accompanying these products as logo and packaging is absolutely incredible; it’s so good I designed a typeface based on the original logotype. This typeface might already exist, but I wanted to define a new typeface that considered the “spinning” circle icon and the relationship between the sans-serif numbers “909”.'
        },
        {
          project: 'elemental calder',
          type: 'exhibition',
          year: 2018,
          info: 'Suntar 909 is a typeface inspired by found material discovered at an estate sale in El Cerrito, CA on September 23, 2018. A line of Super 8mm film viewers and editors, Suntar products were made in Japan by Sansei Koki circa 1970s. The graphic design accompanying these products as logo and packaging is absolutely incredible; it’s so good I designed a typeface based on the original logotype. This typeface might already exist, but I wanted to define a new typeface that considered the “spinning” circle icon and the relationship between the sans-serif numbers “909”.'
        },
        {
          project: 'sfmomabathrooms',
          type: 'website',
          year: 2017,
          info: 'Suntar 909 is a typeface inspired by found material discovered at an estate sale in El Cerrito, CA on September 23, 2018. A line of Super 8mm film viewers and editors, Suntar products were made in Japan by Sansei Koki circa 1970s. The graphic design accompanying these products as logo and packaging is absolutely incredible; it’s so good I designed a typeface based on the original logotype. This typeface might already exist, but I wanted to define a new typeface that considered the “spinning” circle icon and the relationship between the sans-serif numbers “909”.'
        },
        {
          project: 'qiblah',
          type: 'object',
          year: 2017,
          info: 'Suntar 909 is a typeface inspired by found material discovered at an estate sale in El Cerrito, CA on September 23, 2018. A line of Super 8mm film viewers and editors, Suntar products were made in Japan by Sansei Koki circa 1970s. The graphic design accompanying these products as logo and packaging is absolutely incredible; it’s so good I designed a typeface based on the original logotype. This typeface might already exist, but I wanted to define a new typeface that considered the “spinning” circle icon and the relationship between the sans-serif numbers “909”.',
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
  /* font-family: 'AKZROM'; */
  width: 50vw;
  display: flex;
  justify-content: center;
}
</style>
