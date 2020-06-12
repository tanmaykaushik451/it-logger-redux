import { ITechState } from "../interface/ITechState";
import { Reducer } from "redux";
import { IAction } from "../../../actions/IAction";
import { GET_TECHS, SET_LOADING, ADD_TECH, DELETE_TECH } from "../../../actions/Types";

const initialState: ITechState = {
    error: null,
    techs: [],
    loading: false
}

export const TechReducer: Reducer<ITechState, IAction> = (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [action.payload, ...state.techs]
            }
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter((tech) => tech.id !== action.payload)
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}