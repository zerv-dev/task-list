import { combineReducers } from 'redux'
const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    dueDate: action.dueDate,
                    completed: false
                }
            ]
            case 'DELETE_TASK':
                    let newState = [...state];
                    newState.splice(action.index, 1);
                    return newState;
            case 'FETCH_TASKS':
                return action.tasks
            default:
                return state
    }
}

const userReducer =(state='',action) =>{
    switch(action.type){
        case 'SET_USER':
            return action.email
        case 'SIGN_OUT':
            return ''
        default:
            return state
    }

}

const rootReducer = combineReducers({
    tasks: tasksReducer,
    user: userReducer

})

export default rootReducer