import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import { handleAddQuestion } from '../actions/questions'
import { formatQuestion } from '../utils/_DATA'

class AddQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        return: null
    }

    handleChange1 = (e) => {
        const optionOne = e.target.value

        this.setState(() => ({
            optionOne
        }))
    }

    handleChange2 = (e) => {
        const optionTwo = e.target.value

        this.setState(() => ({
            optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        const { dispatch, authedUser } = this.props
        const optionOneText = optionOne
        const optionTwoText = optionTwo
        const author = authedUser
        const formattedQuestion = formatQuestion({ author, optionOneText, optionTwoText })
        dispatch(handleAddQuestion(formattedQuestion))
        this.setState({
            return: true
        })
    }

    render() {
        const user = this.props.users[this.props.authedUser]
        return (
            <div>
                {
                    this.props.authedUser === null
                        ? <Redirect to="/"> {alert("Please, login first.")} </Redirect>
                        :
                        <Fragment>
                            <Nav user={user} />
                            <div className="container1">
                                <h2>Would you Rather?</h2>
                                <form className='new-tweet' onSubmit={this.handleSubmit}>
                                    <input className="inputPoll" type="text" value={this.state.optionOne} placeholder="Option One" onChange={this.handleChange1} />
                                    <br />
                                    <input className="inputPoll" type="text" value={this.state.optionTwo} placeholder="Option Two" onChange={this.handleChange2} />
                                    <br />
                                    <input
                                        className="submitPoll"
                                        type="submit"
                                        disabled={this.state.optionOne === '' || this.state.optionOne === ''}
                                        value="Submit"
                                    />
                                </form>
                            </div>
                            {
                                this.state.return
                                    ? <Redirect to="/home" />
                                    : ""
                            }
                        </Fragment>
                }
            </div>
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

export default connect(mapStateToProps)(AddQuestion)