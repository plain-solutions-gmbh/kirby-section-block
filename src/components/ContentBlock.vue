
<script>
export default {
  extends: "k-blocks",
  inheritAttrs: false,
  created() {
    console.error("A content block is created. This shouldn't happen on input trigger")
  },
  methods: {

  }
};
</script>
