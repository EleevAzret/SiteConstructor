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
    <transition-group tag="div" class="row row-cols-2 row-cols-md-3" name="slip">
      <card-item
        v-for="card in cardComponent.cards"
        :key="card.id" :isDevelop="isDevelop"
        :sectionId="cardComponent.id"
        :item="card" 
      />
      <b-col v-if="isDevelop" class="mb-4 align-self-center" key="add-btn">
        <add-button @addComponent="addNewCard" />
      </b-col>
    </transition-group>
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

  .slip-enter-active, .slip-leave-active, .slip-move {
    transition: all .5s cubic-bezier(.47,.14,.53,.95);
  }

  .slip-leave-active {
    position: absolute;
  }

  .slip-enter, .slip-leave-to {
    transform: translateX(-100vw) scale(0);
  }
</style>
