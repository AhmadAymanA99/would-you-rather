import React, { Component } from 'react'
import a1 from '../utils/a1.jpg'
import a2 from '../utils/a2.png'
import a3 from '../utils/a3.png'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'

class Unanswered extends Component {
    state = {
        option1: null,
        option2: null,
        question: this.props.question
    }

    handleOption1 = async (event) => {
        await this.setState({
            option1: event.target.value
        })
        this.handleOption()
    }

    handleOption2 = async (event) => {
        await this.setState({
            option2: event.target.value
        })
        this.handleOption()
    }

    handleOption = async () => {
        const option1 = document.getElementById('option1')
        const option2 = document.getElementById('option2')

        //console.log(option1, this.state.option1)
        //console.log(option2, this.state.option2)
        option1.disabled = true
        option2.disabled = true

        const { dispatch, question, authedUser } = this.props

        if (this.state.option1) {
            dispatch(handleAnswerQuestion({
                authedUser,
                qid: question.id,
                answer: question.optionOne,
                option: "optionOne"
            }))
        }
        else if (this.state.option2) {
            dispatch(handleAnswerQuestion({
                authedUser,
                qid: question.id,
                answer: question.optionTwo,
                option: "optionTwo"
            }))
        }
    }

    render() {
        const { users } = this.props
        const usersData = Object.values(users)
        const { author, optionOne, optionTwo } = this.state.question
        const user = usersData.filter(u => u.id === author)[0]
        return (
            <div>
                <h2>Would you Rather?</h2>
                <div>
                    <img src={user.avatarURL === "../utils/a1.jpg" ? a1 : user.avatarURL === "../utils/a3.png" ? a3 : a2} alt="avatar" />
                </div>
                <div className="poll">
                    <label>
                        <input type="radio" value="optionOne" onChange={this.handleOption1} id="option1" />
                        {optionOne.text}
                    </label>
                    <br />
                    <label>
                        <input type="radio" value="optionTwo" onChange={this.handleOption2} id="option2" />
                        {optionTwo.text}
                    </label>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser, questions }) {
    return {
        users,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Unanswered)