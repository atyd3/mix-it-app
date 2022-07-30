<template>
  <div>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div v-else-if="!favorites || favorites.length < 1">
      <base-card>
        This list is empty. Add some cocktails to favorites
      </base-card>
    </div>
    <div v-else>
      <h1>favorite cocktails list</h1>
      <ul>
      <cocktail-item
          v-for="cocktail in cocktails"
          :key="cocktail.id"
          :id="cocktail.id"
          :name="cocktail.name"
          :image="cocktail.image"
      ></cocktail-item>
    </ul>
    </div>
  </div>
</template>

<script>
import CocktailItem from "@/pages/cocktails/CocktailItem";

export default {
  components: {CocktailItem},
  data() {
    return {
      cocktails: [],
      isLoading: false,
      favorites: [],
    }
  },
  methods: {
    async loadCocktails() {
      this.isLoading = true;
      for (const id of Object.values(this.favorites)) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const responseData = await response.json();
        const drinks = responseData.drinks
        for (const key in drinks) {
          const cocktail = {
            id: drinks[key].idDrink,
            name: drinks[key].strDrink,
            image: drinks[key].strDrinkThumb
          }
          this.cocktails.push(cocktail);
        }
      }
      this.isLoading = false;
    },
    getFavoriteCocktails() {
      const storage = JSON.parse(localStorage.getItem('favoriteDrinks'));
      if (storage) {
        this.favorites = storage
      }

    }
  },
  created() {
    this.getFavoriteCocktails();
    this.loadCocktails();
  }
}
</script>