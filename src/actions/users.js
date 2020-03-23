import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers } from '../utils/_DATA'

export const FETCH_USERS = 'FETCH_USERS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function fetchUsers(users) {
    return {
        type: FETCH_USERS,
        users
    }
}

export function handleFetchUsers() {
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers()
            .then((users) => {
                dispatch(fetchUsers(users))
                dispatch(hideLoading())
            })
    }
}

export function answerQuestionUser({ authedUser, qid, answer, option }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer,
        option
    }
}