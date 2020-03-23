import React, { Component, Fragment } from 'react'
import { handleAuthedUser } from '../actions/authedUser'
import { handleFetchUsers } from '../actions/users'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LogIn extends Component {
    state = {
        choice: null
    }
    _logIn = () => {
        this.props.dispatch(handleAuthedUser(this.state.choice))
    }

    _alrt = () => {
        alert('Please, Choose Username')
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            choice: e.target.value
        })
    }

    componentDidMount() {
        this.props.dispatch(handleFetchUsers())
    }
    render() {
        const { users } = this.props
        const usersData = Object.values(users)
        return (
            <Fragment>
                <LoadingBar style={{ backgroundColor: 'green', height: '4px' }} />
                <div className='container'>
                    <br />
                    <select className="input1" defaultValue="a" onChange={this.handleChange}>
                        <option disabled value="a">--Username--</option>
                        {
                            usersData.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                        }
                    </select>
                    <br />
                    {
                        this.state.choice === null
                            ? <input className='btn' type="submit" value="Log In" onClick={this._alrt} />
                            : <Link to="home">
                                <input className='btn' type="submit" value="Log In" onClick={this._logIn} />
                            </Link>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LogIn)