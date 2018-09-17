<template>

  <div id="emotions">
  <img v-if='gifSrc != null' id="gif" v-bind:src="gifSrc"/>
      <div class="emotion" id="angry" v-bind:style="{backgroundColor: angry}"></div><br><br>
      <div class="emotion" id="happy" v-bind:style="{backgroundColor: happy}"></div><br><br><br><br>

    <form v-on:submit.prevent="getDataDoStuffWithData">
      <div id="output" class="fakeScreen"><p class="line1">$ {{msg}}
        <span v-bind:style="{ 'color': angry }">{{msg1}}</span>
        <span v-bind:style="{ 'color': happy }">{{msg2}}</span>
        <span v-bind:style="{ 'color': sad }">{{msg3}}</span>
        <span v-bind:style="{ 'color': fearful }">{{msg4}}</span>
        <span v-bind:style="{ 'color': surprised }">{{msg5}}</span>
        <span class="cursor1">_</span></p>
      </div>
        <input id="textWindow" v-on:keyup="resetTimer" type="text" v-bind:style="{color: color}" v-model="emotion" placeholder="tell me something"/>
    </form>

      <div class="emotion" id="sad" v-bind:style="{backgroundColor: sad}"></div><br><br>
      <div class="emotion" id="fearful" v-bind:style="{backgroundColor: fearful}"></div><br><br>
      <div class="emotion" id="surprised" v-bind:style="{backgroundColor: surprised}"></div><br><br><br><br>
  </div>

</template>

<script>
import axios from 'axios'
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
      surprised: '',
      msg: 'tell me anything you want, and i\'ll tell you how it makes me feel',
      msg1: '',
      msg2: '',
      msg3: '',
      msg4: '',
      msg5: '',
      time: 0,
      gif: [],
      gifSrc: null,
      output: 0,
      guider: 'robot',
      guider2: 'machine cyborg',
      video: false
    }
  },
  created: function () {
    this.resetTimerAtStart()
    },
  methods: {
    getDataDoStuffWithData: function () {
      var self = this
      var angrySound = new Audio('static/angrysound.mp3')
      var happySound = new Audio('static/happysound.mp3')
      var sadSound = new Audio('static/sadsound.mp3')
      var fearfulSound = new Audio('static/fearfulsound.mp3')
      var surprisedSound = new Audio('static/surprisedsound.mp3')
      axios.post('https://apiv2.indico.io/emotion/', JSON.stringify({
        'api_key': '74327046b0f275d734b4089b24ec6792',
        'data': self.emotion,
        'threshold': 0.1
      }))
        .then(function (response) {
          console.log(response)
          if (response.data.results.anger &&
          response.data.results.anger >= 0.4) {
            self.angry = '#ff3f3f'
            self.msg = 'that makes me feel '
            self.msg1 = 'angry '
            self.getGif()
            angrySound.play()
            self.output = 1
            setTimeout(() => { angrySound.pause() }, 9500)
            setTimeout(() => { self.refresh() }, 10000)
          }
          if (response.data.results.joy &&
          response.data.results.joy >= 0.2) {
            self.happy = '#2bd1fc'
            self.msg = 'that makes me feel '
            self.msg2 = 'happy '
            self.getGif()
            happySound.play()
            self.output = 1
            setTimeout(() => { happySound.pause() }, 9500)
            setTimeout(() => { self.refresh() }, 10000)
          }
          if (response.data.results.sadness &&
          response.data.results.sadness >= 0.2) {
            self.sad = '#c04df9'
            self.msg = 'that makes me feel '
            self.msg3 = 'sad '
            self.getGif()
            sadSound.play()
            self.output = 1
            setTimeout(() => { sadSound.pause() }, 9500)
            setTimeout(() => { self.refresh() }, 10000)
          }
          if (response.data.results.fear &&
          response.data.results.fear >= 0.3) {
            self.fearful = '#f3ea5f'
            self.msg = 'that makes me feel '
            self.msg4 = 'afraid '
            self.getGif()
            fearfulSound.play()
            self.output = 1
            setTimeout(() => { fearfulSound.pause() }, 9500)
            setTimeout(() => { self.refresh() }, 10000)
          }
          if (response.data.results.surprise &&
          response.data.results.surprise >= 0.2) {
            self.surprised = '#42f459'
            self.msg = 'that makes me feel '
            self.msg5 = 'surprised '
            self.getGif()
            surprisedSound.play()
            self.output = 1
            setTimeout(() => { surprisedSound.pause() }, 9500)
            setTimeout(() => { self.refresh() }, 10000)
          } if (self.output === 0) {
            self.msg = 'I\'m sorry, i don\'t understand try saying it a different way'
          }
        })
    },
    refresh: function () {
      this.color = '',
      this.emotion = '',
      this.angry = '',
      this.happy = '',
      this.sad = '',
      this.fearful = '',
      this.surprised = '',
      this.msg = 'tell me something else. i like feelings'
      this.msg1 = '',
      this.msg2 = '',
      this.msg3 = '',
      this.msg4 = '',
      this.msg5 = '',
      this.gifSrc = null,
      console.log('refresh')
    },
    refresh2: function () {
      this.color = '',
      this.emotion = '',
      this.angry = '',
      this.happy = '',
      this.sad = '',
      this.fearful = '',
      this.surprised = '',
      this.msg = '',
      this.msg1 = '',
      this.msg2 = '',
      this.msg3 = '',
      this.msg4 = '',
      this.msg5 = '',
      this.gifSrc = null,
      this.$router.push("/Video")
    },
    resetTimerAtStart: function () {
      clearTimeout(this.time)
      this.time = setTimeout(() => { this.refresh2() }, 30000)
        console.log('reset timer')
    },
    resetTimer: function () {
      clearTimeout(this.time)
      this.time = setTimeout(() => { this.refresh2() }, 30000)
        console.log('reset timer')
    },
    getGif: function () {
      var self = this
      if (this.emotion != null) {
        console.log('initializing')
        axios.get("https://api.giphy.com/v1/gifs/search?" + "q=" + this.emotion + this.msg1 + this.msg2 + this.msg3 + this.msg4 + this.msg5 + this.guider2 + this.guider + "&limit=" + 1 + "&rating=g" + "&api_key=MOMrgmevbH8gqLMUijBDYM0tCxWQxO8Z")
          .then(function (response) {
            console.log(response)
            self.gifSrc = response.data.data[0].images.original.url
          })
          .catch(function (error) {
            console.log(error)
          })
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
  z-index: 1;
}
#gif {
}
img {
  height: 400px;
  margin-bottom:  -775px;
  border: black;
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
  overflow: hidden;
}
emotions {
  height: 700px;
  size: 500px;
  position: float;
  color: black;
  z-index: -1;
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
@keyframes surprisedPulse {
  from {-webkit-box-shadow: 0 0 9px #42f459; }
  50% {-webkit-box-shadow: 0 0 36px #42f459; }
  to {-webkit-box-shadow: 0 0 9px #42f459; }
}
#surprised {
  height: 125px;
  z-index: -1;
  -webkit-animation-name: surprisedPulse;
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
