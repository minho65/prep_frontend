import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";

const Login = () => {
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setUserId(e.target.value);
    };
    
    return (
        <div className="Login_back">
            <MyHeader headText={"Login"}/>

            <div class="Login">
                <h2>Welcome back,</h2>
                <label>
                    <span>USERID</span>
                    <input type="userId" onChange={onChange} value={userId} />
                </label>

                <MyButton text={"Login"} onClick={()=>navigate('/home/'+userId)} type="Login"/>
            </div>
            
        </div>
    );
}

export default Login;