import { _getQuestions, _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function addQuestion(formattedQuestion) {
    return {
        type: ADD_QUESTION,
        formattedQuestion
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        dispatch(addQuestion(question))

        return _saveQuestion(question)
            .catch(e => {
                console.warn("Error in handleAnswerQuestion:", e)
                alert('Thier was an error answering the poll, Try Again.')
            })
    }
}

export function handleGetQuestions() {
    return (dispatch) => {
        dispatch(showLoading())
        return _getQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function answerQuestion({ authedUser, qid, answer, option }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer,
        option
    }
}