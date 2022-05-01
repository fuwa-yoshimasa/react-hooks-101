import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";

import EventForm from "./EventForm";
import Events from "./Events";

import reducers from "../reducers";

const App = () => {
    const [state, dispatch] = useReducer(reducers, []);

    return (
        <div className="container-fluid">
            <EventForm state={state} dispatch={dispatch} />
            <Events state={state} dispatch={dispatch} />
        </div>
    );
};

export default App;
