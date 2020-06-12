import { ILogsState } from "../interface/ILogsState"
import { SET_LOADING, GET_LOGS, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from "../../../actions/Types"
import { Reducer } from "redux"
import { IAction } from "../../../actions/IAction"

const initialState: ILogsState = {
    logs: [],
    current: {
        attention: false,
        date: "",
        message: '',
        tech: ''
    },
    loading: false,
    error: null,
}

export const LogReducer: Reducer<ILogsState, IAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter((log) => log.id !== action.payload)
            }
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: {
                    attention: false,
                    date: "",
                    message: '',
                    tech: ''
                },
            }
        case SEARCH_LOGS:
            return{
                ...state,
                logs:action.payload,
                loading:false
            }
        default: return state
    }
}