import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";

import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import reducers from "../reducers";

const App = () => {
    const [state, dispatch] = useReducer(reducers, []);

    return (
        <AppContext.Provider value={"provider!"}>
            <div className="container-fluid">
                <EventForm state={state} dispatch={dispatch} />
                <Events state={state} dispatch={dispatch} />
            </div>
        </AppContext.Provider>
    );
};

export default App;
