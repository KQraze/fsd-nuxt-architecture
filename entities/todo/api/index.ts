export const useApi = {
  getAll: useAPI(() => $fetch("/bff/todos")),
  getOne: useAPI((id: number) => $fetch(`/bff/todos/${id}`)),
};
