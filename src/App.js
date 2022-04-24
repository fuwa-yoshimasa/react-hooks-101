import { useState } from "react";

const App = (props) => {
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);

    const reset = () => {
        setPrice(props.price);
        setName(props.name);
    };

    return (
        <>
            <p>
                {name} = {price}
            </p>
            <button onClick={() => setPrice((p) => p + 1)}>+1</button>
            <button onClick={() => setPrice((p) => p - 1)}>-1</button>
            <button onClick={reset}>reset</button>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
};

App.defaultProps = {
    name: "",
    price: 1000,
};

export default App;
