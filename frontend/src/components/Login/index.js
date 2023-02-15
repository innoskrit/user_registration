import { React } from "react";
import { useState } from "react";
import styles from './styles.module.css';
import { setAuthenticated } from "../../auth/auth";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [errValue, setErrorValue] = useState("");
    const [visibility, setErrVisibility] = useState("none");


    const handleEmail = (email) => {
        setEmail(email);
        setErrVisibility("hidden");
        setErrorValue("");

    }

    const handlePass = (pass) => {
        setPass(pass);
        setErrVisibility("hidden");
        setErrorValue("");
    }

    let navigate = useNavigate();
    const handleSubmit = async () => {
        if(email === ""){
            setErrorValue("Email is required !");
            setErrVisibility("visible");
        }else if(email !== "" && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
            setErrorValue("Invalid email address !");
            setErrVisibility("visible");
        }else if(password === ""){
            setErrorValue("Password can't be empty !");
            setErrVisibility("visible");
        }else {
            const result = await fetch('http://localhost:3300/user/login', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, 
                    password
                })
            })
            .then(data => data.json());
            console.log(result);
            if(result.msg === "Success"){
                setAuthenticated(email);
                navigate('/');
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
                        <label className={styles.labels}>Email *</label><br />
                        <input 
                            type="email"
                            value={email} 
                            className={styles.inputs} 
                            onChange={(e) => handleEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labels}>Password *</label><br />
                        <input 
                            type="password"
                            value={password} 
                            className={styles.inputs} 
                            onChange={(e) => handlePass(e.target.value)}
                        />
                    </div>
                    <button className={styles.login_btn} onClick={() => handleSubmit()}>Login</button>
                </div>
                <div className={styles.other_section}>

                </div>
            </div>
        </div>
    )
}

export default Login;