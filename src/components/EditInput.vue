<template>
  <div class="editor">
    <textarea
      :cols="colsSize"
      :rows="rowsSize"
      :class="itemType"
      :value="itemValue"
      :data-type="itemType"
      onkeydown="size=value.length"
      onkeyup="onkeydown()"
      onkeypress="onkeydown()"
      onchange="onkeydown()"
      @blur="onBlured"
      @input="autoResize" />
    <b-icon
      icon="x"
      class="delete"
      :data-type="itemType"
      variant="danger"
      @click="deleteItem" />
  </div>
</template>

<script>
export default {
  name: 'EditInput',
  props: {
    itemValue: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      default: 'content',
    },
  },
  computed: {
    colsSize() {
      if (this.itemValue.length >= 30) {
        return 30;
      } else {
        return this.itemValue.length;
      };
    },
    rowsSize() {
      if (this.itemValue.length >= 30) {
        return Math.ceil(this.itemValue.length / 30);
      } else {
        return 1;
      };
    }
  },
  methods: {
    onBlured(e) {
      this.$emit('changeVisible', e.target.value, e.target.dataset.type);
    },
    deleteItem(e) {
      this.$emit('deleteField', e.currentTarget.dataset.type);
    },
    autoResize(e) {
      if(e.target.value.length >= 30) {
        e.target.cols = 30;
        e.target.rows = Math.ceil(e.target.value.length / 30);
      } else {
        e.target.cols = e.target.value.length;
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.editor {
  position: relative;
  width: min-content;
  text-align: center;
  margin: 0 auto;

  & > textarea {
    background: none;
    border: none;
    outline: none;
    text-align: center;
    display: inline-block;
    resize: none;
    color: inherit;
  }

  & > textarea.title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  & > textarea.mainTitle {
    font-size: 2rem;
    font-weight: 500;
  }

  & > .delete {
    position: absolute;
    top: 0;
    right: -2rem;
    z-index: 10;
    cursor: pointer;
    border: .05rem solid #fff;
    fill: #fff;
    background-color: #dc3545;
    border-radius: 20rem;
    transition: all .02s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &_h2 {
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>