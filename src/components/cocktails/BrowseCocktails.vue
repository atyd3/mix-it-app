<template>
  <base-card>
    <h3>Browse cocktails by first letter</h3>
    <div class="browse">
      <h3 v-for="letter in letters" :key="letter" class="browse__item">
        <router-link :to="browseLink" @click="chooseLetter(letter)">{{ letter }}</router-link>
        /
      </h3>
    </div>
  </base-card>
</template>


<script>
export default {
  data() {
    return {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      chosenLetter: null,
    }
  },
  computed: {
    browseLink() {
      return {
        path: '/browse', query: {s: this.chosenLetter}
      }
    }
  },
  methods: {
    chooseLetter(letter) {
      this.chosenLetter = letter;
      console.log(letter, this.chosenLetter, this.browseLink.query.s)
      this.$router.push(this.browseLink)
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 1rem;
}

.browse {
  display: flex;
  width: 100%;
  justify-content: center;

  &__item {
    display: flex;
    margin: auto;

    a {
      margin-right: 2px;
      text-decoration: none;
      color: black
    }
  }
}
</style>
