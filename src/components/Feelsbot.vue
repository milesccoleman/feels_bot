<template>
  <div id="app" v-bind:style="{backgroundColor: color}">
    <div class="color">
      <form v-on:keyup.enter.prevent="eventPlay">
        <input type="text" v-bind:style="{color: color}" v-model="emotion" placeholder="tell me something"/>
        <audio ref="colorSoundAngry">
          <source src='static/angrysound.mp3'>
        </audio>
        <audio ref="colorSoundHappy">
          <source src='static/happysound.mp3'>
        </audio>
        <audio ref="colorSoundSad">
          <source src='static/sadsound.mp3'>
        </audio>
        <audio ref="colorSoundFearful">
          <source src='static/fearfulsound.mp3'>
        </audio>
        <audio ref="colorSoundDisgusted">
          <source src='static/disgustedsound.mp3'>
        </audio>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feelsbot',
  data () {
    return {
      color: '',
      emotion: ''
    }
  },
  methods: {
    eventPlay: function () {
      if (this.emotion === 'angry') {
        this.color = 'red'
        this.$refs.colorSoundAngry.play()
      }
      if (this.emotion === 'happy') {
        this.color = 'lightblue'
        this.$refs.colorSoundHappy.play()
      }
      if (this.emotion === 'sad') {
        this.color = 'purple'
        this.$refs.colorSoundSad.play()
      }
      if (this.emotion === 'fearful') {
        this.color = 'yellow'
        this.$refs.colorSoundFearful.play()
      }
      if (this.emotion === 'disgusted') {
        this.color = 'brown'
        this.$refs.colorSoundDisgusted.play()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono");
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: black;
}

#app {
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
}

#app input {
  padding: 1rem 1rem;
  font-size: 2rem;
  border: 0;
  border-radius: 3px;
  background: #fff;
  margin-top: 200px;
}

h1 {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 300;
}

input[type="color"] {
  width: 40px;
  border: 1px solid black;
  margin: 0px;
  padding: 0px !important;
  height: 40px;
}
</style>
