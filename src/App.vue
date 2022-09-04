<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>

import TheHeader from "@/components/layouts/TheHeader";
export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 37.5em) { @content };  //600px
  }
  @if $breakpoint == tab-port {
    @media (max-width: 56.25em) { @content }; //900px
  }
  @if $breakpoint == tab-land {
    @media (max-width: 75em) { @content }; //1200px
  }
  @if $breakpoint == big-desktop {
    @media (min-width: 112.5em) { @content }; //1800px
  }
}


* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  position: relative;
  padding-top: 5.5rem;
}

h1 {
  margin: .5rem;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.route-enter-active {
  transition: all .3s ease-out;
}

.route-leave-active {
  transition: all .3s ease-in;

}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
