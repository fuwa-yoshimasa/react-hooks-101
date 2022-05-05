import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useReducer } from "react";

import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import AppContext from "../contexts/AppContext";
import reducers from "../reducers";

const App = () => {
    const appState = localStorage.getItem("app-state");
    const initialState = appState
        ? JSON.parse(appState)
        : {
              events: [],
              operationLogs: [],
          };
    const [state, dispatch] = useReducer(reducers, initialState);

    useEffect(() => {
        const stateJson = JSON.stringify(state);
        localStorage.setItem("app-state", stateJson);
    }, [state]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <div className="container-fluid">
                <EventForm />
                <Events />
                <OperationLogs />
            </div>
        </AppContext.Provider>
    );
};

export default App;
