<script setup lang="ts">
const { name } = defineProps<{ name: string }>();

const Icon = name
  ? defineAsyncComponent(() => import(`~/assets/icons/${name}.svg`))
  : "";
</script>

<template>
  <Icon v-if="name" />
</template>

<style scoped></style>
