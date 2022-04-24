import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    console.log(count);

    const increment = () => setCount((p) => p + 1);
    const decrement = () => setCount((p) => p - 1);
    const reset = () => setCount(0);
    const bai = () => setCount((p) => p * 2);
    const waru3 = () => setCount((p) => (p % 3 === 0 ? p / 3 : p));

    return (
        <>
            count : {count}
            <br />
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={bai}>x2</button>
            <button onClick={waru3}>3</button>
        </>
    );
};

export default App;
