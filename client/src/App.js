import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/layouts/Navbar";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Alerts from "../src/components/layouts/Alerts";
import PrivateRoute from "../src/components/routing/PrivateRoute";

import ContactState from "../src/context/contact/ContactState";
import AuthState from "../src/context/auth/AuthState";
import AlertState from "../src/context/alert//AlertState";

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    return (
        <AuthState>
            <ContactState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />
                            <div className="container">
                                <Alerts />
                                <Switch>
                                    <PrivateRoute
                                        exact
                                        path="/"
                                        component={Home}
                                    />
                                    <Route
                                        exact
                                        path="/about"
                                        component={About}
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        component={Login}
                                    />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </ContactState>
        </AuthState>
    );
}

export default App;
