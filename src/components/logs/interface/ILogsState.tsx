import { ILogs } from "./ILogs";

export interface ILogsState{
        logs : ILogs[],
        current : ILogs,
        loading : boolean,
        error : any,
}