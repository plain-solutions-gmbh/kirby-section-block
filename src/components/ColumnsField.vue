<template>
  <div></div>
</template>

<script>
export default {
  extends: "k-blocks-field",
  inheritAttrs: false,
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
