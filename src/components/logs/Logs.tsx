import React, { useState, useEffect } from 'react'
import { ILogs } from './interface/ILogs'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import { useSelector, useDispatch } from "react-redux"
import { IStoreState } from '../../store/interface/IStoreState'
import { getLogs } from "./actions/LogActions"

const Logs: React.FC = () => {
    const dispatch = useDispatch();
    const resultdata = useSelector((state: IStoreState) => state.LogReducer)
    const [loading, setLoading] = useState(resultdata.loading)
    const [logs, setLogs] = useState<ILogs[]>([])

    useEffect(() => {
        dispatch(getLogs())
    }, [])

    useEffect(() => {
        if (resultdata) {
            setLogs(resultdata.logs)
        }
    }, [resultdata])

    if (loading) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show</p>) : (
                logs.map((log) => {
                    return <LogItem key={log.id} log={log} />
                })
            )}
        </ul>


    )
}

export default Logs

