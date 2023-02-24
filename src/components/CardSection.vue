<template>
  <div class="card-section row">
    <b-row cols="3">
      <template>
        <b-col class="mb-4" v-for="(value, key) in cardsContent" :key="key">
          <card-item :item="value" :cardId="key" :color="color" />
        </b-col>
      </template>
      <b-col class="mb-4 align-self-center">
        <add-button @addComponent="addCard" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardItem from './CardItem.vue';
import AddButton from './AddButton.vue';
import ColorPicker from './ColorPicker.vue';

export default {
  name: 'CardSection',
  components: {
    CardItem,
    AddButton,
    ColorPicker,
  },
  data: () => ({
    color: 'light',
  }),
  computed: {
    ...mapGetters('contentStore', ['cardsContent']),
  },
  methods: {
    ...mapActions('contentStore', ['addCard']),
  },
};
</script>

<style>

</style>