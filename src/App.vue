<template>
  <the-header></the-header>
  <age-gate :show="ageGateOpen" @allowNavigation="allowNavigation" @restrictedNavigation="restrictedNavigation" @close="closeDialog"></age-gate>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>

import TheHeader from "@/components/layouts/TheHeader";
import AgeGate from "@/components/AgeGate";
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
    closeDialog(){
      this.ageGateOpen = false;
    },
    allowNavigation(){
      this.isAdult = true;
      console.log('allow-navigation, adult true');
      localStorage.setItem('isAdult', JSON.stringify(this.isAdult));
      this.closeDialog();
    },
    restrictedNavigation(){
      this.isAdult = 'notAdult';
      console.log('restricted, isAdult:', this.isAdult);
      localStorage.setItem('isAdult', JSON.stringify(this.isAdult));
      this.closeDialog();
    }

  },
  created() {
    this.isAdult = JSON.parse(localStorage.getItem('isAdult'));
    if (!this.isAdult) {
      this.ageGateOpen = true;
    }
   console.log('created, isAdult: ', this.isAdult);
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
