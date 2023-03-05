<template>
  <div class="k-section-column-blocks">
    <k-draggable
      v-bind="draggableOptions"
      class="k-section-column-blocks-list k-blocks-list k-grid"
      @sort="save"
    >
      <k-column
        v-for="(block, index) in value"
        :key="block.content"
        class="k-section-column-block"
        :width="getOptions(block, 'width', '1/1')"
        :style="getBlockStyle(block)"
      >
        <k-block
          :ref="'block-' + block.id"
          v-bind="block"
          :endpoints="endpoints"
          :fieldset="fieldset(block)"
          :is-batched="isBatched(block)"
          :is-last-in-batch="isLastInBatch(block)"
          :is-full="isFull"
          :is-hidden="block.isHidden === true"
          :is-selected="isSelected(block)"
          :next="prevNext(index + 1)"
          :prev="prevNext(index - 1)"
          @append="add(block, index + 1)"
          @blur="select(null)"
          @choose="choose($event, block)"
          @chooseToAppend="add(block, index + 1)"
          @chooseToConvert="convert(block)"
          @chooseToPrepend="add(block, index)"
          @copy="copy()"
          @confirmToRemoveSelected="confirmToRemoveSelected"
          @click.native.stop="select(block, $event)"
          @duplicate="duplicate(block, index)"
          @focus="select(block)"
          @hide="hide(block)"
          @paste="todo()"
          @prepend="add(block, index)"
          @remove="remove(block)"
          @sortDown="sort(block, index, index + 1)"
          @sortUp="sort(block, index, index - 1)"
          @show="show(block)"
          @update="update(block, $event)"
        />

        <span class="k-section-column-block-label">{{
          getOptions(block, "title")
        }}</span>
      </k-column>
    </k-draggable>

    <k-section-column-selector
      ref="selector"
      :empty="isEmpty"
      :options="options"
      @add="addColumn"
    />

    <k-dialog ref="missing" theme="negative" icon="trash" :submitbutton="false">
      <k-text>
        This feature is currently not available in columns.<br />
      </k-text>
    </k-dialog>
  </div>
</template>
<script>
export default {
  extends: "k-blocks",
  inheritAttrs: false,
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    value: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    console.log(this.options);
  },
  methods: {
    convert(block) {
      const keys = Object.keys(this.options);
      const loc = keys.indexOf(block.content?.option);
      const next = keys[loc == 0 ? keys.length - 1 : loc - 1];
      block.content.option = next;
      this.save();
    },
    add(block, index) {
      this.addColumn(block.content.option, index);
    },
    getOptions(block, key, fallback) {
      const id = block.content?.option || 0;
      return this.options[id]?.[key] || fallback;
    },
    getBlockStyle(block) {
      const style = this.getOptions(block, "style", {});
      let newStyle = {};

      Object.keys(style).forEach(function (key) {
        newStyle[key] = block.content?.[style[key]] || style[key];
      });
      return newStyle;
    },
    async addColumn(option, index = false) {
      const block = await this.$api.get(
        this.endpoints.field + "/fieldsets/column"
      );

      //Set option
      block.content["option"] = option;

      //Set default
      const def = this.options[option]?.default || {};

      for (const prop in def) {
        block.content[prop] = def[prop];
      }

      if (index) {
        this.blocks.splice(index, 0, block);
      } else {
        this.blocks.push(block);
      }

      this.update();
    },

    update(block, content) {
      const index = this.findIndex(block?.id || -1);
      if (index !== -1) {
        Object.assign(this.blocks[index].content, content);
      }

      //To fix: Lost focus on update
      this.$emit("sectionsave");
    },
    todo() {
      this.$refs.missing.open();
    },
  },
};
</script>

<style>
.k-section-column-blocks {
  padding: 0.75rem;
  border-radius: var(--rounded);
}

.k-section-column-blocks-list {
  grid-column-gap: 0 !important;
  grid-row-gap: 0.8rem !important;
}

.k-block-container-type-column {
  background-color: transparent;
}

.k-block-container-type-column > .k-block-options {
  margin-top: 0;
  margin-right: 0;
  right: 0;
  box-shadow: none;
  z-index: 1;
}

.k-block-container-type-column > .k-block-options .k-button-icon {
  --size: 0.8rem;
}

.k-block-container-type-column > .k-block-options .k-sort-handle svg {
  height: 0.8rem;
  width: 0.8rem;
}

.k-section-column-block {
  position: relative;
}

.k-block-container[data-selected="true"] + .k-section-column-block-label {
  z-index: 1;
}

.k-section-column-block-label {
  position: absolute;
  top: 0.6rem;
  left: 0.7rem;
  font-size: 0.8rem;
  pointer-events: none;
}
</style>
