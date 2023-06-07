<template>
  <div class="v-card">
    <v-card-title>{{ title }}</v-card-title>
    <h4 class="ps-4 h4 fw-400">{{ totalValue }}$</h4>
    <apexchart width="100%" height="250px" type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  components: {
    ApexChart: VueApexCharts,
  },
  props: {
    series: {
      type: Array,
      default: () => [],
    },
    title: String,
    'total-value': {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          show: false,
        },
        stroke: {
          curve: 'smooth',
          colors: ['#9155fe'],
        },
        grid: {
          show : false,
        },
        legend : {
          show : false
        }
      },
    };
  },
  computed: {
  getTotalValue() {
    if (this.data && this.data.length > 0) {
      return this.data.reduce((total, dataPoint) => total + dataPoint, 0);
    } else {
      return 0;
    }
  },
},
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/root.scss';

.v-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
}


</style>
