import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import a1 from '../utils/a1.jpg'
import a2 from '../utils/a2.png'
import a3 from '../utils/a3.png'

class Leaderboard extends Component {
    render() {
        const user = this.props.users[this.props.authedUser]
        const users = this.props.users
        const usersData = Object.values(users)
        return (
            <div>
                {
                    this.props.authedUser === null
                        ? <Redirect to="/"> {alert("Please, login first.")} </Redirect>
                        : <Fragment>
                            <Nav user={user} />
                            <div className="container2">
                                <ol>
                                    {
                                        usersData
                                            .sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length))
                                            .map(u =>
                                                <li key={u.id} className="leaderEntery">
                                                    <div className="container3">
                                                        <h3>{u.name}</h3>
                                                        <img src={u.avatarURL === "../utils/a1.jpg" ? a1 : u.avatarURL === "../utils/a3.png" ? a3 : a2} alt="avatar" />
                                                        <p>Questions Asked: {u.questions.length}</p>
                                                        <p>Questions Answered: {Object.keys(u.answers).length}</p>
                                                    </div>
                                                </li>)
                                    }
                                </ol>
                            </div>
                        </Fragment>
                }</div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Leaderboard)