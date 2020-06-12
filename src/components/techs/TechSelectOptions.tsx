import React, { useEffect } from 'react'
import { getTechs } from './actions/TechActions'
import { useDispatch, useSelector } from "react-redux"
import { IStoreState } from '../../store/interface/IStoreState'
import { ITech } from './interface/ITech'

const TechSelectOptions = () => {
    const dispatch = useDispatch()
    const resultdata = useSelector((state : IStoreState)=>state.TechReducer.techs)
    const loading = useSelector((state : IStoreState)=>state.TechReducer.loading)

    useEffect(()=>{
        dispatch(getTechs())
    },[])

    return(
         !loading && resultdata.length!==0 && resultdata.map((tech:ITech)=>{
            return(
                <option value={`${tech.firstName} ${tech.lastName}`} key={tech.id}>
                    {tech.firstName} {tech.lastName}
                </option>
            )
        })
    )
       
}

export default TechSelectOptions
