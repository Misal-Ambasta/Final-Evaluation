import { GET_VEHICLE_DATA_REQUEST, GET_VEHICLE_DATA_SUCCESS, GET_VEHICLE_DATA_FAILURE, GET_VEHICLE_BYID_DATA_REQUEST, GET_VEHICLE_BYID_DATA_SUCCESS, GET_VEHICLE_BYID_DATA_FAILURE, DELETE_VEHICLE_REQUEST, DELETE_VEHICLE_SUCCESS, DELETE_VEHICLE_FAILURE } from './actionTypes';
import axios from './axios';

export const allDataRequest = (payload) => {
    return {
        type: GET_VEHICLE_DATA_REQUEST,
        payload
    };
};

export const alldataSuccess = (payload) => {
    return {
        type: GET_VEHICLE_DATA_SUCCESS,
        payload
    };
};

export const alldataFailure = (payload) => {
    return {
        type: GET_VEHICLE_DATA_FAILURE,
        payload
    };
};

export const getAllVehicleData = (payload) => async (dispatch) => {
    dispatch(allDataRequest());
    console.log(payload);
    const { vehicleType, capacity, searchByRegistration, page } = payload;
    console.log(vehicleType, capacity, searchByRegistration, page);
    try {
        const data = await axios.get(`/api/vehicle/get?vehicleType=${vehicleType}&sortCapacity=${capacity}&searchByRegistration=${searchByRegistration}&limit=6&page=${page}`);
        dispatch(alldataSuccess(data));
    } catch (error) {
        dispatch(alldataFailure('Something went Wrong,try again'));
    }
};

export const getbyIDDataRequest = (payload) => {
    return {
        type: GET_VEHICLE_BYID_DATA_REQUEST,
        payload
    };
};

export const getbyIDdataSuccess = (payload) => {
    return {
        type: GET_VEHICLE_BYID_DATA_SUCCESS,
        payload
    };
};

export const getbyIDdataFailure = (payload) => {
    return {
        type: GET_VEHICLE_BYID_DATA_FAILURE,
        payload
    };
};

export const getByIDVehicleData = (payload) => async (dispatch) => {
    dispatch(getbyIDDataRequest());
    // console.log(payload, "id")
    try {
        const data = await axios.get(`/api/vehicle/byid?id=${payload}`);
        dispatch(getbyIDdataSuccess(data));
    } catch (error) {
        dispatch(getbyIDdataFailure('Something went Wrong,try again'));
    }
};

export const deleteDataRequest = (payload) => {
    return {
        type: DELETE_VEHICLE_REQUEST,
        payload
    };
};

export const deletedataSuccess = (payload) => {
    return {
        type: DELETE_VEHICLE_SUCCESS,
        payload
    };
};

export const deletedataFailure = (payload) => {
    return {
        type: DELETE_VEHICLE_FAILURE,
        payload
    };
};

export const deleteVehicleData = (payload) => async (dispatch) => {
    dispatch(deleteDataRequest());
    console.log(payload, 'delete');
    try {
        const data = await axios.get(`/api/vehicle/delete?id=${payload}`);
        dispatch(deletedataSuccess(data));
    } catch (error) {
        dispatch(deletedataFailure('Something went Wrong,try again'));
    }
};
