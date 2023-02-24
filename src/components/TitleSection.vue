<template>
  <div class="title-section mb-4">
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
        @deleteField="deleteItem" />
    </template>
    <template v-else>
      <add-button item-type="mainTitle" @addComponent="addComponent" />
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TitleSection',
  components: {
    EditInput,
    AddButton,
  },
  data: () => ({
    isChange: false,
  }),
  computed: {
    ...mapGetters('contentStore', ['titleContent']),
  },
  methods: {
    ...mapActions('contentStore', ['changeTitleContent', 'deleteTitleContent', 'addTitleContent']),
    changeModes(value, type) {
      if (typeof value === 'string') this.changeTitleContent([type, value]);
      this.isChange = !this.isChange;
    },
    addComponent(type) {
      this.addTitleContent(type);
    },
    deleteItem(type) {
      this.deleteTitleContent(type);
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
