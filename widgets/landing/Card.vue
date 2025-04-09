<script setup lang="ts">
defineProps<{ item: Todo }>();

const hydrated = ref(false);

onMounted(() => (hydrated.value = true));
</script>

<template>
  <UCard>
    <h2 class="text-2xl">{{ item.title }}</h2>
    <NuxtImg v-if="hydrated" src="/nebo.jpg"></NuxtImg>
    <template #footer>
      <ULink :to="`/todos/${item.id}`">Перейти к todo</ULink>
    </template>
  </UCard>
</template>

<style scoped></style>
