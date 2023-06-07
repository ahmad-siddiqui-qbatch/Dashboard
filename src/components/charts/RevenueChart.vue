<template>
  <div class="v-card">
    <v-card-title>{{ title }}</v-card-title>
    <span class="ps-4">Total Earning: <b>${{ totalEarning }}</b></span>
    <br>
    <span class="ps-4">Total Expense: <b>${{ totalExpense }}</b></span>
    <apexchart
      type="area"
      height="252px"
      width="100%"
      :options="chartOptions"
      :series="mergedSeries"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    ApexChart: VueApexCharts,
  },

  props: {
    title: String,
    earningData: Array,
    expenseData: Array,
  },

  data() {
    return {
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "months",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$" + val.toFixed(2);
            },
          },
        },
        grid: {
          show: false,
        },
      },
    };
  },

  computed: {
    mergedSeries() {
      return [
        {
          name: "Earning",
          data: this.earningData,
        },
        {
          name: "Expense",
          data: this.expenseData,
        },
      ];
    },
    totalEarning() {
      return this.earningData.reduce((sum, value) => sum + value, 0);
    },
    totalExpense() {
      return this.expenseData.reduce((sum, value) => sum + value, 0);
    },
  },
};
</script>

<style>
.v-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
