import { FETCH_USERS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.option
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.formattedQuestion.author]: {
                    ...state[action.formattedQuestion.author],
                    questions: state[action.formattedQuestion.author].questions.concat([action.formattedQuestion.id])
                  }
            }
        default:
            return state
    }
}