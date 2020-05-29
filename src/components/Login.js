import React, { useState } from 'react'
import { auth } from "./../config/fire";
import {setUser,fetchTasks} from './../actions/index'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect ,Link} from "react-router-dom";
function Login({history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    let user  = useSelector(state=>state.user)
    let dispatch = useDispatch();
    function submitForm(event) {
        event.preventDefault()
        if(!email || !password){
            setErrorMessage('All fields needs to be filled out')
        }else{
            auth.signInWithEmailAndPassword(email, password).then((data) => {
                dispatch(setUser(email))
                dispatch(fetchTasks(email))
                history.push('/')
            }).catch((error) => {
                if (error) {
                    setErrorMessage(error.message)
                }
            })
        }
    }
    if (user) {
        return <Redirect to='/'/>
    }
    return (
        <div className="container mt-5">
        <h1>Log into your account</h1>
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
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    <button className="btn btn-primary" onClick={(e) => { submitForm(e) }} >Submit</button>
                        <p className="mb-0 text-danger">{errorMessage}</p>
                </form>
            </div>

        </div>
    )
}

export default Login