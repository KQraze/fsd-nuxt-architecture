import type { Todo } from "#shared";

export default defineCachedEventHandler(
  async (event) => {
    const { get } = useServerAPI(event);

    const response = await get(`/todos`);

    return response as Todo[];
  },
  {
    maxAge: 60,
  },
);
