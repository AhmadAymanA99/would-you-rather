import React, { Component } from 'react'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'

class QuestionPage extends Component {
    state = {
        question: null
    }
    componentDidMount() {
        this.setState({
            question: Object.values(this.props.questions).filter(q => q.id === this.props.match.params.id)
        })
    }
    render() {
        const { users, authedUser } = this.props
        const usersData = Object.values(users)
        const user = usersData.filter(u => u.id === authedUser)[0]
        const question = this.state.question === null ? null : this.state.question[0]
        //console.log(question)
        //console.log(user)

        return (
            <div>
                {
                    authedUser === null
                        ? <Redirect to="/404" />
                        : <Nav user={user} />
                }
                <div className="container1">
                    {
                        authedUser === null
                            ? <Redirect to="/404"> {alert("Please, login first.")} </Redirect>
                            : question !== null ?
                                (Object.keys(user.answers).includes(question.id)
                                    ? <Answered question={question} user={user} />
                                    : <Unanswered question={question} user={user} />)
                                : ""
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionPage)