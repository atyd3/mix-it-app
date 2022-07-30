<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="@/assets/logo.svg" class="logo-img"/>
        <h1 class="logo">Mix it!</h1>
      </router-link>
      <router-link to="/favorites">
        <h3>Favorites</h3>
      </router-link>
      <router-link to="/popular">
        <h3>Popular drinks</h3>
      </router-link>
    </nav>
  </header>
</template>
<script>

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
  background-color: #3d008d;
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
  border: 1px solid #f391e3;
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
  justify-content: flex-start;
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