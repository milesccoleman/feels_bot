<template>
  <div id="video">
    <video v-if="video == true" width="100%" height="100%" controls autoplay src="static/feels_bot.mp4" type="video/mp4"></video>
    <img id="try" src="static/try.png" v-on:click="returnToBot"></img>
  </div>

</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
    video: true
  }
},

  methods: {
  returnToBot: function () {
    this.$router.push("/")
    },
  }
}
</script>

<style>
html {
    background-color: black;
}
#video {
  z-index: -1;
}
#try {
    position: absolute;
    width:160px;
    min-height:40px;
    z-index:300000;
    top:10px;
    right:10px;
    text-align:center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
