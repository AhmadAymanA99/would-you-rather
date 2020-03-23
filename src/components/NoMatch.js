import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NoMatch extends Component {
    render() {
        return (
            <div className="container">
                ERROR 404
                <br />
                <Link to="/">
                    <input className='btn' type="submit" value="Go to LogIn"/>
                </Link>
            </div>
        )
    }
}
