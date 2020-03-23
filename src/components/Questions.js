import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions } from '../actions/questions'
import LoadingBar from 'react-redux-loading'
import ShortQustion from './ShortQustion'

class Questions extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetQuestions())
    }
    _hideUn = () => {
        const unaDiv = document.getElementById('una')
        unaDiv.style.display = "none"

        const aDiv = document.getElementById('a')
        aDiv.style.display = "block"
    }

    _hideA = () => {
        const aDiv = document.getElementById('a')
        aDiv.style.display = "none"

        const unaDiv = document.getElementById('una')
        unaDiv.style.display = "block"

    }

    showUn = (allQuestions, user) => {
        let questions = []
        let userQuestions = Object.keys(user.answers)
        for (let i = 0; i < allQuestions.length; i++) {
            if (userQuestions.includes(allQuestions[i].id)) {
                continue
            }
            else {
                questions.push(allQuestions[i])
            }
        }
        questions.sort((a, b) => {
            return b.timestamp - a.timestamp
        })
        return questions
    }

    showA = (allQuestions, user) => {
        let questions = []
        let userQuestions = Object.keys(user.answers)
        for (let i = 0; i < allQuestions.length; i++) {
            if (userQuestions.includes(allQuestions[i].id)) {
                questions.push(allQuestions[i])
            }
            else {
                continue
            }
        }
        questions.sort((a, b) => {
            return b.timestamp - a.timestamp
        })
        return questions
    }

    mapQuestions = (questions) => {
        const values = Object.values(questions)
        return values
    }

    render() {
        const { questions, user } = this.props
        const questionsData = Object.values(questions)
        let UnAnswered = this.showUn(questionsData, user)
        let Answered = this.showA(questionsData, user)

        return (
            <Fragment>
                <LoadingBar />
                <div className="questions">
                    <button className="btn1" onClick={this._hideA}>Unanswered</button>
                    <button onClick={this._hideUn}>Answered</button>
                    <div id="una" className="unanswered">
                        {
                            UnAnswered !== null
                                ? Object.values(UnAnswered).map(question => <ShortQustion key={question.id} question={question} />)
                                : ""
                        }
                    </div>
                    <div id="a" className="answered">
                        {
                            Answered !== null
                                ? Object.values(Answered).map(question => <ShortQustion key={question.id} question={question} />)
                                : ""
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps({ questions, authedUser }) {
    return {
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Questions)