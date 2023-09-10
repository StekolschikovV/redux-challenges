// MyComponent.tsx
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../redux";

function MyComponent() {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.data);

    const handleFetchData = () => {
        // dispatch(fetchData());
    };

    return (
        <div>
            <button onClick={handleFetchData}>Загрузить данные</button>
            {data.loading && <p>Загрузка данных...</p>}
            {data.error && <p>Ошибка: {data.error}</p>}
            {data.data && <p>Данные: {JSON.stringify(data.data)}</p>}
        </div>
    );
}

export default MyComponent;
