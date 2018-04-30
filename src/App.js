/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
