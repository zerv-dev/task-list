import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from './../actions/'
import { Redirect } from "react-router-dom";
function NewTask(props) {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    let user = useSelector(state => state.user)

    let dispatch = useDispatch();
    let submitTask = (event) => {
        let date = new Date(dueDate)
        let reformattedDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
        event.preventDefault()
        if (!title || !description || !dueDate) {
            setErrorMessage('All fields needs to be filled out')
        } else {
            let payload = {
                title: title,
                description: description,
                dueDate: reformattedDate,
                user
            }
            dispatch(addTask(payload)).then(() => {
                props.history.push('/')
            })
        }

    }
    if (!user) {
        return <Redirect to='/login'/>
    }
    return (
        <div className="container mt-5">
            <h1>Create a new task</h1>
            <div className="row justify-content-center">
                <form className="newTaskForm">
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label >Due Date</label>
                        <input type="date" value={dueDate} onChange={(e) => { setDueDate(e.target.value) }} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control newTaskForm__description" />
                    </div>
                    <button className="btn btn-primary" onClick={submitTask} >Create</button>
                        <p className="mb-0 text-danger">{errorMessage}</p>

                </form>
            </div>

        </div>
    )
}

export default NewTask