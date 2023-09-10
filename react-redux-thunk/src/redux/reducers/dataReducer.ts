// dataReducer.ts
const initialState = {
    data: null,
    loading: false,
    error: null,
};

const dataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {...state, loading: true, error: null};
        case 'FETCH_DATA_SUCCESS':
            return {...state, loading: false, data: action.payload};
        case 'FETCH_DATA_ERROR':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default dataReducer;
