<template>
  <form @submit.prevent="$router.push(searchLink)">
    <div class="form">
      <input type="text" class="form__input" v-model="searchTerm" placeholder="Search for a cocktail..." required>
      <router-link :to="searchLink" @click="clearSearchTerm">
        <input type="submit" class="form__button" value="&#x1F50E;">
      </router-link>
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
  methods: {
    clearSearchTerm() {
      this.searchTerm = '';
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_mixins.scss';

.form {
  display: flex;

  &__button {
    width: 2.2rem;
    height: 2.2rem;
    opacity: 80%;
    border-radius: 0 6px 6px 0;
    border: none;
    background-color: whitesmoke;
  }

  &__input {
    opacity: 80%;
    border: none;
    border-radius: 6px 0 0 6px;
    padding: .2rem .5rem;
    background-color: whitesmoke;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
    width: 100%;
    text-overflow: ellipsis;

    &:focus {
      outline: 1px solid gray;

      + a input {
        outline: 1px solid gray;
      }
    }
  }
}
</style>
