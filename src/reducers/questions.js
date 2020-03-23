import { GET_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.option]: {
                        ...state[action.qid][action.option],
                        votes: state[action.qid][action.option].votes.concat([action.authedUser]),
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.formattedQuestion.id]: action.formattedQuestion
            }
        default:
            return state
    }
}