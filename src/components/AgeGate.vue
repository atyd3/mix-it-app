<template>
  <base-dialog @action="allowNavigation" @action2="restrictedNavigation" @close="close">
    <template v-slot:header>
      Welcome!
    </template>
    <h3>
      Are you over 18 years of age?
    </h3>
    <template v-slot:action1>
      Yes!
    </template>
    <template v-slot:action2>
      No, show me non-alcoholic cocktails
    </template>
  </base-dialog>
</template>

<script>
export default {
  emits: ['allow-navigation','restricted-navigation', 'close'],
  methods: {
    close() {
      this.$emit('close')
    },
    allowNavigation(){
      this.$emit('allow-navigation')
    },
    restrictedNavigation(){
      this.$emit('restricted-navigation')
    }

  },
}
</script>
