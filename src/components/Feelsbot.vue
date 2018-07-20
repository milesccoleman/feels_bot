<template>

  <div id="emotions">

      <div class="emotion" id="angry" v-bind:style="{backgroundColor: angry}"></div><br><br>
      <div class="emotion" id="happy" v-bind:style="{backgroundColor: happy}"></div><br><br><br><br>

    <form v-on:keyup.enter.prevent="eventPlay">
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
      disgusted: ''
    }
  },
  methods: {
    eventPlay: function () {
      if (this.emotion === 'angry') {
        this.angry = 'red'
        this.$refs.colorSoundAngry.play()
      }
      if (this.emotion === 'happy') {
        this.happy = 'blue'
        this.$refs.colorSoundHappy.play()
      }
      if (this.emotion === 'sad') {
        this.sad = 'purple'
        this.$refs.colorSoundSad.play()
      }
      if (this.emotion === 'fearful') {
        this.fearful = 'yellow'
        this.$refs.colorSoundFearful.play()
      }
      if (this.emotion === 'disgusted') {
        this.disgusted = 'teal'
        this.$refs.colorSoundDisgusted.play()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono");

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
@-webkit-keyframes angerPulse {
  from {-webkit-box-shadow: 0 0 9px red; }
  50% {-webkit-box-shadow: 0 0 36px red; }
  to {-webkit-box-shadow: 0 0 9px red; }
}
#angry {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: angerPulse;
  -webkit-animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes happyPulse {
  from {-webkit-box-shadow: 0 0 9px blue; }
  50% {-webkit-box-shadow: 0 0 36px blue; }
  to {-webkit-box-shadow: 0 0 9px blue; }
}
#happy {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: happyPulse;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes sadPulse {
  from {-webkit-box-shadow: 0 0 9px purple; }
  50% {-webkit-box-shadow: 0 0 36px purple; }
  to {-webkit-box-shadow: 0 0 9px purple; }
}
#sad {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: sadPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes fearfulPulse {
  from {-webkit-box-shadow: 0 0 9px yellow; }
  50% {-webkit-box-shadow: 0 0 36px yellow; }
  to {-webkit-box-shadow: 0 0 9px yellow; }
}
#fearful {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: fearfulPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes disgustedPulse {
  from {-webkit-box-shadow: 0 0 9px teal; }
  50% {-webkit-box-shadow: 0 0 36px teal; }
  to {-webkit-box-shadow: 0 0 9px teal; }
}
#disgusted {
  height: 100px;
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
