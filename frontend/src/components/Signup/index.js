import { React } from "react";
import { useState } from "react";
import styles from './styles.module.css';
import { useNavigate} from "react-router-dom";

function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [phone, setPhone] = useState("");
    const [errValue, setErrorValue] = useState("");
    const [visibility, setErrVisibility] = useState("none");


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrVisibility("hidden");
        setErrorValue("");

    }

    const handlePass = (e) => {
        setPass(e.target.value);
        setErrVisibility("hidden");
        setErrorValue("");
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
        setErrVisibility("hidden");
        setErrorValue("");
    }

    const handleName = (e) => {
        setName(e.target.value);
        setErrVisibility("hidden");
        setErrorValue("");
    }

    let navigate = useNavigate();
    const handleSubmit = async () => {
        if(name === ""){
            setErrorValue("Name is required !");
            setErrVisibility("visible");
        }else if(email === ""){
            setErrorValue("Email is required !");
            setErrVisibility("visible");
        }else if(email !== "" && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
            setErrorValue("Invalid email address !");
            setErrVisibility("visible");
        }else if(password === ""){
            setErrorValue("Password can't be empty !");
            setErrVisibility("visible");
        }else {
            const result = await fetch('http://localhost:3300/user/signup', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email, 
                    password,
                    phone
                })
            })
            .then(data => data.json())
            .catch(err => {
                return null;
            })
            console.log(result, "aaa");
            if(result !== null){
                navigate("/login");
            }
        }
        
    }

    return(
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.form_header}>
                    <p>Login</p>
                </div>
                <div className={styles.input_section}>
                    <p 
                        className={styles.error}
                        styles={{visibility: visibility}}
                    >
                        {errValue}
                    </p>
                    <div>
                        <label className={styles.labels}>Name *</label><br />
                        <input 
                            type="text"
                            value={name} 
                            className={styles.inputs} 
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <label className={styles.labels}>Email *</label><br />
                        <input 
                            type="email"
                            value={email} 
                            className={styles.inputs} 
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <label className={styles.labels}>Phone *</label><br />
                        <input 
                            type="text"
                            value={phone} 
                            className={styles.inputs} 
                            onChange={handlePhone}
                        />
                    </div>
                    <div>
                        <label className={styles.labels}>Password *</label><br />
                        <input 
                            type="password"
                            value={password} 
                            className={styles.inputs} 
                            onChange={handlePass}
                        />
                    </div>
                    <button className={styles.login_btn} onClick={handleSubmit}>Login</button>
                </div>
                <div className={styles.other_section}>

                </div>
            </div>
        </div>
    )
}

export default Signup;