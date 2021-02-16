import React, { useState, useEffect } from "react"
import { validateInput } from "../../functions"
import "./ForgotPasswordComponent.css"

const ForgotPasswordComponent = ({ handleForgotPassword }) => {

    const backendUrl = 'https://heeko-backend.herokuapp.com/'
    const [emailOrPhone, setemailOrPhone] = useState("")

    const [retrievedData, setRetrievedData] = useState({})

    const handleEmailChange = e => {
        let value = e.target.value
        setemailOrPhone(value)
    }

    const handleRetrievePassword = () => {
        let inputValid = validateInput(emailOrPhone) 

        if(inputValid.output) {
            fetch(backendUrl+"/api/forgotPassword", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    input: emailOrPhone,
                    isAnEmail: inputValid.isAnEmail
                })
            }).then(data => data.json())
            .then(json => setRetrievedData(json.output))
        } else {
            alert("Enter proper email/phone")
        }
    }

    const handleClose = value => {
        handleForgotPassword(value)
        setRetrievedData({})
    }
    
    return (
        <div className="forgotPasswordRoot">
            <div>
                <div className="forgotPasswordBlock">
                    <p className="forgotPopupClose" onClick={() => handleClose(false)}>Close</p>
                    <p>Enter your email id</p>
                    <input type="text" name="emailOrPhone" placeholder="Email address or phone number" value={emailOrPhone} onChange={handleEmailChange}/> 
                    <button className="retrieveButton" onClick={handleRetrievePassword}>Retrieve Password</button>  
                </div>
            </div>
            { Object.keys(retrievedData).length>0 && 
                <div className="retrievedDetails">
                    { retrievedData.email.length > 0 ?
                        <div>
                            <p className="retrievedDetailsHeader">Details below:</p>
                            <p><span className="retrieveDetailsSpan">Email:</span> {retrievedData.email}</p>
                            <p><span className="retrieveDetailsSpan">Phone:</span> {retrievedData.phoneNumber}</p>
                            <p><span className="retrieveDetailsSpan">Password:</span> {retrievedData.password}</p>
                        </div>
                        :
                        <p>No Details matched</p>
                    }
                </div>
            }
        </div>
    )
}

export default ForgotPasswordComponent;