import React from 'react'
import Home from '../Components/Home';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Header = () => {
    return (
        <div className="text-center">
            <div className="alert alert-primary" role="alert">
                <h1>React Crud</h1>
            </div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/add">
                        <Add />
                    </Route>
                    <Route path="/edit/:id">
                        <Edit />
                    </Route>
                </Switch>
            </Router>
        </div>
        
    )
}

export default Header
