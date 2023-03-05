<template>
  <div class="k-section-column-selector">
    <div
      class="k-section-column-selector-wrapper"
      :class="{ opened: opened, empty: empty }"
    >
      <k-empty
        v-for="(col, index) in options"
        :key="index"
        class="k-blocks-empty"
        :icon="col.icon"
        @click="choose(index)"
      >
        {{ col.title }}
      </k-empty>
    </div>

    <div v-if="!empty" class="k-field-add-item-button" @click="hide">
      <k-button v-if="!opened" icon="add"></k-button>
      <k-button v-if="opened" icon="remove"></k-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    empty: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    hide() {
      this.opened = !this.opened;
    },
    isOpen() {
      return this.opened;
    },
    close() {
      this.opened = false;
    },
    open() {
      this.opened = true;
    },
    choose(col) {
      this.opened = false;
      this.$emit("add", col);
    },
  },
};
</script>

<style>
.k-section-column-selector-wrapper.opened,
.k-section-column-selector-wrapper.empty {
  max-height: 10rem;
}

.k-section-column-selector-wrapper:not(.empty) {
  padding-top: 1rem;
}

.k-section-column-selector-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
}

.k-section-column-selector-wrapper .k-blocks-empty {
  flex: 1 1 10rem;
  margin: 0 0.5rem;
  background: var(--color-white);
}
</style>
