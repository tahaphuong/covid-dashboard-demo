<template>
  <div style="margin-bottom: 5px">👾 presents to you</div>
  <div id="page-title">Ranking</div>
  <Home/>
</template>

<script>
import Home from './Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style global>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap');
#page-title {
  font-weight: 700;
  font-size: 40px;
}
#app {
  font-family: "Work Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
