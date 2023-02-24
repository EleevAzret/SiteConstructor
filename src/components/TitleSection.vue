<template>
  <div class="title-section mb-4">
    <template v-if="mainTitle">
      <h2
        class="title-section__title"
        v-if="!isChange"
        data-active="changeTitleMode"
        @click="changeModes">
          {{ mainTitle }}
      </h2>
      <edit-input
        :item-value="mainTitle"
        item-type="mainTitle"
        v-if="isChange"
        @changeVisible="changeModes"
        @deleteField="deleteItem" />
    </template>
    <template v-else>
      <add-button item-type="mainTitle" @addComponent="addComponent" />
    </template>
    <template v-if="mainContent">
      <p
        class="title-section__content"
        v-if="!isChange"
        data-active="changeContentMode"
        @click="changeModes">
          {{ mainContent }}
      </p>
      <edit-input
        :item-value="mainContent"
        class="mb-3"
        item-type="mainContent"
        v-if="isChange"
        @changeVisible="changeModes"
        @deleteField="deleteItem" />
    </template>
    <template v-else>
      <add-button item-type="mainContent" @addComponent="addComponent" />
    </template>
  </div>
</template>

<script>
import EditInput from './EditInput.vue';
import AddButton from './AddButton.vue';

export default {
  name: 'TitleSection',
  components: {
    EditInput,
    AddButton,
  },
  data: () => ({
    mainTitle: 'Add your title',
    mainContent: 'Add your content',
    isChange: false,
  }),
  methods: {
    changeModes(value, type) {
      if (typeof value === 'string') this[type] = value;
      this.isChange = !this.isChange;
    },
    addComponent(type) {
      this[type] = `Add your ${type}`;
    },
    deleteItem(type) {
      this[type] = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.title-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
