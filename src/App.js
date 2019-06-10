import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from 'react-redux';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';
import store from './Store/Store';
import 'bootstrap/dist/css/bootstrap.min.css';






class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding = 'Accounts' />
            <div className = 'container'>
            <Switch>
              <Route exact path = '/' component = { Contacts} />
              <Route exact path = '/contact/add' component = { AddContact} />
              <Route exact path = '/contact/edit/:id' component = { EditContact } />
              <Route exact path = '/about' component = { About } />
              <Route  component = { NotFound } />




            </Switch>
            {/* <AddContact /> */}

            {/* <Contacts /> */}

          </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
