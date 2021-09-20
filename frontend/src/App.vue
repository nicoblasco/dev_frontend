<template>
  <div id="app" class="container">
    <h1 class="title">♠ Planning Poker ♠</h1>
    <div id="logo"></div>
    <h2 class="subtitle">Hiring Challenge 👋</h2>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#logo {
  margin: auto;
  height: 35px;
  width: 219px;
  background: url(https://wkncdn.com/newx/assets/build/img/workana-logo-2x.9e13d14c2.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  margin: 0px;
  color: #e76f51;
  text-shadow: 2px 2px 2px #ccc;
  text-align: center;
}
.subtitle {
  margin: auto;
  color: #e76f51;
  text-shadow: 1px 1px 2px #ccc;
  text-align: center;
}

</style>
