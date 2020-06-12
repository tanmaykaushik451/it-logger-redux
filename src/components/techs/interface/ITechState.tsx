import {ITech} from "./ITech"

export interface ITechState{
    techs : ITech[],
    loading : boolean,
    error : any
}