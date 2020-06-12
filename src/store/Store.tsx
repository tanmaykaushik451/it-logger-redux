import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import Thunk from "redux-thunk"
import {rootReducer} from "../reducers"
import { initialState } from './initialState';

const middleWare = [Thunk];
//@ts-ignore
const Store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))

export default Store



