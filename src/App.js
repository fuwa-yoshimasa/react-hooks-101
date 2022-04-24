import { useState } from "react";

const App = (props) => {
    const [state, setState] = useState(props);

    const reset = () => {
        setState(props);
    };

    return (
        <>
            <p>
                {state.name} = {state.price}
            </p>
            <button onClick={() => setState((p) => ({ ...p, price: p.price + 1 }))}>+1</button>
            <button onClick={() => setState((p) => ({ ...p, price: p.price - 1 }))}>-1</button>
            <button onClick={reset}>reset</button>
            <input value={state.name} onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))} />
        </>
    );
};

App.defaultProps = {
    name: "",
    price: 1000,
};

export default App;
