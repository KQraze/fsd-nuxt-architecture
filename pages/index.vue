<script setup lang="ts">
const { todos } = storeToRefs(todoEntity.useStore());
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-10">
    <UCard v-for="todo in todos" :key="todo.id">
      <h2 class="text-2xl">{{ todo.title }}</h2>
      <template #footer>
        <ULink :to="`/todos/${todo.id}`">Перейти к todo</ULink>
      </template>
    </UCard>
  </div>
</template>

<style scoped></style>
