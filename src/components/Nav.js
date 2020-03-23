import React, { Component, Fragment } from 'react'
import a1 from '../utils/a1.jpg'
import a2 from '../utils/a2.png'
import a3 from '../utils/a3.png'
import { Link, Redirect } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        const { user } = this.props
        return (
            <div>{
                user === undefined
                    ? <Redirect to="/"> {alert("Please, login first.")} </Redirect>
                    : <Fragment>
                        <div className="userCard">
                            <p>{user.name}</p>
                            <img src={user.avatarURL === "../utils/a1.jpg" ? a1 : user.avatarURL === "../utils/a3.png" ? a3 : a2} alt="avatar" />
                        </div>
                        <div className="links">
                            <Link to="/home">Home</Link>
                            <Link to="/add">Add New Poll</Link>
                            <Link to="/leaderboard">Leaderboard</Link>
                            <Link to="/">Log Out</Link>
                        </div>
                    </Fragment>
            }</div>
        )
    }
}
