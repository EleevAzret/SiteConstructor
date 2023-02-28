<template>
  <div class="title-item">
    <div class="settings" v-if="isDevelop">
      <b-button
        @click="deleteItem"
        variant="outline-danger"
        size="sm"
        class="mb-2">
        <b-icon icon="x-lg" aria-hidden="true" />
      </b-button>
    </div>
    <template v-if="titleContent.mainTitle">
      <h2
        class="title-section__title"
        v-if="!isChange"
        data-active="changeTitleMode"
        @click="changeModes">
          {{ titleContent.mainTitle }}
      </h2>
      <edit-input
        :item-value="titleContent.mainTitle"
        item-type="mainTitle"
        v-if="isChange"
        @changeVisible="changeModes"
        @deleteField="deleteContent" />
    </template>
    <template v-if="!titleContent.mainTitle && isDevelop">
      <add-button item-type="mainTitle" @addComponent="addContent" />
    </template>
    <template v-if="titleContent.mainContent">
      <p
        class="title-section__content"
        v-if="!isChange"
        data-active="changeContentMode"
        @click="changeModes">
          {{ titleContent.mainContent }}
      </p>
      <edit-input
        :item-value="titleContent.mainContent"
        class="mb-3"
        item-type="mainContent"
        v-if="isChange"
        @changeVisible="changeModes"
        @deleteField="deleteContent" />
    </template>
    <template v-if="!titleContent.mainContent && isDevelop">
      <add-button item-type="mainContent" @addComponent="addContent" />
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditInput from './EditInput.vue';
import AddButton from './AddButton.vue';

export default {
  name: 'TitleItem',
  props: {
    titleContent: {
      type: Object,
      default: () => ({}),
    },
    isDevelop: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    EditInput,
    AddButton,
  },
  data: () => ({
    isChange: false,
  }),
  methods: {
    ...mapActions('contentStore', ['changeTitleContent', 'deleteTitleContent', 'addTitleContent', 'deleteComponent']),
    changeModes(value, type) {
      if (!this.isDevelop) return;
      if (typeof value === 'string') this.changeTitleContent([this.titleContent.id, type, value]);
      this.isChange = !this.isChange;
    },
    addContent(type) {
      this.addTitleContent([this.titleContent.id, type]);
    },
    deleteContent(type) {
      this.deleteTitleContent([this.titleContent.id, type]);
    },
    deleteItem() {
      this.deleteComponent(this.titleContent.id);
    },
  },
};
</script>

<style lang="scss" scoped>
  .title-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .settings {
    align-self: flex-start;
  }
</style>
