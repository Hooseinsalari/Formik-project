import React, { useState } from 'react';

const SignUpForm = () => {
    const [userData, setUserData] = useState({name:"", email: "", password: ""})

    const inputHandler = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input name="name" type="text" value={userData.name} onChange={inputHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" type="text" value={userData.email} onChange={inputHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="text" value={userData.password} onChange={inputHandler} />
                </div>
                <button>submit</button>
            </form>
           
        </div>
    );
};

export default SignUpForm;