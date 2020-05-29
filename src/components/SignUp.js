import React, { useState } from 'react'
import { auth } from "./../config/fire";
import {useDispatch,useSelector} from 'react-redux'
import {setUser} from './../actions/index'
import { Redirect,Link } from "react-router-dom";
function SignUp({history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    let user  = useSelector(state=>state.user)

    const dispatch =  useDispatch();
    function submitForm(event) {
        event.preventDefault()
        if(!email || !password){
            setErrorMessage('All fields needs to be filled out')
        }else{
            auth.createUserWithEmailAndPassword(email, password).then((data) => {
                dispatch(setUser(email))
                history.push('/')
            }).catch((error) => {
                if (error) {
                    setErrorMessage(error.message)
                }
            })
        }
    }
    if (user) {
        return <Redirect to='/login'/>
    }
    return (
        <div className="container mt-5">
            <h1>Create your account</h1>
            <div className="row justify-content-center">
                <form className="loginForm">
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value); setErrorMessage('') }} />
                    </div>
                    <div className="form-group">
                        <label >password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value); setErrorMessage('') }} />
                    </div>
                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                    <button className="btn btn-primary" onClick={(e) => { submitForm(e) }} >Submit</button>
                    <p className="mb-0 text-danger">{errorMessage}</p>
                </form>
            </div>

        </div>
    )
}

export default SignUp