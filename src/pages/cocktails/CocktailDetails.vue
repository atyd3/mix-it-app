<template>
  <div>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <img v-if="!isFavorite" src="@/assets/outlineStar.svg" @click="addFavorite" />
    <img v-else src="@/assets/solidStar.svg" @click="deleteFavorite" />
    <h1>{{ drinkDetails.strDrink }}</h1>
    <img :src="drinkDetails.strDrinkThumb">
    <ul><h3>Ingredients:</h3></ul>
    <li v-for="(ingredient, key) in drinkIngredients" :key="key">
      {{ ingredient.name }}: {{ ingredient.measure }}
    </li>
    <h3>Instructions:</h3>
    <p>{{ drinkDetails.strInstructions }}</p>
    <h3>Glass type:</h3>
    <p>{{ drinkDetails.strGlass}}</p>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      id: this.$route.params.id,
      drinkDetails: {},
      drinkIngredients: {},
      favorites: []
    }
  },
  methods: {
    async fetchCocktail() {
      this.isLoading = true;
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + this.id);
      const responseData = await response.json();
      this.drinkDetails = responseData.drinks[0];
      this.listIngredients();
      this.isLoading = false
    },
    listIngredients(){
      const drinkData = Object.entries(this.drinkDetails);
      this.drinkIngredients = drinkData.map((e) => {
        if (e[0].includes('strIngredient') && e[1]) {
          return {
            name: e[1],
            measure: this.drinkDetails[`strMeasure${e[0].replace('strIngredient', '')}`]
          }
        }
      }).filter(Boolean)
    },
    addFavorite(){
      console.log(this.id);
      console.log('this.favorites',this.favorites)
      this.favorites.push(this.id);
      console.log('JSON.stringify(this.favorites)',JSON.stringify(this.favorites))
      localStorage.setItem('favoriteDrinks', JSON.stringify(this.favorites));
    },
    getFavoriteCocktails(){
      const storage = JSON.parse(localStorage.getItem('favoriteDrinks'));
      console.log('storage',storage)
      if (storage) {
        console.log('this.favorites',this.favorites)
        this.favorites = storage
      }

    }
  },
  computed: {
    isFavorite(){
      console.log('this.favo',this.favorites)
      return this.favorites? this.favorites.find((e)=> e === this.id) : false
    }
  },
  created() {
    this.fetchCocktail();
    this.getFavoriteCocktails();
  }
}
</script>

<style scoped>
img {
  width: 10rem;
}

li {
  list-style: none;
}
</style>