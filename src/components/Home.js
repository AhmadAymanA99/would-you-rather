import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import Questions from './Questions'

class Home extends Component {
    state = {
        currentUser: this.props.users[this.props.authedUser]
    }
    render() {
        return (
            <div>
                {this.state.currentUser === undefined
                    ? <Redirect to="/"> {alert("Please, login first.")} </Redirect>
                    : <Fragment>
                        <Nav user={this.state.currentUser} />

                        <Questions user={this.state.currentUser} />
                    </Fragment>
                }

            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Home)