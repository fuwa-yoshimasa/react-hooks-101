const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const maxId = state.reduce((a, b) => Math.max(a.id, b.id), 0);
      const newId = maxId + 1;
      const event = { id: newId, title: action.title, body: action.body };
      return [...state, event];
    case "DELETE_EVENT":
      return state;
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
