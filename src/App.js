import React, { Component } from 'react';
import { HashRouter, withRouter, Route } from 'react-router-dom';

import BrandingBar from './web-components/BrandingBar';
import AppNav from './web-components/AppNav';
import AlertsView from './views/AlertsView';
import DashboardView from './views/DashboardView';

import { navItems } from './SampleData';
import './App.css';

class AppBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationTitle: 'Predix Sample Application',
      navItems,
      navRoute: null
    };
  }

  componentWillMount() {
    if (this.props.location.pathname) {
      this.syncURLToRoute(this.props.location.pathname);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.syncURLToRoute(nextProps.location.pathname);
    }
  }

  syncURLToRoute(url) {
    const {navRoute} = window.PxApp.RouteHelpers.decodePath(url, { navRoute: true });
    this.setState({navRoute});
  }

  syncRouteToURL(route) {
    const pathname = `/${route.join('/')}`;
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <div className="app-header">
            <BrandingBar
              applicationTitle={this.state.applicationTitle} />
            <AppNav
              items={this.state.navItems}
              selectedRoute={this.state.navRoute}
              onSelectedRouteChanged={route => this.syncRouteToURL(route)} />
          </div>
          <div className="app-content">
            <Route path="/dashboard" component={DashboardView}/>
            <Route path="/alerts" component={AlertsView}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

const AppWithRouter = withRouter(AppBase);

const App = () => (
  <HashRouter>
    <AppWithRouter />
  </HashRouter>
);

export default App;
