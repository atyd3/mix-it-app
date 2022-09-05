<template>
  <header>
    <nav :class="['nav', {'transform': isTransformed}]">
      <router-link to="/" class="nav__link nav__link--logo">
        <img src="@/assets/logo.svg" class="nav__logo-img"/>
        <h1 class="nav__logo-txt">Mix it!</h1>
      </router-link>
      <search-cocktail class="nav__search"></search-cocktail>
      <div class="nav__container" @click="toggleNavigation(this.isTransformed)">
        <router-link to="/favorites" class="nav__link">
          <h3>Favorites</h3>
        </router-link>
        <router-link to="/alcoholic" class="nav__link">
          <h3>Alcoholic drinks</h3>
        </router-link>
        <router-link to="/ordinary" class="nav__link">
          <h3>Ordinary drinks</h3>
        </router-link>
        <router-link to="/shots" class="nav__link">
          <h3>Shots</h3>
        </router-link>
        <router-link to="/non_alcoholic" class="nav__link">
          <h3>Non-alcoholic</h3>
        </router-link>
      </div>
      <div class="hamburger" @click="toggleNavigation">
        <div class="hamburger__bar hamburger__bar--1"></div>
        <div class="hamburger__bar hamburger__bar--2"></div>
        <div class="hamburger__bar hamburger__bar--3"></div>
      </div>
    </nav>
  </header>
</template>
<script>
import SearchCocktail from '@/components/cocktails/SearchCocktail'

export default {
  components: {SearchCocktail},
  data() {
    return {
      isTransformed: false
    }
  },
  methods: {
    toggleNavigation(open) {
      if (open) {
        this.isTransformed = !this.isTransformed;
      }
    }
  }
}

</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@700&display=swap");
@import "@/styles/_mixins.scss";


.nav {
  width: 100%;
  height: 5.5rem;
  background-image: linear-gradient(to right top, #30529d, #0083ac, #52bea1, #5ffb83);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  position: fixed;
  top: 0;
  z-index: 10;

  transition: all .1s;

  @include respond(tab-land) {
    gap: 1.5rem;
  }

  @include respond(phone) {
    gap: 1rem;
    justify-content: flex-start;
  }

  &__logo-img {
    height: 3.8rem;
    position: relative;
    top: 10px;

    @include respond(tab-land) {
      top: 5px;
    }

    @include respond(phone) {
      display: block;
      height: 3.2rem;
      top: 0px;
    }
  }

  &__logo-txt {
    font-size: 3rem;
    font-family: 'Oleo Script Swash Caps', cursive;
    white-space: nowrap;

    @include respond(tab-land) {
      font-size: 2.5rem;
    }

    @include respond(phone) {
      display: none;
    }
  }

  &__container {
    display: flex;

    @include respond(tab-port) {
      display: none;
    }
  }

  &__link {
    text-decoration: none;
    color: black;
    display: flex;
    margin: 0.75rem .5rem;
    border: 1px solid transparent;
  }

  .router-link-active {
    text-decoration: 2px underline;
  }

  .hamburger {
    display: none;

    @include respond(tab-port) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: fixed;
      right: 10px;
      height: 5.5rem;
    }

    &__bar {
      width: 33px;
      height: 5px;
      background-color: black;
      margin: 3px;
      transition: 0.4s;
      border-radius: 10px;
    }
  }
}

.transform {
  height: 100vh;
  transition: all .3s ease-out;

  @include respond(phone){
    justify-content: center;

  }
  .nav {
    &__link {
      font-size: 1.5rem;
      display: block;
      padding: 5px 20px;

      &:hover {
        background-color: rgba(whitesmoke, .4);
        border-radius: 10px;
      }

      &--logo {
        display: none;
      }
    }

    &__search {
      display: none;
    }

    &__container {
      flex-direction: column;
      display: flex;
    }
  }

  .hamburger {
    top: 0;

    &__bar--1 {
      -webkit-transform: rotate(-45deg) translate(-8px, 8px);
      transform: rotate(-45deg) translate(-7px, 8px);
    }

    &__bar--2 {
      opacity: 0;
    }

    &__bar--3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
}


</style>
