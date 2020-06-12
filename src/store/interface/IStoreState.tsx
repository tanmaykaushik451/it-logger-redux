import { ILogsState } from "../../components/logs/interface/ILogsState";
import { ITechState } from "../../components/techs/interface/ITechState";

export interface IStoreState{
    LogReducer : ILogsState,
    TechReducer :ITechState
}