<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div v-else-if="!favorites || favorites.length < 1">
      <base-card>
        This list is empty. Add some cocktails to favorites
      </base-card>
    </div>
    <ul v-else>
      <cocktail-item
          v-for="cocktail in cocktails"
          :key="cocktail.id"
          :id="cocktail.id"
          :name="cocktail.name"
          :image="cocktail.image"
      ></cocktail-item>
    </ul>
  </div>
</template>

<script>
import fetchCocktails from '../../mixins/fetchCocktails.js'

export default {
  data() {
    return {
      cocktails: [],
      isLoading: false,
      favorites: [],
      error: null,
      endpoint: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`
    }
  },
  methods: {
    async loadCocktails() {
      this.isLoading = true;
      try {
        for (const id of Object.values(this.favorites)) {
          const cocktail = await fetchCocktails(this.endpoint + id);
          this.cocktails.push(cocktail[0]);
        }
      } catch (error) {
        this.error = error.message || 'Failed to load data, try again later';
      }
      this.isLoading = false;
    },
    getFavoriteCocktails() {
      const storage = JSON.parse(localStorage.getItem('favoriteDrinks'));
      if (storage) {
        this.favorites = storage
      }
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.getFavoriteCocktails();
    this.loadCocktails();
  }
}
</script>
