<template>
  <form>
    <div class="form-control">
      <input type="text" v-model="searchTerm" placeholder="Search for a cocktail...">
      <button @click.prevent>
        <router-link :to="searchLink">
          <img src="@/assets/search.svg"/>
        </router-link>
      </button>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  computed: {
    searchLink() {
      return {
        path: '/browse', query: {s: this.searchTerm}
      }
    }
  },
}
</script>

<style scoped>
button {
  width: 2rem;
  height: 2rem;
}

.form-control {
  display: flex;
}
</style>