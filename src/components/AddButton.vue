<template>
  <b-button
    :variant="fillType"
    class="mb-2 add-button"
    :data-type="itemType"
    @click="addComponent">
    <b-icon icon="plus" />
    {{ componentType }}
  </b-button>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    itemType: {
      type: String,
      default: '',
    },
    componentType: {
      type: String,
      default: '',
    },
    isFill: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fillType() {
      return this.isFill ? 'success' : 'outline-success';
    },
  },
  methods: {
    addComponent(e) {
      if (e.currentTarget.dataset.type) {
        this.$emit('addComponent', e.currentTarget.dataset.type);
      } else {
        this.$emit('addComponent');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-button {
  border: 1px solid white;
}
.col > .add-button {
  width: 50%;
  min-height: 5rem;
}
</style>
