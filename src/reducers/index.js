const events = (state = [], action) => {
    switch (action.type) {
        case "CREATE_EVENT":
            const maxId = state.reduce((a, b) => (a.id > b.id ? a : b), { id: 0 });
            const newId = maxId.id + 1;
            const event = { id: newId, title: action.title, body: action.body };
            return [...state, event];
        case "DELETE_EVENT":
            console.log(action.id);
            return state.filter((event) => event.id !== action.id);
        case "DELETE_ALL_EVENTS":
            return [];
        default:
            return state;
    }
};

export default events;
