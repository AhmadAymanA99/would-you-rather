import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import LogIn from './LogIn'
import Home from './Home'
import QuestionPage from './QuestionPage'
import NoMatch from './NoMatch'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LogIn} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/question/:id' component={QuestionPage} />
        <Route exact path='/404' component={NoMatch} />
        <Route exact path='/add' component={AddQuestion} />
        <Route exact path='/leaderboard' component={Leaderboard} />
      </Switch>
    </div>
  );
}

export default connect()(App)
