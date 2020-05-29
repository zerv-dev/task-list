import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

function Home() {
    let tasks = useSelector(state => state.tasks)
    let user = useSelector(state => state.user)

    if (!user) {
        return <Redirect to='/login' />
    }
    return (

        <div className="container mt-5">
            <h1>A list of your tasks</h1>
            <div className="row justify-content-center">
                <div className="col-10 col-sm-12 col-md-8">
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <TaskItem index={index} id={task.id} title={task.title} description={task.description} dueDate={task.dueDate} />
                        ))
                    ) : (
                            <p className="noTasksMessage"> You don't have any tasks</p>
                        )}

                </div>
            </div>

            <Link className="btn btn-primary" to='/newTask'>New Task</Link>
        </div>

    )
}

export default Home