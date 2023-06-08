<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text color="dark">{{ text }}</v-card-text>
    <div class="ma-4 pa-3 payment-plan-banner">
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex">
          <v-avatar
            rounded
            size="50"
            color="primary"
            class="d-flex align-center"
          >
            <span :class="['mdi', icon]"></span>
          </v-avatar>
          <div class="d-flex flex-column ms-2">
            <span class="font-h6 fw-500">{{ label }}</span>
            <span class="font-xs">{{ caption }}</span>
          </div>
        </div>
        <div class="plan-price d-flex align-center">
          <span class="font-sm">$</span>
          <span class="font-h4">{{ planPrice }}</span>
          <span class="font-sm">/{{ duration }}</span>
        </div>
      </div>
    </div>
    <v-card-subtitle class="fw-500">{{ subtitle }}</v-card-subtitle>
    <div class="ma-4 pa-3 credit-banner">
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-avatar
            rounded
            size="40"
            color="primary"
            class="d-flex align-center"
            contain
          >
            <v-img src="@/assets/media/credit.png" cover></v-img>
          </v-avatar>
          <div class="d-flex flex-column ms-2">
            <span class="font-h6 fw-500">{{ label }}</span>
            <span class="font-xs">{{ caption }}</span>
          </div>
        </div>
        <v-text-field label="CVV" variant="outlined"></v-text-field>
      </div>
    </div>
    <div class="ma-4 pa-3 credit-banner">
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-avatar
            rounded
            size="40"
            color="primary"
            class="d-flex align-center"
          >
            <v-img src="@/assets/media/credit-2.png" cover></v-img>
          </v-avatar>
          <div class="d-flex flex-column ms-2">
            <span class="font-h6 fw-500">{{ label }}</span>
            <span class="font-xs">{{ caption }}</span>
          </div>
        </div>
        <v-text-field label="CVV" variant="outlined" height="30px" role="text-box"></v-text-field>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    icon: String,
    label: String,
    caption: String,
    planPrice : {
      type : String,
      required : true,
    },
    duration : {
      type : String,
      required : true,
    },
    subtitle : String
  },
};
</script>


<style lang="scss">
@import "@/assets/styles/root.scss";
.payment-plan-banner {
  background: var(--purple-300);
}
</style>