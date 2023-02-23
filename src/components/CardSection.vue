<template>
  <div class="card-section row">
    <b-row cols="3">
      <template>
        <b-col class="mb-4" v-for="(value, key) in cards" :key="key">
          <card-item :item="value" />
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import CardItem from './CardItem.vue';

export default {
  name: 'CardSection',
  components: {
    CardItem,
  },
  data: () => ({
    cards: {
      1: {
        title: 'First card title',
        content: 'First card content',
        id: 1,
      },
      2: {
        title: 'Second card title',
        content: 'Second card content',
        id: 2,
      },
      3: {
        title: 'Third card title',
        content: 'Third card content',
        id: 3,
      },
      4: {
        title: 'Third card title',
        content: 'Third card content',
        id: 4,
      },
    }
  }),
}
</script>

<style>

</style>