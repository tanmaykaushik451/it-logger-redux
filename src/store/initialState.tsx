import { IStoreState } from "./interface/IStoreState";
import { TechReducer } from "../components/techs/reducer/TechReducer";

export const initialState :IStoreState={
    LogReducer:{
        current:{ 
            attention:false,
            date:"",
            message:'',
            tech:''
        },
        error:null,
        loading:false,
        logs:[]
    },
    TechReducer:{
        error:null,
        loading:false,
        techs:[]
    }
}