import {
    DEFAULT,
    GET_DAIRYS,
    FILTER_BY,
    FILTER_BY_USER,
    FILTER_BY_NAME,
    GET_DATA,
    OPEN,
    CLOSE,
} from "./actionTypes";

import { reducerCreator } from "./reducerCreator";

const initialState = {
    dairys: [],
    rabotyagi: [],
    isModalOpen: false,
};

const handlers = {
    [GET_DAIRYS]: (state, { payload }) => ({
        ...state,
        dairys: payload,
    }),
    [GET_DATA]: (state, { payload }) => ({
        ...state,
        rabotyagi: payload,
    }),
    [FILTER_BY]: (state, { dairys }) => ({
        ...state,
        dairys,
    }),
    [FILTER_BY_USER]: (state, { payload }) => ({
        ...state,
        dairys: payload,
    }),
    [FILTER_BY_NAME]: (state, { payload }) => ({
        ...state,
        rabotyagi: payload,
        isModalOpen: true,
    }),
    [OPEN]: (state, { rabotyagi, dairyJson }) => ({
        ...state,
        dairys: dairyJson,
        rabotyagi: rabotyagi,
        isModalOpen: true,
    }),
    [CLOSE]: (state, { rabotyagi, dairyJson }) => ({
        ...state,
        dairys: dairyJson,
        rabotyagi: rabotyagi,
        isModalOpen: false,
    }),
    [DEFAULT]: (state) => ({ ...state }),
};

export const MainReducer = reducerCreator(handlers, initialState);
