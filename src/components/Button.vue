<template>
  <button :class="classList" @click.prevent="btnFunction">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnTitle: String,
    classList: String,
    btnFunction: Function,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 12px;
}
btn {
  &-red {
    background: red;
    color: white;
  }
  &-black {
    background: black;
    color: white;
  }
}
</style>
