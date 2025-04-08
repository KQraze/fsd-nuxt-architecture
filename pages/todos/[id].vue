<script setup lang="ts">
const { executeTodo } = todoEntity.useStore();

const route = useRoute();

const { data: todo } = await useAsyncData(() =>
  executeTodo(+(route.params?.id ?? 0)),
);
</script>

<template>
  <div>
    {{ todo }}
  </div>
</template>

<style scoped></style>
