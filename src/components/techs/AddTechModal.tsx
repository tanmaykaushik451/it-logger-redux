import React, { useState, ChangeEvent } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import { ITech } from './interface/ITech'
import{useDispatch} from "react-redux"
import { addTech } from './actions/TechActions'

const AddTechModal: React.FC = () => {
const dispatch = useDispatch()
 const [tech,setTech] = useState<ITech>({
     firstName:'',
     lastName:''
 })

 const {firstName,lastName}= tech

 const handleChange =(e:ChangeEvent<HTMLInputElement>) =>{
     setTech({...tech,[e.target.name]:e.target.value})
 }

    const handleSubmit=()=>{
        if(firstName ==='' || lastName===''){
           return M.toast({html:"Please enter a tech"})
        }
        dispatch(addTech({
            firstName,
            lastName
        }))
        M.toast({html:`${firstName} added as Technician`})
      setTech({lastName:'',firstName:'',id:0})
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content center">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={handleChange} />
                        <label htmlFor="firstName" className="active">firstName</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={handleChange} />
                        <label htmlFor="lastName" className="active">lastName</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={handleSubmit} className={  `${firstName !=='' && lastName !=='' && 'modal-close'} waves-effect waves-blue waves-light btn`}>Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal
