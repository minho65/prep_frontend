import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [userId, setUserId] = useState("");

    const onChange = (e) => {
        setUserId(e.target.value);
    };
    
    return (
        <div>
            <input onChange={onChange} value={userId} />
            <div>
                <Link to={`/home/${userId}`} > 
                    <button> 로그인 </button>
                </Link>
            </div> 
        </div>
    );
}

export default Login;