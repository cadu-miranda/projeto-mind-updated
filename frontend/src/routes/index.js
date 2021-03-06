import { isAuthenticated } from '../services/auth'
import React from 'react'
import Users from '../pages/Users'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

export default function App() {

    const PrivateRoute = ({ component: Component, ...rest }) => {

        return (
            <Route {...rest} render={props => (
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            )} />
        )
    }

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"><Redirect to="/login" /></Route>
                    <Route exact path="/signup" exact component={SignUp} />
                    <Route exact path="/login" exact component={Login} />
                    <PrivateRoute exact path="/users" exact component={Users} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
