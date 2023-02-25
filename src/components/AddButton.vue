<template>
  <b-button
    variant="outline-success"
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
.col > .add-button {
  width: 50%;
  min-height: 5rem;
}
</style>
