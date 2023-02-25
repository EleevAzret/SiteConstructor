<template>
  <div class="color-picker">
    <b-dropdown variant="outline">
      <template #button-content>
        <b-icon icon="droplet-fill" />
      </template>
      <b-dropdown-group header="Choose color" class="small">
        <b-dropdown-item-button
          v-for="(value, color) in colors"
          :key="color"
          :data-type="color"
          @click="selectColor">
            <b-icon :icon="value.icon" aria-hidden="true" />
            {{ value.name }}
            <b-icon icon="square-fill" :variant="color" class="color-icon" />
        </b-dropdown-item-button>
      </b-dropdown-group>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    currentColor: {
      type: String,
      default: 'light',
    },
  },
  data: () => ({
    colors: {
      'primary': {
        name: 'Dark Blue',
        icon: 'blank',
      },
      'success': {
        name: 'Green',
        icon: 'blank',
      },
      'warning': {
        name: 'Yellow',
        icon: 'blank',
      },
      'danger': {
        name: 'Red',
        icon: 'blank',
      },
      'info': {
        name: 'Light Blue',
        icon: 'blank',
      },
      'light': {
        name: 'Light',
        icon: 'check',
      },
      'dark': {
        name: 'Dark',
        icon: 'blank',
      },
    },
  }),
  mounted() {
    this.refreshIcons();
    this.setCheck();
  },
  methods: {
    selectColor(e) {
      let color = e.currentTarget.dataset.type;
      this.refreshIcons();
      this.colors[color].icon = 'check';
      this.$emit('changeColor', color);
    },
    refreshIcons() {
      for (let color in this.colors) {
        this.colors[color].icon = 'blank';
      };
    },
    setCheck() {
      for (let color in this.colors) {
        if (color === this.currentColor) this.colors[color].icon = 'check';
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .color-icon {
    float: right;
  }
</style>