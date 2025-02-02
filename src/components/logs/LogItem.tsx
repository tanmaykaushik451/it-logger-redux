import React from 'react'
import { ILogItem } from './interface/ILogItem'
import Moment from "react-moment"
import { useDispatch } from "react-redux"
import { deleteLog, setCurrent } from './actions/LogActions'


const LogItem: React.FC<ILogItem> = ({ log }) => {
    const dispatch = useDispatch();

    const deletelogbyid =()=>{
        if(log.id){
            dispatch(deleteLog(log.id))
        }
    }
    const editlogbyid =()=>{
        if(log){
            dispatch(setCurrent(log))
        }
    }
    return (
        <li className="collection-item">
            <div className="">
                <a href="#edit-log-modal" onClick={editlogbyid} className={`modal-trigger ${log.attention ? `red-text` : ``}`}>{log.message}</a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID: {log.id}</span> last updated by <span className="black-text">
                        {log.tech}
                    </span>
                    {''} on <Moment format="MMMM Do YYYY,h:mm:ss a">{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content" >
                    <i className="material-icons grey-text" onClick={deletelogbyid}>delete</i>
                </a>
            </div>
        </li>
    )
}

export default LogItem
