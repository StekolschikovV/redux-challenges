// dataActions.ts
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index'; // Ваш корневой стейт
import {Action, Dispatch} from 'redux';

const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
});

const fetchDataSuccess = (data: any) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
});

const fetchDataError = (error: string) => ({
    type: 'FETCH_DATA_ERROR',
    payload: error,
});

export const fetchData = (): ThunkAction<void, RootState, unknown, Action> => {

    return async (dispatch: Dispatch, getState: () => RootState) => {

        dispatch(fetchDataRequest());

        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch(fetchDataSuccess(data));
        } catch (error: any) {
            dispatch(fetchDataError(error.message));
        }

    };

};
