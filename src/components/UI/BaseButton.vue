<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default{
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #0083ac;
  border: 1px solid #0083ac;
  color: black;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0.5rem;
  display: inline-block;

  @include respond(tab-port) {
    font-size: 1rem;
    padding: .6rem 1rem;
  }
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #30529d;
  border-color: #30529d;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: black;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #52bea1;
}
</style>
