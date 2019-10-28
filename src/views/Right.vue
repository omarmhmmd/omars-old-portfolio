<template>
  <div class="right-container">
    <div class="images">
      <img src="/images/001.png" alt="">
      <img src="/images/002.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  }
}
</script>

<style>
  .right-container {
    height: 100vh;
    overflow-y: scroll;
    width: 50vw;
    background-color: black;
    display: flex;
    flex-direction: column;
  }

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2.65vw;
  }

  .images img {
    width: 90%;
    padding-bottom: 2vw;
  }
</style>
