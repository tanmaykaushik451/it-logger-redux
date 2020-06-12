import {combineReducers} from "redux"
import {LogReducer} from "../components/logs/reducer/LogReducer"
import { TechReducer } from "../components/techs/reducer/TechReducer"

export const rootReducer = combineReducers({
    LogReducer,
    TechReducer
})