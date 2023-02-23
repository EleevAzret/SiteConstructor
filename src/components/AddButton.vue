<template>
  <b-button
    variant="outline-success"
    class="mb-2"
    :data-type="itemType"
    @click="addComponent">
    <b-icon icon="plus" />
  </b-button>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    itemType: {
      type: String,
      default: 'content',
    },
  },
  methods: {
    addComponent(e) {
      this.$emit('addComponent', e.currentTarget.dataset.type);
    },
  },
};
</script>

<style>

</style>