<template>
  <div>
  <h1>cocktails list</h1>
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
import CocktailItem from "@/pages/cocktails/CocktailItem";

export default {
  components: {CocktailItem},
  provide(){
    return {
      cocktails: this.cocktails
    }
  },
  data() {
    return {
      cocktails: [],
      isLoading: false
    }
  },
  methods: {
    async loadCocktails() {
      this.isLoading = true;
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
      const responseData = await response.json();
      const drinks = responseData.drinks
      for (const key in drinks){
        const cocktail = {
          id: drinks[key].idDrink,
          name: drinks[key].strDrink,
          image: drinks[key].strDrinkThumb
        }
        this.cocktails.push(cocktail);
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadCocktails();
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


</style>