<template>
  <div>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div v-else>
    <h1>Popular drinks</h1>
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

