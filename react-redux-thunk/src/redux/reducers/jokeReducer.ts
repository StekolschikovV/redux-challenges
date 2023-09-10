import {EJokeActionType, IAction} from "../actions/actions";

export interface IJokeState {
    data: any
    loading: boolean
    error: any
}

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const jokeReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case EJokeActionType.FETCH_DATA_REQUEST:
            return {...state, loading: true, error: null};
        case EJokeActionType.FETCH_DATA_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case EJokeActionType.FETCH_DATA_ERROR:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default jokeReducer;
