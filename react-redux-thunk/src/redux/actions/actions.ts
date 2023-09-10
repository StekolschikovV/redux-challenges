// dataActions.ts
import {ThunkAction} from 'redux-thunk';
import {ISate} from '../index'; // Ваш корневой стейт
import {AnyAction, Dispatch} from 'redux';
import axios from "axios";

export enum EJokeActionType {
    'FETCH_DATA_REQUEST',
    'FETCH_DATA_SUCCESS',
    'FETCH_DATA_ERROR',
    'FETCH_DATA_FINISH',
}

export interface IJokeFetchDataFinishAction {
    type: EJokeActionType.FETCH_DATA_FINISH
    payload: {
        joke: string
    }
}

export interface IJokeFetchDataRequestAction {
    type: EJokeActionType.FETCH_DATA_REQUEST
}

export interface IJokeFetchDataSuccessAction {
    type: EJokeActionType.FETCH_DATA_SUCCESS
    payload: {
        joke: string
    }
}

export interface IFetchDataErrorAction {
    type: EJokeActionType.FETCH_DATA_ERROR
    payload: {
        error: string
    }
}

export type IAction =
    IJokeFetchDataFinishAction
    | IJokeFetchDataRequestAction
    | IJokeFetchDataSuccessAction
    | IFetchDataErrorAction


const jokeFetchDataFinish = (joke: string): IJokeFetchDataFinishAction => ({
    type: EJokeActionType.FETCH_DATA_FINISH,
    payload: {
        joke
    }
});
const jokeFetchDataRequest = (): IJokeFetchDataRequestAction => ({
    type: EJokeActionType.FETCH_DATA_REQUEST,
});

const jokeFetchDataSuccess = (data: { joke: string }): IJokeFetchDataSuccessAction => ({
    type: EJokeActionType.FETCH_DATA_SUCCESS,
    payload: data,
});

const fetchDataError = (error: string): IFetchDataErrorAction => ({
    type: EJokeActionType.FETCH_DATA_ERROR,
    payload: {
        error
    },
});

export const fetchData = (): ThunkAction<void, ISate, null, AnyAction> => {

    return async (dispatch: Dispatch, getState: () => ISate) => {

        dispatch(jokeFetchDataRequest());

        try {
            const joke = await axios
                .get("https://api.chucknorris.io/jokes/random")
                .then((e: { data: { value: string } }) => e.data.value)
                .catch(_ => "")
            dispatch(jokeFetchDataSuccess({joke}));
        } catch (error: any) {
            dispatch(fetchDataError(error.message));
        }

        if (getState().joke?.data)
            dispatch(jokeFetchDataFinish((getState().joke.data?.joke)))

    };

};
