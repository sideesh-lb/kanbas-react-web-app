import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";

export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div style={{padding: 10}}>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input style={{marginTop: 10}} value={user.username} placeholder="username" onChange={(e) => setUser({
          ...user, username: e.target.value })} />
          <br />
      <input style={{marginTop: 10}} value={user.password} placeholder="password" onChange={(e) => setUser({
          ...user, password: e.target.value })} />
          <br />
      <button style={{marginTop: 10}} className="btn btn-success" onClick={signup}> Signup </button>
      <Link style={{marginTop: 10, marginLeft:10}} to="/Kanbas/Account/Signin" className="btn btn-primary">Signin</Link>
    </div>
  );
}
