import React, { useState, useEffect } from "react"
import ForgotPasswordComponent from "../ForgotPasswrodComponent/ForgotPasswordComponent"
import { validateInput } from "../../functions"

import "./Login.css"

const Login = () => {

    const backendUrl = 'https://heeko-backend.herokuapp.com'
    const [inputData, setInputData] = useState({
        emailOrPhone: "",
        password: ""
    })
    const [authDetails, setAuthDetails] = useState({})
    const [forgotPassword, setForgotPassword] = useState(false)

    const handleInputChangeLogin = e => {
        let name = e.target.name
        let value = e.target.value

        setInputData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const handleLoginUser = () => {

        // console.log(38,validateInput(inputData.emailOrPhone))

        let inputValidation = validateInput(inputData.emailOrPhone)

        if(inputValidation.output) {
            fetch(backendUrl+'/api/login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    input: inputData.emailOrPhone,
                    password: inputData.password,
                    isAnEmail: inputValidation.isAnEmail
                }),
            })
            .then(data => data.json())
            .then(json => {
                setAuthDetails(json)
                alert("Login successfull")

            })
        } else {
            alert("Wrong email/phone Number")
        }
    }

    const handleForgotPassword = value => {
        setForgotPassword(value)
    }


    return (
        <div className="loginRoot">
            <div className={"loginBlock " + (forgotPassword ? "dimBackground" : "")} >
                <div className="loginForm">
                    <input type="text" name="emailOrPhone" placeholder="Email address or phone number" value={inputData.emailOrPhone} onChange={handleInputChangeLogin}/>
                    <input type="password" name="password" placeholder="Password" value={inputData.password} onChange={handleInputChangeLogin}/>
                    <button className="loginButton" onClick={handleLoginUser}>Log In</button>
                    <p className="forgotPasswordLink" onClick={() => handleForgotPassword(true)}>Forgotten password?</p>
                </div>
                <div className="seperator">
                    <p></p>
                </div>
                <div>
                    <button className="createAccountButton">Create new account</button>
                </div>
            </div>
            { forgotPassword && <ForgotPasswordComponent handleForgotPassword={handleForgotPassword}/> }
        </div>
    )
}

export default Login;