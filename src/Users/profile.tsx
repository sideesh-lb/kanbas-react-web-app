import React, { useEffect, useState } from 'react';
import * as client from "./client";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState({username: "", password: "",
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });

    const navigate =  useNavigate();

    const fetchProfile = async () => {
        const account: any = await client.profile();
        setProfile(account);
    }

    const save = async () => {
        await client.updateUser(profile);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin"); 
    }

    useEffect(() => {
        fetchProfile();
    }, []);

  return (
    <div style={{padding:10}}>
        <h1>Profile</h1>
        {profile && (
            <div>
            <button className='btn btn-primary' onClick={save}>Save</button>
            <Link style={{marginLeft:10}} to="/Kanbas/Account/Admin/Users"
                className="btn btn-warning">
                Users
            </Link>
            <br />
            <button style={{marginTop:10}} className="btn btn-danger"onClick={signout}>
            Signout
            </button>
             <br />
            <input style={{marginTop: 10}} value={profile.username} onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })}/>
              <br />
            <input style={{marginTop: 10}} value={profile.password} onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })}/>
              <br />
            <input style={{marginTop: 10}} value={profile.firstName} onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })}/>
              <br />
            <input style={{marginTop: 10}} value={profile.lastName} onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })}/>
              <br />
            <input style={{marginTop: 10}} value={String(profile.dob)} type="date" onChange={(e) =>
              setProfile({ ...profile, dob: e.target.value })}/>
              <br />
            <input style={{marginTop: 10}} value={profile.email} onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })}/>
              <br />
            <select style={{marginTop: 10}} onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
        </div>  
        )}
    </div>
  )
}

export default Profile