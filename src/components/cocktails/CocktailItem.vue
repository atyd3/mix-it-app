<template>
  <base-card>
    <li>
      <router-link :to="detailsLink">
      <h1>{{ name }}</h1>
      <img :src="image">
      </router-link>
    </li>
  </base-card>
</template>


<script>
export default {
  props: ['name', 'image', 'id'],
  computed: {
    detailsLink(){
      return '/cocktails/' + this.id;
    }
  }
}
</script>

<style scoped>
img {
  width: 15rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

h1 {
  font-family: 'Bree Serif', serif;
}
</style>
