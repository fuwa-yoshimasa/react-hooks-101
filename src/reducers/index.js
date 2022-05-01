import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from "../actions";

const events = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            const maxId = state.reduce((a, b) => (a.id > b.id ? a : b), { id: 0 });
            const newId = maxId.id + 1;
            const event = { id: newId, title: action.title, body: action.body };
            return [...state, event];
        case DELETE_EVENT:
            return state.filter((event) => event.id !== action.id);
        case DELETE_ALL_EVENTS:
            return [];
        default:
            return state;
    }
};

export default events;
