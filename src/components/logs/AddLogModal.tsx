import React, { useState } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import { addLog } from './actions/LogActions'
import { useDispatch } from "react-redux"
import TechSelectOptions from '../techs/TechSelectOptions'

const AddLogModal: React.FC = () => {
    const dispatch = useDispatch();
    const [attention, setattention] = useState<boolean>(false)
    const [message, setmessage] = useState("")
    const [tech, settech] = useState("")

    const handleSubmit = () => {
        if (message === '' || tech === '') {
            return M.toast({ html: "Please enter a message and tech" })
        }
        dispatch(addLog({ message, attention, tech, date: new Date().toDateString() }))
        M.toast({ html: "Log Added" })
        setattention(false)
        setmessage('')
        settech('')
    }

    return (
        <div id="add-log-modal" className="modal" style={{ width: "75%", height: "75%" }}>
            <div className="modal-content center">
                <h4>Enter System Log</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setmessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => settech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOptions/>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} onChange={() => setattention(!attention)} />
                                <span>Need attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={handleSubmit} className={`${message !== '' && tech !== '' && 'modal-close'} waves-effect waves-blue waves-light btn`}>Enter</a>
            </div>
        </div>
    )
}

export default AddLogModal
