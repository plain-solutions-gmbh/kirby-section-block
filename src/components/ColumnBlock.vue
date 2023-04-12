<template>
  <k-section-content-block
    v-bind="contentField"
    :value="content.content"
    @input="input($event)"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      myTimeout: null
    };

  },
  computed: {
    contentField() {
      return this.field("content");
    },
  },
  methods: {
    input(event) {
      this.$emit("update", event)
    },

  },
};
</script>

<style>
.k-block-container-type-column {
  padding-top: 2rem;
}

.k-block-type-column .k-empty.k-blocks-empty {
  background: var(--color-white);
}

.k-block-type-column
  > .k-blocks
  > .k-blocks-list
  > div:first-child
  > .k-block-options {
  right: 10rem;
}
</style>
