import React from 'react'

import { deleteTask} from '../actions'
import { useDispatch } from 'react-redux'

function TaskItem(props) {
    let dispatch = useDispatch();
    return (
        <div>
            <div className="taskItem">
                <div className="taskItem__header">
                    < span className="taskItem__title">{props.title}</ span>
                    < span className="taskItem__dueDate">Due date: {props.dueDate}</span>
                </div>
                < div className="taskItem__description">{props.description}
            </div> 
                <div className="taskItem__footer">
                    <button className="btn btn-danger" onClick={()=>dispatch(deleteTask({id:props.id,index:props.index}))} >Delete</button>
                </div>
            </div>
        </div>

    )
}

export default TaskItem
