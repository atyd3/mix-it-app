<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show" class="dialog">
        <header>
          <h2 class="dialog__header">
            <slot name="header">{{ title }}</slot>
          </h2>
        </header>
        <section>
          <slot class="dialog__message"></slot>
        </section>
        <menu v-if="!fixed">
          <base-button @click="action">
            <slot name="action1">Close</slot>
          </base-button>
          <base-button mode="outline" @click="action2" v-if="$slots.action2">
            <slot name="action2">Close</slot>
          </base-button>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close', 'action', 'action2'],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit('close');
    },
    action(){
      this.$emit('action');
    },
    action2(){
      this.$emit('action2');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
}

.dialog {
  position: fixed;
  top: 20vh;
  width: 100%;
  max-width: 42rem;

  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: auto;
  overflow: hidden;
  background-color: white;

  @include respond(tab-port){
    width: 80%;
  }

  &__header {
    background-image: linear-gradient(to right top, #30529d, #0083ac, #52bea1, #5ffb83);
    color: black;
    padding: 1rem;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
  }
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all .3s ease-out;
}

.dialog-leave-active {
  transition: all .3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

</style>
