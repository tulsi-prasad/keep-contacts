import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/layouts/Navbar";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";

import ContactState from "../src/context/contact/ContactState";
import AuthState from "../src/context/auth/AuthState";

function App() {
    return (
        <AuthState>
            <ContactState>
                <Router>
                    <Fragment>
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </ContactState>
        </AuthState>
    );
}

export default App;
