<template>

  <div id="emotions">

      <div class="emotion" id="angry" v-bind:style="{backgroundColor: angry}"></div><br><br>
      <div class="emotion" id="happy" v-bind:style="{backgroundColor: happy}"></div><br><br><br><br>

    <form v-on:keyup.enter.prevent="eventPlay">
      <div id="output" class="fakeScreen"><p class="line1">{{msg}}<span class="cursor1">_</span></p></div>
        <input type="text" v-bind:style="{color: color}" v-model="emotion" placeholder="tell me something"/>
          <audio ref="colorSoundAngry"><source src='static/angrysound.mp3'></audio>
          <audio ref="colorSoundHappy"><source src='static/happysound.mp3'></audio>
          <audio ref="colorSoundSad"><source src='static/sadsound.mp3'></audio>
          <audio ref="colorSoundFearful"><source src='static/fearfulsound.mp3'></audio>
          <audio ref="colorSoundDisgusted"><source src='static/disgustedsound.mp3'></audio>
    </form>
      <div class="emotion" id="sad" v-bind:style="{backgroundColor: sad}"></div><br><br>
      <div class="emotion" id="fearful" v-bind:style="{backgroundColor: fearful}"></div><br><br>
      <div class="emotion" id="disgusted" v-bind:style="{backgroundColor: disgusted}"></div><br><br><br><br>
  </div>

</template>

<script>
export default {
  name: 'Feelsbot',
  data () {
    return {
      color: '',
      emotion: '',
      angry: '',
      happy: '',
      sad: '',
      fearful: '',
      disgusted: '',
      msg: '$  tell me anything you want, and i\'ll tell you how it makes me feel'
    }
  },
  methods: {
    eventPlay: function () {
      if (this.emotion === 'angry') {
        this.angry = '#ff3f3f'
        this.$refs.colorSoundAngry.play()
        this.msg = 'that makes me feel angry'
        setTimeout(() => { this.refresh() }, 5000)
      }
      if (this.emotion === 'happy') {
        this.happy = '#2bd1fc'
        this.$refs.colorSoundHappy.play()
        this.msg = 'that makes me feel happy'
        setTimeout(() => { this.refresh() }, 5000)
      }
      if (this.emotion === 'sad') {
        this.sad = '#c04df9'
        this.$refs.colorSoundSad.play()
        this.msg = 'that makes me feel sad'
        setTimeout(() => { this.refresh() }, 5000)
      }
      if (this.emotion === 'fearful') {
        this.fearful = '#f3ea5f'
        this.$refs.colorSoundFearful.play()
        this.msg = 'that makes me feel fearful'
        setTimeout(() => { this.refresh() }, 5000)
      }
      if (this.emotion === 'disgusted') {
        this.disgusted = '#f2ae04'
        this.$refs.colorSoundDisgusted.play()
        this.msg = 'that makes me feel disgusted'
        setTimeout(() => { this.refresh() }, 5000)
      }
    },
    refresh: function () {
      if (this.msg != null) {
        this.color = '',
        this.emotion = '',
        this.angry = '',
        this.happy = '',
        this.sad = '',
        this.fearful = '',
        this.disgusted = '',
        this.msg = '$  tell me something else. i like feelings',
      this.$refs.colorSoundAngry.pause()
      this.$refs.colorSoundHappy.pause()
      this.$refs.colorSoundSad.pause()
      this.$refs.colorSoundFearful.pause()
      this.$refs.colorSoundDisgusted.pause()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono");
.fakeScreen {
  background-color: #151515;
  box-sizing: border-box;
  width: 550px;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: -260px;
  margin-bottom: 25px;
}
p {
  position: relative;
  left: 50%;
  margin-left: -8.5em;
  text-align: left;
  font-size: 1.25em;
  font-family: monospace;
  white-space: normal;
  overflow: hidden;
  width: 0;
}
span {
  color: #fff;
  font-weight: bold;
}
@keyframes type {
  to {
    width: 17em;
  }
}
.line1 {
  color: #9CD9F0;
  -webkit-animation: type .5s 1s steps(20, end) forwards;
  -moz-animation: type .5s 1s steps(20, end) forwards;
  -o-animation: type .5s 1s steps(20, end) forwards;
  animation: type .5s 1s steps(20, end) forwards;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.cursor1 {
  -webkit-animation: blink 1s 2s 2 forwards;
  -moz-animation: blink 1s 2s 2 forwards;
  -o-animation: blink 1s 2s 2 forwards;
  animation: blink 1s 2s 2 forwards;
  -webkit-animation-iteration-count: infinite;
}
html {
  margin: 0;
  padding: 0;
  background: black;
}
emotions {
  height: 700px;
  size: 500px;
  position: float;
  color: black;
  z-index: -1;
  margin-top: 300px;
}
@keyframes angerPulse {
  from {-webkit-box-shadow: 0 0 9px #ff3f3f; }
  50% {-webkit-box-shadow: 0 0 36px #ff3f3f; }
  to {-webkit-box-shadow: 0 0 9px #ff3f3f; }
}
#angry {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: angerPulse;
  -webkit-animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  }
@keyframes happyPulse {
  from {-webkit-box-shadow: 0 0 9px #2bd1fc; }
  50% {-webkit-box-shadow: 0 0 36px #2bd1fc; }
  to {-webkit-box-shadow: 0 0 9px #2bd1fc; }
}
#happy {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: happyPulse;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
}
@keyframes sadPulse {
  from {-webkit-box-shadow: 0 0 9px #c04df9; }
  50% {-webkit-box-shadow: 0 0 36px #c04df9; }
  to {-webkit-box-shadow: 0 0 9px #c04df9; }
}
#sad {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: sadPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
@keyframes fearfulPulse {
  from {-webkit-box-shadow: 0 0 9px #f3ea5f; }
  50% {-webkit-box-shadow: 0 0 36px #f3ea5f; }
  to {-webkit-box-shadow: 0 0 9px #f3ea5f; }
}
#fearful {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: fearfulPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
@keyframes disgustedPulse {
  from {-webkit-box-shadow: 0 0 9px #f2ae04; }
  50% {-webkit-box-shadow: 0 0 36px #f2ae04; }
  to {-webkit-box-shadow: 0 0 9px #f2ae04; }
}
#disgusted {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: disgustedPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
input {
  padding: 1rem 1rem;
  font-size: 2rem;
  border: 0;
  border-radius: 3px;
  background: #fff;
  z-index: 1;
}
form {
  margin-top: -115px;
}
input[type="color"] {
  width: 40px;
  border: 1px solid black;
  margin: 0px;
  padding: 0px !important;
  height: 40px;
}
</style>
