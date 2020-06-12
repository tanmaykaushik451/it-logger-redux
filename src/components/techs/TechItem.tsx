import React from 'react'
import { ITech } from './interface/ITech'
import { ITechItem } from './interface/ITechItem'
import { useDispatch } from "react-redux"
import { deleteTech } from './actions/TechActions'

const TechItem: React.FC<ITechItem> = ({ techs }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        if (techs.id)
            dispatch(deleteTech(techs.id))
    }

    return (
        <li className="collection-item">
            <div className="">
                {techs.firstName} {techs.lastName}
                <a href="#!" onClick={handleDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default TechItem
