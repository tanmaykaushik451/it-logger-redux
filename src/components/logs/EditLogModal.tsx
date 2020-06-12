import React, { useState, useEffect } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import { useDispatch, useSelector } from "react-redux"
import { IStoreState } from '../../store/interface/IStoreState'
import { editLog } from './actions/LogActions'
import TechSelectOptions from '../techs/TechSelectOptions'

const EditLogModal: React.FC = () => {
    const resultdata = useSelector((state: IStoreState) => state.LogReducer.current)
    const [attention, setattention] = useState<boolean>(false)
    const [message, setmessage] = useState("")
    const [tech, settech] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (message === '' || tech === '') {
            return M.toast({ html: "Please enter a message and tech" })
        }
        else {
            dispatch(editLog({ attention, tech, message, date: new Date().toDateString(), id: resultdata.id }))
            M.toast({ html: `Log updated by ${tech}` })
            setmessage('');
            settech('');
            setattention(false);
        }
    }

    useEffect(() => {
        if (resultdata) {
            setattention(resultdata.attention)
            setmessage(resultdata.message)
            settech(resultdata.tech)
        }
    }, [resultdata])

    return (
        <div id="edit-log-modal" className="modal" style={{ width: "75%", height: "75%" }}>
            <div className="modal-content center">
                <h4>Enter System Log</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setmessage(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => settech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOptions />
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

export default EditLogModal
