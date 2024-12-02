import { useState } from "react";
import { useNavigate } from "react-router";
import { User } from "./client";
import * as client from "./client"
import { Link } from "react-router-dom";

const Signin = () => {
    const [credentials, setCredentials] = useState<User>(
        {_id: "", username: "", password: "", firstName: "", lastName: "", role: "USER", dob: ""}
    );

    const navigate = useNavigate();

    const signin =  async() => {
        await client.signin(credentials);
        // const x = await client.findAllUsers();
        navigate("/Kanbas/Account/Profile");
    };



    return (
        <div style={{padding:10}}>
            <h1>
                Signin
            </h1>
            <input style={{marginTop: 10}} type="text" value={credentials.username} placeholder="username" onChange={(e) => 
                setCredentials({...credentials, username: e.target.value})
            } />
            <br />
            <input style={{marginTop: 10}} type="text" value={credentials.password} placeholder="password" onChange={(e) => 
                setCredentials({...credentials, password: e.target.value})
            } />
            <br />
            <button style={{marginTop: 10}} className="btn btn-success" onClick={signin}> Signin </button>
            <Link style={{marginTop: 10, marginLeft: 10}} to="/Kanbas/Account/Signup" className="btn btn-primary">Signup</Link>
        </div>
    );

};

export default Signin;