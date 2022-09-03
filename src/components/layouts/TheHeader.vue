<template>
  <header>
    <nav class="nav">
      <router-link to="/" class="nav__link">
        <img src="@/assets/logo.svg" class="nav__logo-img"/>
        <h1 class="nav__logo-txt">Mix it!</h1>
      </router-link>
      <search-cocktail class="nav__search"></search-cocktail>
      <div class="nav__container">
        <router-link to="/favorites" class="nav__link">
          <h3>Favorites</h3>
        </router-link>
        <router-link to="/alcoholic" class="nav__link">
          <h3>Alcoholic drinks</h3>
        </router-link>
        <router-link to="/ordinary" class="nav__link">
          <h3>Ordinary drinks</h3>
        </router-link>
        <router-link to="/non_alcoholic" class="nav__link">
          <h3>Non-alcoholic</h3>
        </router-link>
      </div>
    </nav>
  </header>
</template>
<script>
import SearchCocktail from '@/components/cocktails/SearchCocktail'

export default {
  components: {SearchCocktail}
}

</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@700&display=swap");

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

  &__logo-img {
    height: 4rem;
  }

  &__logo-txt {
      font-size: 3rem;
      font-family: 'Oleo Script Swash Caps', cursive;
  }

  &__container {
    display: flex;
  }

  &__link {
      text-decoration: none;
      color: black;
      display: flex;
      padding: 0.75rem .5rem;
      border: 1px solid transparent;
  }

  .router-link-active {
    text-decoration: underline;
  }
}

//
//.logo {
//  font-size: 3rem;
//  font-family: 'Oleo Script Swash Caps', cursive;
//}
//
//.logo-img {
//  height: 4rem;
//}
//
//header {
//  width: 100%;
//  height: 5.5rem;
//  background-image: linear-gradient(to right top, #30529d, #0083ac, #52bea1, #5ffb83);
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
//  position: fixed;
//  top: 0;
//}
//
//header a {
//  text-decoration: none;
//  color: black;
//  display: flex;
//  padding: 0.75rem .5rem;
//  border: 1px solid transparent;
//}
//
//a.router-link-active {
//  text-decoration: underline;
//}
//
//.container {
//  display: flex;
//}
//
//h1 {
//  margin: 0;
//}
//
//h1 a {
//  color: white;
//  margin: 0;
//}
//
//h1 a:hover,
//h1 a:active,
//h1 a.router-link-active {
//  border-color: transparent;
//}
//
//header nav {
//  width: 90%;
//  margin: auto;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//}
//

</style>
