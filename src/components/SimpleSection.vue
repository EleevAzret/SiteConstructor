<template>
  <div class="simple-section">
    <template v-if="title">
      <div class="editor editor_h2" v-if="changeTitleMode">
        <input
         v-model="title"
          data-active="changeTitleMode"
          @blur="changeModes">
        <b-icon
          icon="x"
          class="delete"
          variant="danger"
          data-type="title"
          @click="deleteComponent" />
      </div>
      <h2
        class="simple-section__title"
        v-if="!changeTitleMode"
        data-active="changeTitleMode"
        @click="changeModes">
          {{ title }}
      </h2>
    </template>
    <template v-else>
      <b-button
        variant="outline-success"
        class="mb-2"
        data-type="title"
        @click="addComponent">
        <b-icon icon="plus" />
      </b-button>
    </template>
    <template v-if="content">
      <div class="editor editor_p" v-if="changeContentMode">
        <textarea
          v-model="content"
          data-active="changeContentMode"
          @blur="changeModes" />
        <b-icon
          icon="x"
          class="delete"
          variant="danger"
          data-type="content"
          @click="deleteComponent" />
      </div>
      <p
        class="simple-section__content"
        v-if="!changeContentMode"
        data-active="changeContentMode"
        @click="changeModes">
          {{ content }}
      </p>
    </template>
    <template v-else>
      <b-button
        variant="outline-success"
        class="mb-2"
        data-type="content"
        @click="addComponent">
        <b-icon icon="plus" />
      </b-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SimpleSection',
  data: () => ({
    title: 'Add your title',
    content: 'Add your content',
    changeTitleMode: false,
    changeContentMode: false,
  }),
  methods: {
    changeModes(e) {
      this[e.target.dataset.active] = !this[e.target.dataset.active];
    },
    addComponent(e) {
      this[e.currentTarget.dataset.type] = `Add your ${e.currentTarget.dataset.type}`;
    },
    deleteComponent(e) {
      this[e.currentTarget.dataset.type] = '';
    },
    onFocusInput(e) {
      this.showDelete = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
