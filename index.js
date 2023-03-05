(function() {
  "use strict";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$4 = {
    extends: "k-blocks-field",
    inheritAttrs: false,
    props: {
      options: Object
    }
  };
  var _sfc_render$4 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div");
  };
  var _sfc_staticRenderFns$4 = [];
  _sfc_render$4._withStripped = true;
  var __component__$4 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$4,
    _sfc_render$4,
    _sfc_staticRenderFns$4,
    false,
    null,
    null,
    null,
    null
  );
  __component__$4.options.__file = "/Users/roman/Cloud/01_Microman/Kirby/_webdata/plugin-env/site/plugins/kirby-sections/src/components/ColumnsField.vue";
  const ColumnsField = __component__$4.exports;
  const SectionBlock_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$3 = {
    props: {
      value: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      columnsField() {
        return this.field("columns");
      },
      options() {
        return this.columnsField.options;
      }
    },
    methods: {
      sectionsave() {
        this.$emit("update", this.value);
      }
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-section-block" }, [_c("k-section-column-blocks", _vm._b({ attrs: { "value": _vm.content.columns, "options": _vm.options }, on: { "sectionsave": function($event) {
      return _vm.sectionsave($event);
    } } }, "k-section-column-blocks", _vm.columnsField, false))], 1);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3,
    false,
    null,
    null,
    null,
    null
  );
  __component__$3.options.__file = "/Users/roman/Cloud/01_Microman/Kirby/_webdata/plugin-env/site/plugins/kirby-sections/src/components/SectionBlock.vue";
  const SectionBlock = __component__$3.exports;
  const ColumnBlock_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$2 = {
    inheritAttrs: false,
    props: {
      content: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      contentField() {
        return this.fieldset.tabs.content.fields.content;
      }
    },
    methods: {
      input(event) {
        this.$emit("update", event);
      }
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-blocks", _vm._b({ attrs: { "value": _vm.content.content }, on: { "input": function($event) {
      return _vm.input($event);
    } } }, "k-blocks", _vm.contentField, false));
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    null,
    null,
    null
  );
  __component__$2.options.__file = "/Users/roman/Cloud/01_Microman/Kirby/_webdata/plugin-env/site/plugins/kirby-sections/src/components/ColumnBlock.vue";
  const ColumnBlock = __component__$2.exports;
  const ColumnBlocks_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$1 = {
    extends: "k-blocks",
    inheritAttrs: false,
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      },
      value: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    created() {
      console.log(this.options);
    },
    methods: {
      convert(block) {
        var _a;
        const keys = Object.keys(this.options);
        const loc = keys.indexOf((_a = block.content) == null ? void 0 : _a.option);
        const next = keys[loc == 0 ? keys.length - 1 : loc - 1];
        block.content.option = next;
        this.save();
      },
      add(block, index2) {
        this.addColumn(block.content.option, index2);
      },
      getOptions(block, key, fallback) {
        var _a, _b;
        const id = ((_a = block.content) == null ? void 0 : _a.option) || 0;
        return ((_b = this.options[id]) == null ? void 0 : _b[key]) || fallback;
      },
      getBlockStyle(block) {
        const style = this.getOptions(block, "style", {});
        let newStyle = {};
        Object.keys(style).forEach(function(key) {
          var _a;
          newStyle[key] = ((_a = block.content) == null ? void 0 : _a[style[key]]) || style[key];
        });
        return newStyle;
      },
      async addColumn(option, index2 = false) {
        var _a;
        const block = await this.$api.get(
          this.endpoints.field + "/fieldsets/column"
        );
        block.content["option"] = option;
        const def = ((_a = this.options[option]) == null ? void 0 : _a.default) || {};
        for (const prop in def) {
          block.content[prop] = def[prop];
        }
        if (index2) {
          this.blocks.splice(index2, 0, block);
        } else {
          this.blocks.push(block);
        }
        this.update();
      },
      update(block, content) {
        const index2 = this.findIndex((block == null ? void 0 : block.id) || -1);
        if (index2 !== -1) {
          Object.assign(this.blocks[index2].content, content);
        }
        this.$emit("sectionsave");
      },
      todo() {
        this.$refs.missing.open();
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-section-column-blocks" }, [_c("k-draggable", _vm._b({ staticClass: "k-section-column-blocks-list k-blocks-list k-grid", on: { "sort": _vm.save } }, "k-draggable", _vm.draggableOptions, false), _vm._l(_vm.value, function(block, index2) {
      return _c("k-column", { key: block.content, staticClass: "k-section-column-block", style: _vm.getBlockStyle(block), attrs: { "width": _vm.getOptions(block, "width", "1/1") } }, [_c("k-block", _vm._b({ ref: "block-" + block.id, refInFor: true, attrs: { "endpoints": _vm.endpoints, "fieldset": _vm.fieldset(block), "is-batched": _vm.isBatched(block), "is-last-in-batch": _vm.isLastInBatch(block), "is-full": _vm.isFull, "is-hidden": block.isHidden === true, "is-selected": _vm.isSelected(block), "next": _vm.prevNext(index2 + 1), "prev": _vm.prevNext(index2 - 1) }, on: { "append": function($event) {
        return _vm.add(block, index2 + 1);
      }, "blur": function($event) {
        return _vm.select(null);
      }, "choose": function($event) {
        return _vm.choose($event, block);
      }, "chooseToAppend": function($event) {
        return _vm.add(block, index2 + 1);
      }, "chooseToConvert": function($event) {
        return _vm.convert(block);
      }, "chooseToPrepend": function($event) {
        return _vm.add(block, index2);
      }, "copy": function($event) {
        return _vm.copy();
      }, "confirmToRemoveSelected": _vm.confirmToRemoveSelected, "duplicate": function($event) {
        return _vm.duplicate(block, index2);
      }, "focus": function($event) {
        return _vm.select(block);
      }, "hide": function($event) {
        return _vm.hide(block);
      }, "paste": function($event) {
        return _vm.todo();
      }, "prepend": function($event) {
        return _vm.add(block, index2);
      }, "remove": function($event) {
        return _vm.remove(block);
      }, "sortDown": function($event) {
        return _vm.sort(block, index2, index2 + 1);
      }, "sortUp": function($event) {
        return _vm.sort(block, index2, index2 - 1);
      }, "show": function($event) {
        return _vm.show(block);
      }, "update": function($event) {
        return _vm.update(block, $event);
      } }, nativeOn: { "click": function($event) {
        $event.stopPropagation();
        return _vm.select(block, $event);
      } } }, "k-block", block, false)), _c("span", { staticClass: "k-section-column-block-label" }, [_vm._v(_vm._s(_vm.getOptions(block, "title")))])], 1);
    }), 1), _c("k-section-column-selector", { ref: "selector", attrs: { "empty": _vm.isEmpty, "options": _vm.options }, on: { "add": _vm.addColumn } }), _c("k-dialog", { ref: "missing", attrs: { "theme": "negative", "icon": "trash", "submitbutton": false } }, [_c("k-text", [_vm._v(" This feature is currently not available in columns."), _c("br")])], 1)], 1);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    null,
    null,
    null
  );
  __component__$1.options.__file = "/Users/roman/Cloud/01_Microman/Kirby/_webdata/plugin-env/site/plugins/kirby-sections/src/components/ColumnBlocks.vue";
  const ColumnBlocks = __component__$1.exports;
  const ColumnSelector_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = {
    props: {
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      empty: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    data() {
      return {
        opened: false
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
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-section-column-selector" }, [_c("div", { staticClass: "k-section-column-selector-wrapper", class: { opened: _vm.opened, empty: _vm.empty } }, _vm._l(_vm.options, function(col, index2) {
      return _c("k-empty", { key: index2, staticClass: "k-blocks-empty", attrs: { "icon": col.icon }, on: { "click": function($event) {
        return _vm.choose(index2);
      } } }, [_vm._v(" " + _vm._s(col.title) + " ")]);
    }), 1), !_vm.empty ? _c("div", { staticClass: "k-field-add-item-button", on: { "click": _vm.hide } }, [!_vm.opened ? _c("k-button", { attrs: { "icon": "add" } }) : _vm._e(), _vm.opened ? _c("k-button", { attrs: { "icon": "remove" } }) : _vm._e()], 1) : _vm._e()]);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/Users/roman/Cloud/01_Microman/Kirby/_webdata/plugin-env/site/plugins/kirby-sections/src/components/ColumnSelector.vue";
  const ColumnSelector = __component__.exports;
  const index = "";
  window.panel.plugin("microman/section-block", {
    fields: {
      columns: ColumnsField
    },
    blocks: {
      section: SectionBlock,
      column: ColumnBlock
    },
    components: {
      "k-section-column-blocks": ColumnBlocks,
      "k-section-column-selector": ColumnSelector
    },
    icons: {
      col: '<path d="M16,11.7h-4.3V16H16V11.7z"/> <path d="M10.1,11.7H5.9V16h4.3V11.7z"/> <path d="M4.3,11.7H0V16h4.3V11.7z"/> <path d="M16,5.9H8.8v4.3H16V5.9z"/> <path d="M7.2,5.9H0v4.3h7.2V5.9z"/> <path d="M16,0H0v4.3h16V0z"/>',
      col_1_1: '<path d="M16,11.7h-4.3V16H16V11.7z" fill-opacity="0.25"/><path d="M10.1,11.7H5.9V16h4.3V11.7z" fill-opacity="0.25"/><path d="M4.3,11.7H0V16h4.3V11.7z" fill-opacity="0.25"/><path d="M16,5.9H8.8v4.3H16V5.9z" fill-opacity="0.25"/><path d="M7.2,5.9H0v4.3h7.2V5.9z" fill-opacity="0.25"/><path d="M16,0H0v4.3h16V0z""/>',
      col_1_2: '<path d="M16,11.7h-4.3V16H16V11.7z" fill-opacity="0.25"/><path d="M10.1,11.7H5.9V16h4.3V11.7z" fill-opacity="0.25"/><path d="M4.3,11.7H0V16h4.3V11.7z" fill-opacity="0.25"/><path d="M16,5.9H8.8v4.3H16V5.9z"/><path d="M7.2,5.9H0v4.3h7.2V5.9z" /><path d="M16,0H0v4.3h16V0z" fill-opacity="0.25"/>',
      col_1_3: '<path d="M16,11.7h-4.3V16H16V11.7z"/><path d="M10.1,11.7H5.9V16h4.3V11.7z"/><path d="M4.3,11.7H0V16h4.3V11.7z"/><path d="M16,5.9H8.8v4.3H16V5.9z" fill-opacity="0.25"/><path d="M7.2,5.9H0v4.3h7.2V5.9z" fill-opacity="0.25"/><path d="M16,0H0v4.3h16V0z" fill-opacity="0.25"/>',
      columns: '<path d="M7,1c0-0.6-0.4-1-1-1H1C0.4,0,0,0.4,0,1v14c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1z"/><path d="M9,15c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1h-5C9.4,0,9,0.4,9,1V15z" fill-opacity="0.25" />'
    },
    use: {
      plugin(Vue) {
        if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
          window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue;
        }
      }
    }
  });
})();
