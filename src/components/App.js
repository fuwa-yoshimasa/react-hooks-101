import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";

import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import reducers from "../reducers";

const App = () => {
    const initialState = {
        events: [],
        operationLogs: [],
    };
    const [state, dispatch] = useReducer(reducers, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <div className="container-fluid">
                <EventForm />
                <Events />
            </div>
        </AppContext.Provider>
    );
};

export default App;
