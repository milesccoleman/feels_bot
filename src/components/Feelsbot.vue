<template>

  <div id="emotions">

      <div class="emotion" id="angry" v-bind:style="{backgroundColor: angry}"></div><br><br>
      <div class="emotion" id="happy" v-bind:style="{backgroundColor: happy}"></div><br><br><br><br>

    <form v-on:keyup.enter.prevent="eventPlay">
    <div id="output" class="fakeScreen"><p class="line1">{{msg}}<span class="cursor1">_</span></p><span class="cursor4"></span></div>
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
        this.angry = 'red'
        this.$refs.colorSoundAngry.play()
        this.msg = 'that makes me feel angry'
      }
      if (this.emotion === 'happy') {
        this.happy = 'blue'
        this.$refs.colorSoundHappy.play()
        this.msg = 'that makes me feel happy'
      }
      if (this.emotion === 'sad') {
        this.sad = 'purple'
        this.$refs.colorSoundSad.play()
        this.msg = 'that makes me feel sad'
      }
      if (this.emotion === 'fearful') {
        this.fearful = 'yellow'
        this.$refs.colorSoundFearful.play()
        this.msg = 'that makes me feel fearful'
      }
      if (this.emotion === 'disgusted') {
        this.disgusted = 'teal'
        this.$refs.colorSoundDisgusted.play()
        this.msg = 'that makes me feel disgusted'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

.line1 {
  color: #9CD9F0;
  -webkit-animation: type .5s 1s steps(20, end) forwards;
  -moz-animation: type .5s 1s steps(20, end) forwards;
  -o-animation: type .5s 1s steps(20, end) forwards;
  animation: type .5s 1s steps(20, end) forwards;
}

.cursor1 {
  -webkit-animation: blink 1s 2s 2 forwards;
  -moz-animation: blink 1s 2s 2 forwards;
  -o-animation: blink 1s 2s 2 forwards;
  animation: blink 1s 2s 2 forwards;
}

.line2 {
  color: #CDEE69;
  -webkit-animation: type .5s 4.25s steps(20, end) forwards;
  -moz-animation: type .5s 4.25s steps(20, end) forwards;
  -o-animation: type .5s 4.25s steps(20, end) forwards;
  animation: type .5s 4.25s steps(20, end) forwards;
}

.cursor2 {
  -webkit-animation: blink 1s 5.25s 2 forwards;
  -moz-animation: blink 1s 5.25s 2 forwards;
  -o-animation: blink 1s 5.25s 2 forwards;
  animation: blink 1s 5.25s 2 forwards;
}

.line3 {
  color: #E09690;
  -webkit-animation: type .5s 7.5s steps(20, end) forwards;
  -moz-animation: type .5s 7.5s steps(20, end) forwards;
  -o-animation: type .5s 7.5s steps(20, end) forwards;
  animation: type .5s 7.5s steps(20, end) forwards;
}

.cursor3 {
  -webkit-animation: blink 1s 8.5s 2 forwards;
  -moz-animation: blink 1s 8.5s 2 forwards;
  -o-animation: blink 1s 8.5s 2 forwards;
  animation: blink 1s 8.5s 2 forwards;
}

.line4 {
  color: #fff;
  -webkit-animation: type .5s 10.75s steps(20, end) forwards;
  -moz-animation: type .5s 10.75s steps(20, end) forwards;
  -o-animation: type .5s 10.75s steps(20, end) forwards;
  animation: type .5s 10.75s steps(20, end) forwards;
}

.cursor4 {
  -webkit-animation: blink 1s 11.5s infinite;
  -moz-animation: blink 1s 8.5s infinite;
  -o-animation: blink 1s 8.5s infinite;
  animation: blink 1s 8.5s infinite;
}

@-webkit-keyframes blink {
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

@-moz-keyframes blink {
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

@-o-keyframes blink {
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

@-webkit-keyframes type {
  to {
    width: 17em;
  }
}

@-moz-keyframes type {
  to {
    width: 17em;
  }
}

@-o-keyframes type {
  to {
    width: 17em;
  }
}

@keyframes type {
  to {
    width: 17em;
  }
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
