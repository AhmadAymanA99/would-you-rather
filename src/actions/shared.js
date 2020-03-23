import { answerQuestion } from './questions'
//import { answerQuestionUser } from './users'
import { _saveQuestionAnswer } from '../utils/_DATA'

export function handleAnswerQuestion(question) {
    return (dispatch) => {
        dispatch(answerQuestion(question))
        //dispatch(answerQuestionUser(question))

        return _saveQuestionAnswer(question)
            .catch(e => {
                console.warn("Error in handleAnswerQuestion:", e)
                alert('Thier was an error answering the poll, Try Again.')
            })
    }
}