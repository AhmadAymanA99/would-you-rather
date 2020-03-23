import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import a1 from '../utils/a1.jpg'
import a2 from '../utils/a2.png'
import a3 from '../utils/a3.png'

class ShortQustion extends Component {
    render() {
        const { users } = this.props
        const usersData = Object.values(users)
        const { author, optionOne, id } = this.props.question
        const user = usersData.filter(u => u.id === author)[0]
        //console.log(this.props)
        //console.log(user)
        return (
            <div className="shortQ">
                <h3>{user.name} asks:</h3>
                <img src={user.avatarURL === "../utils/a1.jpg" ? a1 : user.avatarURL === "../utils/a3.png" ? a3 : a2} alt="avatar" />
                <div className="content">
                    <p>..{optionOne.text.slice(0, 11)}...</p>
                    <Link to={`/question/${id}`}><button>View Poll</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(ShortQustion)