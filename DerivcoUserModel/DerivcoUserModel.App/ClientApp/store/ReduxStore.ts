import { fetch, addTask } from 'domain-task'
import { Action, Reducer } from 'redux'
import { AppThunkAction } from '.'
import User from '../models/User'

export interface ReduxState {
    users: User[]
}

interface RequestGetUsersAction { type: 'REQUEST_GET_USERS' }
interface ReceiveUsersAction { type: 'RECEIVE_GET_USERS', users: User[] }

interface RequestDeleteUser { type: 'REQUEST_DELETE_USER' }
interface ReceiveDeleteUser { type: 'RECEIVE_DELETE_USER', userId: number }

interface RequestUpdateUser { type: 'REQUEST_UPDATE_USER' }
interface ReceivetUpdateUser { type: 'RECEIVE_UPDATE_USER', user: User }

type KnownAction =
    RequestGetUsersAction
    | ReceiveUsersAction
    | RequestDeleteUser
    | ReceiveDeleteUser
    | RequestUpdateUser
    | ReceivetUpdateUser

export const actionCreators = {
    requestGetUsers: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        let fetchTask = fetch(`api/Users`)
            .then((response: Response) => {
                if (response.status === 200) {
                    (response.json() as Promise<User[]>)
                        .then(data => dispatch({ type: 'RECEIVE_GET_USERS', users: data }))
                } else {
                    console.log("Error while sending request")
                }
            }).catch((error) => console.log(error))

        addTask(fetchTask)
        dispatch({ type: 'REQUEST_GET_USERS' })
    },
    requestUpdateUser: (user: User): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const fetchTask = fetch('api/Users', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
        })
            .then((response: Response) => {
                if (response.status === 200) {
                    (response.json() as Promise<User>)
                        .then(data =>
                            dispatch({
                                type: 'RECEIVE_UPDATE_USER',
                                user: data
                            })
                        )
                } else {
                    console.log("Error while sending request")
                }
            }).catch((error) => console.log(error))

        addTask(fetchTask)
        dispatch({ type: 'REQUEST_UPDATE_USER' })
    },
    requestDeleteUser: (user: User): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const fetchTask = fetch(`api/Users/${user.id}`, {
            method: 'DELETE'
        })
            .then((response: Response) => {
                if (response.status === 204) {
                    dispatch({
                        type: 'RECEIVE_DELETE_USER',
                        userId: user.id
                    })
                } else {
                    console.log("Error while sending request")
                    console.log(response.status)
                }
            }).catch((error) => console.log(error))

        addTask(fetchTask)
        dispatch({ type: 'REQUEST_DELETE_USER' })
    }
}

export const reducer: Reducer<ReduxState> = (state: ReduxState, rawAction: Action) => {

    const action = rawAction as KnownAction

    switch (action.type) {
        case 'REQUEST_GET_USERS':
            return {
                ...state
            }
        case 'RECEIVE_GET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'REQUEST_UPDATE_USER':
            return {
                ...state
            }
        case 'RECEIVE_UPDATE_USER':
            return {
                ...state,
                users: state.users.filter(u => u.id === action.user.id).length === 0
                    ? state.users.concat(action.user) 
                    : state.users.map(u =>
                        u.id === action.user.id
                            ? action.user
                            : u
                        )
            }
        case 'REQUEST_DELETE_USER':
            return {
                ...state
            }
        case 'RECEIVE_DELETE_USER':
            return {
                ...state,
                users: state.users.filter(u => u.id !== action.userId)
            }
        default:
    }

    return state || new Object()
}