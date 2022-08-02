<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
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
      link: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      error: null
    }
  },
  methods: {
    async loadCocktails() {
      this.isLoading = true;
      try {
        this.cocktails = await fetchCocktails(this.link);
      } catch (error) {
        this.error = error.message || 'Failed to load data, try again later';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadCocktails()
  }
}
</script>