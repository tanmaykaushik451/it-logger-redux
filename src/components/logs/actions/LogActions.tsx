import { SET_LOADING, GET_LOGS, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from "../../../actions/Types"
import { ThunkAction } from "redux-thunk"
import { IStoreState } from "../../../store/interface/IStoreState"
import { ILogs } from "../interface/ILogs"

//GET LOGS FROM SERVER
export const getLogs = (): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })
        const res = await fetch('./logs')
        const data = await res.json()
        dispatch({ type: GET_LOGS, payload: data })
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.response.data })
    }

}

//SET LOGs
export const addLog = (logs: ILogs): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })
        const res = await fetch('./logs', {
            method: 'POST',
            body: JSON.stringify(logs),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        dispatch({ type: ADD_LOG, payload: data })
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.response.data })
    }

}

//DELETE LOG
export const deleteLog = (id: number): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })
        dispatch({ type: DELETE_LOG, payload: id })
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.response.data })

    }
}

//UPDATE LOG
export const editLog = (logs: ILogs): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        const res = await fetch(`/logs/${logs.id}`, {
            method: 'PUT',
            body: JSON.stringify(logs),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        dispatch({type:UPDATE_LOG,payload:data})
        dispatch({type:CLEAR_CURRENT})

    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.response.data })
    }

}

//SEARCH LOGS
export const serachLogs = (text : string): ThunkAction<void, IStoreState, void, any> => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })
        console.log(text,"text")
        const res =await fetch(`/logs?q=${text}`)
        const data =await res.json()
        dispatch({ type: SEARCH_LOGS, payload: data })
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.response.data })
    }
}
export const setCurrent = (log :ILogs) => {
    return {
      type: SET_CURRENT,
      payload: log
    };
  };