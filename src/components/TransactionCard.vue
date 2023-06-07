<template>
  <v-card>
    <v-card-title>Transactions</v-card-title>
    <v-row>
      <v-col
        v-for="(transaction, index) in transactions"
        :key="index"
        cols="12" lg="4"
      >
        <div class="d-flex align-center">
          <v-avatar
            class="d-flex align-center card-box-icon"
            size="50"
            rounded
            :style="{ backgroundColor: transaction.color }"
          >
            <span :class="['mdi', transaction.icon]"></span>
          </v-avatar>
          <div class="d-flex flex-column ms-2">
            <span class="xs">{{ transaction.label }}</span>
            <span class="h5">{{ formattedValue(transaction.value) }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formattedValue(value) {
      if (value > 999) {
        const formattedValue = value / 1000;
        return formattedValue.toFixed(1) + 'k';
      } else {
        return value.toString();
      }
    },
  },
};
</script>
