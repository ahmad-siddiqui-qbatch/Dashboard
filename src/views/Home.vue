<template>
  <v-row>
    <v-col cols="6" lg="3" class="position-relative">
      <RatingCard
        title="Ratings"
        :ratings="productRatingA"
        :percentage="percentageA"
        :chip="chipA"
      />
      <img class="card-char-img" src="@/assets/media/illustration-1-20d12d31.png" alt="">
    </v-col>
    <v-col cols="6" lg="3" class="position-relative">
      <RatingCard
        title="Sessions"
        :ratings="productRatingB"
        :percentage="percentageB"
        :chip="chipB"
      />
      <img class="card-char-img" src="@/assets/media/illustration-2-042b082c.png" alt="">
    </v-col>
    <v-col cols="4" lg="6" >
      <TransactionCard :transactions="transactions" />
    </v-col>
    <v-col cols="8" lg="3">
      <SalesChart :series="chartDataA" :totalValue="yearlyTotal" title="Total Sales" category-type="yearly" chartType="line"/>
    </v-col>
    <v-col cols="6" md="6" lg="3">
      <RevenueChart title="Revenue Report" :earningData="earningDataA" :expenseData="expenseDataA"/>
    </v-col>
    <v-col cols="12" md="6">
      <SalesChart :series="chartDataB" :totalValue="weeklyTotal" title="Weekly Sales" category-type="weekly" chartType="bar"/>
    </v-col>
    <v-col cols="12" lg="6">
      <TimelineCard title="Activity Timeline"/>
    </v-col>
    <v-col cols="12" md="4">
      <PaymentCard 
       title="Upgrade Your Plan" 
       text="Please make the payment to start enjoying all the features of our premium plan as soon as possible."
       icon="mdi-briefcase-variant"
       label="Platinum"
       caption="Upgrade Plan"
       planPrice="5250"
       duration="year"
       subtitle="Payment Details"
       />
    </v-col>
  </v-row>
</template>

<script>
import TransactionCard from "@/components/TransactionCard.vue";
import RatingCard from "@/components/RatingCard.vue";
import SalesChart from "@/components/charts/SalesChart.vue";
import RevenueChart from "@/components/charts/RevenueChart.vue";
import TimelineCard from "@/components/TimelineCard.vue";
import PaymentCard from "@/components/PaymentCard.vue";

export default {
  data() {
    return {
      transactions: [
        {
          label: "Sales",
          value: 16500,
          color: "primary",
          icon: "mdi-chart-timeline-variant",
        },
        {
          label: "Customers",
          value: 20700,
          color: "success",
          icon: "mdi-account-outline",
        },
        {
          label: "Products",
          value: 30200,
          color: "yellow",
          icon: "mdi-cellphone-link",
        },
      ],
      productRatingA: 24500,
      percentageA: +30,
      chipA: 'Year of 2021',
      productRatingB: 13000,
      percentageB: -30,
      chipB: 'Last Week',
      // Data for Total Sales
      chartDataA: [
        {
          name: 'Sales',
          data: [300, 300, 200, 3200, 2600, 1000, 3200, 2700, 200],
        },
      ],
      // Data for Revenue report
      earningDataA: [31000, 42000, 40000, 42000, 42000, 10900, 10000],
      expenseDataA: [11000, 32000, 30000, 32000, 34000, 5200, 4100],
      // Data for Weekly Sales
      chartDataB: [
        {
          name: 'Sales',
          data: [700, 1000, 3000, 2000, 5000, 2500],
        },
      ],
    };
  },
  computed: {
    yearlyTotal() {
      return this.chartDataA[0].data.reduce((total, dataPoint) => total + dataPoint, 0);
    },
    weeklyTotal() {
      return this.chartDataB[0].data.reduce((total, dataPoint) => total + dataPoint, 0);
    },
  },
  components: {
    TransactionCard,
    RatingCard,
    SalesChart,
    RevenueChart,
    TimelineCard,
    PaymentCard
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
