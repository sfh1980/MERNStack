import React, { useState } from 'react'


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2) {
            setFirstNameError("At least 2 characters required in First Name");
        } else {
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2) {
            setLastNameError("At least 2 characters required in Last Name");
        } else {
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5) {
            setEmailError("At least 5 characters required in Email");
        } else {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password) {
            setConfirmPasswordError("PASSWORDS DO NOT MATCH");
        } else {
            setConfirmPasswordError("")
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        
        console.log("Welcome", newUser);
    };
    return (
        <div>
            <div>
                <form onSubmit={createUser}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" onChange={handleFirstName} value={firstName} />
                        {
                            firstNameError ?
                                <p style={{ color: 'red' }}>{firstNameError}</p> :
                                <p></p>
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" onChange={handleLastName} value={lastName} />
                        {
                            lastNameError ?
                                <p style={{ color: 'red' }}>{lastNameError}</p> :
                                <p></p>
                        }
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" onChange={handleEmail} value={email}/>
                        {
                            emailError ?
                                <p style={{ color: 'red' }}>{emailError}</p> :
                                <p></p>
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" onChange={handlePassword} value={password} />
                        {
                            passwordError ?
                                <p style={{ color: 'red' }}>{passwordError}</p> :
                                <p></p>
                        }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="text" onChange={handleConfirmPassword} value={confirmPassword} />
                        {
                            confirmPasswordError ?
                                <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                                <p></p>
                        }
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
            <div>
                Your Form Data
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default UserForm