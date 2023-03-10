<template>
  <b-col class="card-item mb-4">
    <div class="card-item__settings" v-if="isDevelop">
      <color-picker class="color-change" :currentColor="item.color" @changeColor="changeColor" />
      <b-button
        @click="onDeleteCard"
        variant="danger"
        size="sm"
        class="mb-2"
      >
        <b-icon icon="x-lg" aria-hidden="true" />
      </b-button>
    </div>
    <b-card
      class="text-center align-self-stretch"
      :bg-variant="item.color"
      :text-variant="textColor"
    >
      <template #header>
        <template v-if="item.title">
          <b-card-text
            class="card-item__title"
            v-if="!isChange"
            @click="change">
              {{ item.title }}
            </b-card-text>
          <edit-input
            :itemValue="item.title"
            itemType="title"
            v-if="isChange"
            @deleteField="deleteItem"
            @changeVisible="change" />
        </template>
        <template v-if="!item.title && isDevelop">
          <add-button :isFill="true" itemType="title" @addComponent="addComponent" />
        </template>
      </template>
      <template v-if="item.content">
        <b-card-text v-if="!isChange" @click="change">{{ item.content }}</b-card-text>
        <edit-input
        :itemValue="item.content"
        itemType="content"
        v-if="isChange"
        @deleteField="deleteItem"
        @changeVisible="change" />
      </template>
      <template v-if="!item.content && isDevelop">
        <add-button :isFill="true" itemType="content" @addComponent="addComponent" />
      </template>
    </b-card>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex';
import AddButton from './AddButton.vue';
import EditInput from './EditInput.vue';
import ColorPicker from './ColorPicker.vue';

export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    sectionId: {
      required: true,
    },
    isDevelop: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    EditInput,
    AddButton,
    ColorPicker,
  },
  data: () => ({
    isChange: false,
  }),
  computed: {
    textColor() {
      return this.item.color === 'light' ? '' : 'white';
    },
  },
  methods: {
    ...mapActions('contentStore', [
      'changeCardContent',
      'deleteCardContent',
      'addCardContent',
      'changeCardColor',
      'deleteCard',
    ]),
    change(value, type) {
      if (!this.isDevelop) return;
      if (typeof value === 'string') this.changeCardContent([this.sectionId, this.item.id, type, value]);
      this.isChange = !this.isChange;
    },
    deleteItem(type) {
      this.deleteCardContent([this.sectionId, this.item.id, type]);
    },
    addComponent(type) {
      this.addCardContent([this.sectionId, this.item.id, type]);
    },
    changeColor(color) {
      this.changeCardColor([this.sectionId, this.item.id, color]);
    },
    onDeleteCard() {
      this.deleteCard([this.sectionId, this.item.id]);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  &__settings {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
