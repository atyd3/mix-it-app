<template>
  <base-card class="cocktail">
    <li class="cocktail__item">
      <router-link :to="detailsLink" class="cocktail__link">
      <h1 class="cocktail__title">{{ name }}</h1>
      <img :src="image" class="cocktail__image">
      </router-link>
    </li>
  </base-card>
</template>


<script>
export default {
  props: ['name', 'image', 'id'],
  computed: {
    detailsLink(){
      return '/cocktails/' + this.id;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.cocktail {
  @include respond(tab-port) {
    width: 70%
  }

  &__item {
    list-style: none;
  }

  &__link {
    text-decoration: none;
    color: black;
  }

  &__image {
    width: 15rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    @include respond(phone) {
      width: 90%;
    }
  }

  &__title {
    font-family: 'Bree Serif', serif;
    margin-top: 0;

    @include respond(phone) {
      font-size: 1.3rem;
    }
  }
}

</style>
