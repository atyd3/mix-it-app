<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div v-else-if="Object.keys(drinkDetails).length === 0">
      <base-card>
        Cocktail not found.
        Maybe checkout
        <router-link to="/ordinary">ordinary drinks</router-link>
      </base-card>
    </div>
    <div v-else>
      <base-card>
        <div class="star">
          <img v-if="!isFavorite" src="@/assets/outlineStar.svg" @click="addFavorite" class="icon"/>
          <img v-else src="@/assets/solidStar.svg" @click="deleteFavorite" class="icon"/>
        </div>
        <h1>{{ drinkDetails.strDrink }}</h1>
        <div class="img-box">
          <img :src="drinkDetails.strDrinkThumb">
        </div>
        <h3>Ingredients:</h3>
        <ul></ul>
        <li v-for="(ingredient, key) in drinkIngredients" :key="key">
          {{ ingredient.name }}
          <span v-if="ingredient.measure">: {{ ingredient.measure }}</span>
        </li>
        <h3>Instructions:</h3>
        <p>{{ drinkDetails.strInstructions }}</p>
        <h3>Glass type:</h3>
        <p>{{ drinkDetails.strGlass }}</p>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";

export default {
  components: {BaseCard},
  data() {
    return {
      isLoading: false,
      id: this.$route.params.id,
      drinkDetails: {},
      drinkIngredients: {},
      favorites: [],
      error: null
    }
  },
  methods: {
    async fetchCocktail() {
      this.isLoading = true;
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + this.id);
        const responseData = await response.json();
        this.drinkDetails = responseData.drinks[0];
      } catch (error) {
        this.error = 'Loading data failed!'
      }
      this.listIngredients();
      this.isLoading = false
    },
    listIngredients() {
      const drinkData = Object.entries(this.drinkDetails);
      this.drinkIngredients = drinkData.map((e) => {
        if (e[0].includes('strIngredient') && e[1]) {
          return {
            name: e[1],
            measure: this.drinkDetails[`strMeasure${e[0].replace('strIngredient', '')}`]
          }
        }
      }).filter(Boolean);
      console.log(this.drinkIngredients)
    },
    addFavorite() {
      this.favorites.push(this.id);
      localStorage.setItem('favoriteDrinks', JSON.stringify(this.favorites));
    },
    deleteFavorite() {
      this.favorites = this.favorites.filter((e) => e !== this.id);
      localStorage.setItem('favoriteDrinks', JSON.stringify(this.favorites));
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
  computed: {
    isFavorite() {
      return this.favorites ? this.favorites.find((e) => e === this.id) : false
    }
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.fetchCocktail();
    }
  },
  created() {
    this.fetchCocktail();
    this.getFavoriteCocktails();
  }
}
</script>

<style scoped>
.img-box img{
  width: 25rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.star {
  top: 0;
  left: 0;
  display: flex;
}

li {
  list-style: none;
}

.icon {
  width: 2.4rem;
  display: inline-block;
}

h1 {
  display: inline-block;
}

</style>