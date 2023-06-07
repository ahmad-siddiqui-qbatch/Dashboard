<template>
  <div class="v-card">
    <v-card-title>{{ title }}</v-card-title>
    <h4 class="ps-4 h4 fw-400">{{ totalValue }}$</h4>
    <apexchart width="100%" height="250px" :type="chartType" :options="options" :series="series"></apexchart>
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
    categoryType: {
      type: String,
      default: 'yearly',
      validator: (value) => ['yearly', 'weekly'].includes(value),
    },
    chartType: {
      type: String,
      default: 'line',
      validator: (value) => ['line', 'bar'].includes(value),
    }
  },
  computed: {
    totalValue() {
      return this.calculateTotalValue();
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
          categories: this.getCategories(),
        },
        yaxis: {
          show: false,
        },
        stroke: {
          curve: 'smooth',
          colors: ['#9155fe'],
        },
        grid: {
          show: false,
        },
        tooltip: {
          y: {
            formatter: (val) => `$${val.toFixed(2)}`,
          },
        },
        legend: {
          show: false,
        },
        dataLabels : {
          enabled : false
        }
      },
    };
  },
  methods: {
    calculateTotalValue() {
      return this.series.reduce((total, data) => total + data.data.reduce((sum, value) => sum + value, 0), 0);
    },
    getCategories() {
      if (this.categoryType === 'yearly') {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      } else if (this.categoryType === 'weekly') {
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      } else {
        return [];
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
