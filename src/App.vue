<template>
  <the-header :adult="isAdult"></the-header>
  <age-gate :show="ageGateOpen" @allowNavigation="allowNavigation" @restrictedNavigation="restrictedNavigation"></age-gate>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" :adult="isAdult" @openDialog="openDialog"></component>
    </transition>
  </router-view>
</template>

<script>

import TheHeader from "@/components/layouts/TheHeader";
import AgeGate from "@/components/AgeGate";
import bodyScrollToggle from 'body-scroll-toggle';


export default {
  name: 'App',
  components: {
    TheHeader,
    AgeGate
  },
  data(){
    return {
      isAdult: null,
      ageGateOpen: false
    }
  },
  methods: {
    openDialog(){
      if (!this.isAdult && this.$route.meta.withAlcohol) {
        this.ageGateOpen = true;
        bodyScrollToggle.disable();
      }
    },
    closeDialog(){
      this.ageGateOpen = false;
      bodyScrollToggle.enable();
    },
    allowNavigation(){
      this.isAdult = 'adult';
      localStorage.setItem('isAdult', JSON.stringify(this.isAdult));
      this.closeDialog();
    },
    restrictedNavigation(){
      this.isAdult = 'notAdult';
      localStorage.setItem('isAdult', JSON.stringify(this.isAdult));
      this.closeDialog();
      this.$router.replace('/non_alcoholic');
    },

  },
  created() {
    this.openDialog();
    this.isAdult = JSON.parse(localStorage.getItem('isAdult'));

  },
  watch: {
    $route() {
      this.openDialog();
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

body {
  margin: 0;
  position: relative;
  padding-top: 5.5rem;
}

h1 {
  margin: .5rem;
}

h3 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
