import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import "./App.css";
import SignIn from "./components/auth/SignIn";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/project/:id' component={ProjectDetails} />
            <Route exact path='/signin' component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
