<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="@/assets/logo.svg" class="logo-img"/>
        <h1 class="logo">Mix it!</h1>
      </router-link>
      <search-cocktail></search-cocktail>
      <div class="container">
      <router-link to="/favorites">
        <h3>Favorites</h3>
      </router-link>
        <router-link to="/alcoholic">
          <h3>Alcoholic drinks</h3>
        </router-link>
      <router-link to="/ordinary">
        <h3>Ordinary drinks</h3>
      </router-link>
      <router-link to="/non_alcoholic">
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


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@700&display=swap");

.logo {
  font-size: 3rem;
  font-family: 'Oleo Script Swash Caps', cursive;
}

.logo-img {
  height: 4rem;
}

header {
  width: 100%;
  height: 5.5rem;
  /*background-color: #5247ea;*/
  background-image: linear-gradient(to right top, #30529d, #0083ac, #52bea1, #5ffb83);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
  position: fixed;
  top: 0
}

header a {
  text-decoration: none;
  color: black;
  display: flex;
  padding: 0.75rem .5rem;
  border: 1px solid transparent;
}

a.router-link-active {
  text-decoration: underline;
}

.container {
  display: flex;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>