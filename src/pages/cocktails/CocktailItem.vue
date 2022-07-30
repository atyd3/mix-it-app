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
  width: 10rem
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>