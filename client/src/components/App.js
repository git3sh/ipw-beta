import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2> Thanks For LOgin  </h2>
const SurveyNew = () => <h2>SurveyNew</h2>



class App extends Component {
   componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      // always good when working with materialize or bootstrap to have the main div have a classname Container.
      // this materialize and bootstrap assume this so without it the elements are right up against the edge of the screen
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);