<template>
  <div id="video" v-on:click="returnToBot">
    <video v-if="video == true" width="100%" height="100%" autoplay loop src="static/feels_bot.mp4" type="video/mp4"></video>
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
  created: function () {
    window.addEventListener('keyup', this.returnToBot)
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
    width:100px;
    min-height:40px;
    z-index:300000;
    top:10px;
    left:10px;
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
