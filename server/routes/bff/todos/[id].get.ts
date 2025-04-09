import type { Todo } from "#shared";

export default defineCachedEventHandler(
  async (event) => {
    const { get } = useServerAPI(event);
    const id = getRouterParam(event, "id");

    const response = await get(`/todos/${id}`);

    return response as Todo;
  },
  {
    maxAge: 60,
  },
);
