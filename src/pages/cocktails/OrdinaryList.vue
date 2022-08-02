<template>
  <div>
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
import loadCocktails from "@/mixins/loadCocktails";

export default {
  mixins: [loadCocktails],
  data(){
    return {
      cocktails: [],
      isLoading: false,
      link: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
    }
  },
  created() {
    this.loadCocktails(this.link);
  }
}
</script>