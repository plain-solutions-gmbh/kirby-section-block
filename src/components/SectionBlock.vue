<template>
  <div class="k-section-block">
    <k-section-column-blocks
      v-bind="columnsField"
      :value="content.columns"
      :options="options"
      @sectionsave="sectionsave($event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    columnsField() {
      return this.field("columns");
    },
    options() {
      return this.columnsField.options;
    },
  },
  methods: {
    sectionsave() {
      this.$emit("update", this.value);
    },
  },
};
</script>

<style>
.k-block-container-type-section {
  padding: 0;
}
</style>
