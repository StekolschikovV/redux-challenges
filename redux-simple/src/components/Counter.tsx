import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from "../store/actions";
import {IStore} from "../store";

const Counter: React.FC = () => {

    const dispatch = useDispatch();
    const count = useSelector((state: IStore) => state.counter.count);
    const isEven = useSelector((state: IStore) => state.even.isEven);
    const joke = useSelector((state: IStore) => state.joke.joke);

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <p>IsEven: {isEven ? "true" : "false"}</p>
            <p>joke: {joke}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );

};

export default Counter;