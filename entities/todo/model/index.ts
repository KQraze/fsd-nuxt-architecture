export const useStore = defineStore("todo", () => {
  const { getAll, getOne } = todoEntity.useApi;

  const todos = getAll.getRef([]);

  return { executeTodo: getOne.execute, todos };
});
