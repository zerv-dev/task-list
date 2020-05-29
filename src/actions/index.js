
import { database } from './../config/fire'

let tasksCollection = database.collection("tasks");

export const setUser = (payload) => {
    return {
        type: 'SET_USER',
        email: payload
    }
}

export const signOut = ()=>{
    return {
        type: 'SIGN_OUT',
    }
}
export const addTask = ({ title, description, dueDate, user }) => async (dispatch) => {
    tasksCollection.add({
        title,
        description,
        dueDate,
        user,
        completed: false
    }).then((document) => {
        dispatch({
            type: 'ADD_TASK',
            title,
            description,
            dueDate,
            id: document.id,
            user
        }
        )
    });
}

export const fetchTasks = (payload) => async (dispatch) => {
    tasksCollection.where('user', '==', payload).get().then(function (querySnapshot) {
        let tasks = []
        querySnapshot.forEach((snapshot) => {
            let { description, title, dueDate, completed, user } = snapshot.data();
            let id = snapshot.id
            tasks.push({ id, description, title, dueDate, completed, user })
        });
        dispatch({
            type: 'FETCH_TASKS',
            tasks,
        })
    });


}

export const deleteTask = (payload) => async (dispatch) => {
    tasksCollection.doc(payload.id).delete()
    dispatch({
        type: 'DELETE_TASK',
        index: payload.index
    })
}