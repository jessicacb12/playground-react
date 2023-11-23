import { useState } from "react";

export default function Child ({ order, shown }) {
    const [count, setCount] = useState(0);

    console.log('Render child', order)

    return (
        <div onClick={() => setCount(prev => prev + 1)}>
            CHILD {order} {String(shown)} count {count}
        </div>
    )
}