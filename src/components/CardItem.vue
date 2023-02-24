<template>
  <div class="card-item">
    <color-picker class="color-change" @changeColor="changeColor" />
    <b-card class="text-center align-self-stretch" :bg-variant="color" :text-variant="textColor">
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
        <template v-else>
          <add-button itemType="title" @addComponent="addComponent" />
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
      <template v-else>
        <add-button itemType="content" @addComponent="addComponent" />
      </template>
    </b-card>
  </div>
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
      default: {},
    },
    cardId: {
      type: String,
      required: true,
    },
  },
  components: {
    EditInput,
    AddButton,
    ColorPicker,
  },
  data: () => ({
    isChange: false,
    color: 'light',
  }),
  computed: {
    textColor() {
      return this.color === 'light' ? '' : 'white';
    },
  },
  methods: {
    ...mapActions('contentStore', ['changeCardContent', 'deleteCardContent', 'addCardContent']),
    change(value, type) {
      if (typeof value === 'string') this.changeCardContent([this.cardId, type, value]);
      this.isChange = !this.isChange;
    },
    deleteItem(type) {
      this.deleteCardContent([this.cardId, type]);
    },
    addComponent(type) {
      this.addCardContent([this.cardId, type]);
    },
    changeColor(color) {
      this.color = color;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  display: flex;
  flex-direction: column;
  align-items: start;

  &__title {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>