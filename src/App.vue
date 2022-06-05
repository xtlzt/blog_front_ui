<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Index msg="lzt 博客"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Index from './components/Index.vue';


@Options({
  components: {
    Index,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
