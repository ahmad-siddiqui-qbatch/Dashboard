<template>
  <v-row>
    <v-col cols="3" class="position-relative">
      <RatingCard
        title="Ratings"
        :ratings="productRatingA"
        :percentage="percentageA"
        :chip="chipA"
      />
      <img class="card-char-img" src="@/assets/media/illustration-1-20d12d31.png" alt="">
    </v-col>
    <v-col cols="3" class="position-relative">
      <RatingCard
        title="Sessions"
        :ratings="productRatingB"
        :percentage="percentageB"
        :chip="chipB"
      />
      <img class="card-char-img" src="@/assets/media/illustration-2-042b082c.png" alt="">
    </v-col>
    <v-col cols="6">
      <TransactionCard :transactions="transactions" />
    </v-col>
    <v-col cols="3">
      <SalesChart :series="chartDataA" :total-value="getTotalValue" title="Total Sales"/>
    </v-col>
    <v-col cols="3">
      <RevenueChart title="Revenue Report" :earningData="earningDataA" :expenseData="expenseDataA"/>
    </v-col>
    <v-col cols="6">
      <div class="v-card"></div>
    </v-col>
    <v-col cols="6">
      <TimelineCard/>
    </v-col>
  </v-row>
</template>

<script>
import TransactionCard from "@/components/TransactionCard.vue";
import RatingCard from "@/components/RatingCard.vue";
import CustomChip from "@/components/CustomChip.vue";
import SalesChart from "@/components/charts/SalesChart.vue";
import RevenueChart from "@/components/charts/RevenueChart.vue";
import TimelineCard from "@/components/TimelineCard.vue";

export default {
  data() {
    return {
      transactions: [
        {
          label: "Sales",
          value: 16500,
          color: "#9155fe",
          icon: "mdi-chart-timeline-variant",
        },
        {
          label: "Customers",
          value: 20700,
          color: "#56ca01",
          icon: "mdi-account-outline",
        },
        {
          label: "Products",
          value: 30200,
          color: "#ffb401",
          icon: "mdi-cellphone-link",
        },
      ],
      productRatingA: 24500,
      percentageA: +30,
      chipA: 'Year of 2021',
      productRatingB: 2500,
      percentageB: -30,
      chipB: 'Last Week',

      chartDataA: [
        {
          name: 'Sales',
          data: [300, 1400, 5000, 4000, 9000, 2500],
        },
      ],
      earningDataA : [31000, 42000, 28000, 51000, 42000, 10900, 10000],
      expenseDataA : [11000, 32000, 27000, 32000, 34000, 5200, 4100],
    };
  },
  computed: {
    getTotalValue() {
      if (this.chartDataA && this.chartDataA.length > 0) {
        return this.chartDataA[0].data.reduce((total, dataPoint) => total + dataPoint, 0);
      } else {
        return 0;
      }
    },
  },
  components: {
    TransactionCard,
    RatingCard,
    CustomChip,
    SalesChart,
    RevenueChart,
    TimelineCard
  },
};
</script>

<style lang="scss">
.v-avatar {
  span {
    color: #fff;
    font-size: var(--font-sm);
  }
}
.card-char-img{
  position: absolute;
  bottom: var(--spacing-3);
  right: var(--spacing-6);
}
</style>
