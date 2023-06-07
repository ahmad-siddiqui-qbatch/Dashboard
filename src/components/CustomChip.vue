<template>
    <div class="v-chip ms-4">{{title}}</div>
</template>

<script>
export default {
  props : {
    title : String,
    required : true,
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/root.scss';
.v-chip{
  font-size: var(--font-xxs);
  border: 1px solid $primary;
  background: var(--purple-300);
  width: fit-content;
  padding: 0 var(--spacing-3);
  border-radius: 50px;
  color: $primary;
}
</style>