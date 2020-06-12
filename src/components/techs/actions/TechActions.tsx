import { ThunkAction } from "redux-thunk";
import { IStoreState } from "../../../store/interface/IStoreState";
import { TECHS_ERROR, SET_LOADING, GET_TECHS, ADD_TECH, DELETE_TECH } from "../../../actions/Types";
import { ITech } from "../interface/ITech";

export const getTechs= (): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        dispatch({type:SET_LOADING})
        const res = await fetch('/techs')
        const data = await res.json()
        dispatch({ type: GET_TECHS, payload: data })
    } catch (error) {
        dispatch({ type: TECHS_ERROR, payload: error.response.data })
    }
}

export const addTech= (tech : ITech): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        const res = await fetch(`/techs`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(tech)
        })
        const data = await res.json()
        dispatch({ type: ADD_TECH, payload: data })
    } catch (error) {
        dispatch({ type: TECHS_ERROR, payload: error.response.data })
    }
}

export const deleteTech= (id : number): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        await fetch(`/techs/${id}`,{
            method:'DELETE'
        })
        dispatch({ type: DELETE_TECH, payload: id })
    } catch (error) {
        dispatch({ type: TECHS_ERROR, payload: error.response.data })
    }
}