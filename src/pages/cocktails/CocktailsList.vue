<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError" @action="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <router-view v-if="showBrowse"></router-view>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul v-else-if="cocktails.length>0">
      <cocktail-item
          v-for="cocktail in cocktails"
          :key="cocktail.id"
          :id="cocktail.id"
          :name="cocktail.name"
          :image="cocktail.image"
      ></cocktail-item>
    </ul>
    <base-card v-else>
      Sorry, we can't find your cocktail. Try to search for a different name
    </base-card>
  </div>
</template>

<script>
import fetchCocktails from "@/mixins/fetchCocktails";
import BaseCard from "@/components/UI/BaseCard";

export default {
  components: {BaseCard},
  props: {
    endpoint: {
      type: String,
      required: true
    },
    adult: {
      type: [String, null],
      required: true
    }
  },
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
        let cocktails = await fetchCocktails(endpoint);
        if (this.adult === 'notAdult') {
          cocktails = cocktails.filter(cocktail => cocktail.alcoholic !== 'Alcoholic' && cocktail.alcoholic !== 'Optional alcohol')
        }
        this.cocktails = cocktails;
      } catch (error) {
        this.error = error.message || 'Failed to load data, try again later';
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
      if (oVal.query.s && nVal.query.s) {
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
  },
  computed: {
    showBrowse() {
      if (
          this.adult === 'adult' && this.$route.path === '/cocktails' ||
          this.adult === 'notAdult' && this.$route.path === '/non_alcoholic')
      {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

</style>
