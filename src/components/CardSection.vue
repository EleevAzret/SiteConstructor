<template>
  <div class="card-section row">
    <div class="settings">
      <b-button
        v-if="isDevelop"
        @click="deleteItem"
        variant="outline-danger"
        size="sm"
        class="mb-2"
      >
        <b-icon icon="x-lg" aria-hidden="true" />
      </b-button>
    </div>
    <b-row cols="1"
      cols-sm="2"
      cols-md="3"
    >
      <template>
        <b-col class="mb-4" v-for="card in cardComponent.cards" :key="card.id">
          <card-item :isDevelop="isDevelop" :sectionId="cardComponent.id" :item="card" />
        </b-col>
      </template>
      <b-col v-if="isDevelop" class="mb-4 align-self-center">
        <add-button @addComponent="addNewCard" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CardItem from './CardItem.vue';
import AddButton from './AddButton.vue';

export default {
  name: 'CardSection',
  components: {
    CardItem,
    AddButton,
  },
  props: {
    cardComponent: {
      type: Object,
      required: true,
    },
    isDevelop: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ...mapActions('contentStore', ['addCard', 'deleteComponent']),
    addNewCard() {
      this.addCard(this.cardComponent.id);
    },
    deleteItem() {
      this.deleteComponent(this.cardComponent.id);
    },
  },
};
</script>

<style lang="scss">
  .settings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
