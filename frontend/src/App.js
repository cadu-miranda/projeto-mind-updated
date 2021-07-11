import React from 'react'
import UserTable from '../src/components/UserTable/UserTable'
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from '../../frontend/src/components/SignUp/SignUp'
import Login from '../../frontend/src/components/Login/Login'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/users">
            <Header />
            <UserTable />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Header />
            <SignUp />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
