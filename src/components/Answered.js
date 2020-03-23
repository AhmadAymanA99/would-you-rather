import React, { Component } from 'react'
import a1 from '../utils/a1.jpg'
import a2 from '../utils/a2.png'
import a3 from '../utils/a3.png'
import { connect } from 'react-redux'

class Answered extends Component {
    render() {
        const { question, users, authedUser, questions } = this.props
        const currentQuestion = Object.values(questions).filter(q => q.id === question.id)[0]
        //console.log("currentQuestion", currentQuestion)
        const usersData = Object.values(users)
        const { author, optionOne, optionTwo } = currentQuestion
        const user = usersData.filter(u => u.id === author)[0]
        const total = optionOne.votes.length + optionTwo.votes.length
        return (
            <div className="pollContainer">
                <h2>Would you Rather?</h2>
                <div className="imgPoll">
                    <img src={user.avatarURL === "../utils/a1.jpg" ? a1 : user.avatarURL === "../utils/a3.png" ? a3 : a2} alt="avatar" />
                </div>
                <div className="poll">
                    <label>
                        <input type="radio" value={optionOne.text} checked={optionOne.votes.includes(authedUser)} disabled />
                        {optionOne.text}
                        <div className="votes">
                            <p> {"Votes: " + optionOne.votes.length}</p>
                            <p> {"Percentage: " + (optionOne.votes.length / total) * 100 + "%"}</p>
                        </div>
                    </label>
                    <br />
                    <label>
                        <input type="radio" value={optionTwo.text} checked={optionTwo.votes.includes(authedUser)} disabled />
                        {optionTwo.text}
                        <div className="votes">
                            <p>{"Votes: " + optionTwo.votes.length} </p>
                            <p>{"Percentage: " + (optionTwo.votes.length / total) * 100 + "%"} </p>
                        </div>
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

export default connect(mapStateToProps)(Answered)