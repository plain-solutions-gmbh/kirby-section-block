import ColumnsField from "./components/ColumnsField.vue";
import SectionBlock from "./components/SectionBlock.vue";
import ColumnBlock from "./components/ColumnBlock.vue";
import ColumnBlocks from "./components/ColumnBlocks.vue";
import ColumnSelector from "./components/ColumnSelector.vue";
import "./index.css";

window.panel.plugin("microman/section-block", {
  fields: {
    columns: ColumnsField,
  },

  blocks: {
    section: SectionBlock,
    column: ColumnBlock,
  },

  components: {
    "k-section-column-blocks": ColumnBlocks,
    "k-section-column-selector": ColumnSelector,
  },

  icons: {
    col: '<path d="M16,11.7h-4.3V16H16V11.7z"/> <path d="M10.1,11.7H5.9V16h4.3V11.7z"/> <path d="M4.3,11.7H0V16h4.3V11.7z"/> <path d="M16,5.9H8.8v4.3H16V5.9z"/> <path d="M7.2,5.9H0v4.3h7.2V5.9z"/> <path d="M16,0H0v4.3h16V0z"/>',

    col_1_1:
      '<path d="M16,11.7h-4.3V16H16V11.7z" fill-opacity="0.25"/><path d="M10.1,11.7H5.9V16h4.3V11.7z" fill-opacity="0.25"/><path d="M4.3,11.7H0V16h4.3V11.7z" fill-opacity="0.25"/><path d="M16,5.9H8.8v4.3H16V5.9z" fill-opacity="0.25"/><path d="M7.2,5.9H0v4.3h7.2V5.9z" fill-opacity="0.25"/><path d="M16,0H0v4.3h16V0z""/>',

    col_1_2:
      '<path d="M16,11.7h-4.3V16H16V11.7z" fill-opacity="0.25"/><path d="M10.1,11.7H5.9V16h4.3V11.7z" fill-opacity="0.25"/><path d="M4.3,11.7H0V16h4.3V11.7z" fill-opacity="0.25"/><path d="M16,5.9H8.8v4.3H16V5.9z"/><path d="M7.2,5.9H0v4.3h7.2V5.9z" /><path d="M16,0H0v4.3h16V0z" fill-opacity="0.25"/>',

    col_1_3:
      '<path d="M16,11.7h-4.3V16H16V11.7z"/><path d="M10.1,11.7H5.9V16h4.3V11.7z"/><path d="M4.3,11.7H0V16h4.3V11.7z"/><path d="M16,5.9H8.8v4.3H16V5.9z" fill-opacity="0.25"/><path d="M7.2,5.9H0v4.3h7.2V5.9z" fill-opacity="0.25"/><path d="M16,0H0v4.3h16V0z" fill-opacity="0.25"/>',

    columns:
      '<path d="M7,1c0-0.6-0.4-1-1-1H1C0.4,0,0,0.4,0,1v14c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1z"/><path d="M9,15c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1h-5C9.4,0,9,0.4,9,1V15z" fill-opacity="0.25" />',
  },
  use: {
    plugin(Vue) {
      // Check for VueDevtools Browser plugin
      if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue;
      }
    },
  },
});
