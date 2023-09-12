import {EJokeActionType, IAction} from "../actions/actions";

export interface ILengthState {
    length: null | number
}

const initialState: ILengthState = {
    length: null,
};

const lengthReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case EJokeActionType.FETCH_DATA_FINISH:
            return {...state, length: action.payload?.joke.length};
        default:
            return state;
    }
};

export default lengthReducer;
