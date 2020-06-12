import React, { useState, useEffect } from 'react'
import { ITech } from './interface/ITech'
import TechItem from './TechItem'
import {useSelector,useDispatch} from "react-redux"
import { IStoreState } from '../../store/interface/IStoreState'
import { getTechs } from './actions/TechActions'

const TechListModal = () => {
    const dispatch = useDispatch()
    const resultdata = useSelector((state :IStoreState)=>state.TechReducer)
    const [techs, setTechs] = useState<ITech[]>([])
    const [loading, setLoading] = useState<boolean>(resultdata.loading)

    useEffect(() => {
       dispatch(getTechs()) 
    }, [])

    useEffect(()=>{
        if(resultdata){
            setTechs(resultdata.techs)
        }
    },[resultdata])

    if(loading){
        <p>Loading.........</p>
    }

    return (
        <div id="techlist-modal" className="modal">
            <div className="modal-content">
                <h4>Technician list</h4>
                <ul className="collection">
                    {!loading && techs.map((tech)=>{
                        return(
                            <TechItem key={tech.id}  techs={tech}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal
