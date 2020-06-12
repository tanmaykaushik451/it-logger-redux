import React, { useRef, ChangeEvent } from 'react'
import {useDispatch} from "react-redux"
import { serachLogs } from './logs/actions/LogActions'

const Searchbar: React.FC = () => {
    const dispatch=useDispatch()

    const text = useRef("")

    const handleChange=()=>{
        //@ts-ignore    
        dispatch(serachLogs(text.current.value))
    }
    return (
        <div className="mb-3">
            <nav>
                <div className="nav-wrapper blue">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="Search Logs......"
                            //@ts-ignore
                             ref={text} onChange={handleChange} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Searchbar
