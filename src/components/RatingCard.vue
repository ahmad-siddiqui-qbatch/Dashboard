<template>
  <v-card>
    <v-card-title class="mb-6">{{ title }}</v-card-title>
    <div class="d-flex rating-wrapper mb-3">
      <h4 class="font-h4 fw-400">{{ formattedRatings }}</h4>
      <v-card-subtitle  class="ps-2" :class="percentageClass">{{ percentage }}%</v-card-subtitle>
    </div>
    <CustomChip :title="chip" />
  </v-card>
</template>

<script>

import CustomChip from "@/components/CustomChip.vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    imgsrc: {
      type: String,
    },
    chip: {
      type: String,
    }
  },
  components : {
    CustomChip
  },
  computed: {
    formattedRatings() {
      if (this.ratings > 999) {
        const value = this.ratings / 1000;
        return value.toFixed(1) + 'k';
      } else {
        return this.ratings.toString();
      }
    },
    percentageClass() {
      if (this.percentage > 0) {
        return 'text-success';
      } else if (this.percentage < 0) {
        return 'text-error';
      } else {
        return '';
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/root.scss';
.rating-wrapper{
  padding: 0 1rem;
}
</style>
