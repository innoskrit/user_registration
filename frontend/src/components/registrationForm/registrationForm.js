import React, {useState,setState} from 'react';
import axios from 'axios';

import './style.css'
function RegistrationForm() {
    
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone,setPhone] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }

    }

    const handleSubmit  = () => {
        console.log(name, email, phone);
        let body = { 
            "name": name,
            "email": email,
            "phone": phone

        };
        axios.post('http://127.0.0.1:3300/user', body).then((res)=> {
            console.log(res);
        }).catch((err)=> {
            console.log("Error " + err);
        });
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="name">First Name </label>
                    <input className="form__input" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" placeholder="First Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="phone">
                    <label className="form__label" for="phone">Phone</label>
                    <input className="form__input" type="number" id="phone" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm
