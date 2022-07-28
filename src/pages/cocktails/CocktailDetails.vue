<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <h1>{{ drinkDetails.name }}</h1>
    <img :src="drinkDetails.image">
    <ul>Ingridients:</ul>
    <li>{{drinkDetails.ingredients}}</li>
    <p>{{drinkDetails.instructions}}</p>
    <p>{{drinkDetails.id}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      id: this.$route.params.id,
      drinkDetails: {}
    }
  },
  methods: {
    async loadDetails() {
      this.isLoading = true;
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + this.id);
      const responseData = await response.json();
      const drink = responseData.drinks[0];
      console.log(drink)
      this.drinkDetails.name = drink.strDrink;
      this.drinkDetails.id = drink.idDrink;
      this.drinkDetails.category = drink.strCategory;
      this.drinkDetails.glass = drink.strGlass;
      this.drinkDetails.instructions = drink.strInstructions;
      this.drinkDetails.image = drink.strDrinkThumb;

      // const ingredients = [];
      // for (let i=1; i < 16; i++){
      //   const number = i;
      //   if (drink.strIngredient)
      //
      // }
      this.drinkDetails.ingredients = drink.strIngredient15

      this.isLoading = false
    }

  },
  created() {
    this.loadDetails()
  }
}
</script>

<style scoped>
img {
  width: 10rem;
}
</style>