<script setup lang="ts">
const { todos } = storeToRefs(todoEntity.useStore());
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-10">
    <LazyWidgetLandingCard
      v-for="item in todos"
      :key="item.id"
      :item
      hydrate-on-visible
      @hydrated="() => console.log(`hydrated ${item.title}`)"
    />
  </div>
</template>

<style scoped></style>
