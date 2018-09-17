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
    overflow: hidden;
}
#video {
  z-index: -1;
}
</style>
