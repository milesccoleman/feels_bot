<template>
  <div id="app" v-bind:style="{backgroundColor: color}">
    <div class="color">
      <form v-on:submit.prevent="eventPlay">
        <input type="text" v-bind:style="{color: color}" v-model="emotion" placeholder="enter a color"/>
        <audio ref="colorSound">
          <source v-bind:src='sound'>
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
      sound: '',
      emotion: ''
    }
  },
  methods: {
    eventPlay: function () {
      if (this.emotion === 'angry') {
        this.sound = 'static/angrysound.mp3'
        this.color = 'orange'
        this.$refs.colorSound.play()
      }
      if (this.emotion === 'happy') {
        this.sound = 'static/happysound.mp3'
        this.color = 'teal'
        this.$refs.colorSound.play()
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
