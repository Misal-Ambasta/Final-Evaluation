import { GET_VEHICLE_DATA_REQUEST, GET_VEHICLE_DATA_SUCCESS, GET_VEHICLE_DATA_FAILURE, GET_VEHICLE_BYID_DATA_REQUEST, GET_VEHICLE_BYID_DATA_SUCCESS, GET_VEHICLE_BYID_DATA_FAILURE, DELETE_VEHICLE_REQUEST, DELETE_VEHICLE_SUCCESS, DELETE_VEHICLE_FAILURE } from './actionTypes';
import { loadData, saveData, removeData } from './localStorage';

let initState = {
    isLoading: false,
    error: false,
    isAuth: false,
    data: [],
    page: 1,
    total: 1,
    singleData: [],
    items: [] 
};

const appReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_VEHICLE_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            };

        case GET_VEHICLE_DATA_SUCCESS:
            // console.log(payload, 'line 21');
            return {
                ...state,
                isLoading: false,
                error: false,
                isAuth: true,
                data: [ ...payload.data.data ],
                total: payload.data.finalPage
            };

        case GET_VEHICLE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: 'Something went wrong'
            };

        case GET_VEHICLE_BYID_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            };

        case GET_VEHICLE_BYID_DATA_SUCCESS:
            // console.log(payload, 'single line 50');
            // saveData('singleData', payload.data);
            return {
                ...state,
                isLoading: false,
                error: false,
                isAuth: true,
                items: payload.data
            };

        case GET_VEHICLE_BYID_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: 'Something went wrong'
            };

            case DELETE_VEHICLE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            };

        case DELETE_VEHICLE_SUCCESS:
            // console.log(payload, 'single line 50');
            saveData('deltet', payload.data);
            return {
                ...state,
                isLoading: false,
                error: false,
                isAuth: true,
                data: [ ...payload.data.data ],
                total: payload.data.finalPage
            };

        case DELETE_VEHICLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: 'Something went wrong'
            };

        default:
            return state;
    }
    
};
export default appReducer;
