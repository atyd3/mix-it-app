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
import fetchCocktails from "@/mixins/fetchCocktails";

export default {
  props: {endpoint: {type: String, required: true}},
  data() {
    return {
      cocktails: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    async loadCocktails(endpoint) {
      this.isLoading = true;
      try {
        this.cocktails = await fetchCocktails(endpoint);
      } catch (error) {
        this.error = error.message || 'Failed to load data, try again later';
        console.log('error endpoint', endpoint)
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  watch: {
    endpoint(nVal) {
      if (this.$route.query.s) {
        this.loadCocktails(nVal + this.$route.query.s);
      } else {
        this.loadCocktails(nVal);
      }
    },
    $route(nVal, oVal) {
      if (oVal.query.s) {
        this.loadCocktails(this.endpoint + nVal.query.s);
      }
    }
  },
  created() {
    if (this.$route.query.s) {
      this.loadCocktails(this.endpoint + this.$route.query.s);
    } else {
      this.loadCocktails(this.endpoint);
    }
  }
}
</script>
