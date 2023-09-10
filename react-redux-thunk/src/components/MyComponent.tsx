// MyComponent.tsx
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ISate} from "../redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchData} from "../redux/actions/actions";

function MyComponent() {

    const dispatch = useDispatch<ThunkDispatch<ISate, null, AnyAction>>();
    const jokeData = useSelector((state: ISate) => state.joke);
    const lengthData = useSelector((state: ISate) => state.length);

    const handleFetchData = () => {
        dispatch(fetchData());
    };

    return (
        <div>
            <button onClick={handleFetchData}>Загрузить данные</button>
            {jokeData.loading && <p>Загрузка данных...</p>}
            {jokeData.error && <p>Ошибка: {jokeData.error}</p>}
            {jokeData.data && <p>Данные: {JSON.stringify(jokeData.data)}</p>}
            {lengthData.length && <p>Длинна: {JSON.stringify(lengthData.length)}</p>}
        </div>
    );
}

export default MyComponent;
