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

class AppNav extends Component {
  constructor(props) {
    super(props);
    this._handleSelectedRouteChanged = e => {
      const {value} = e.detail;
      if (this.props.onSelectedRouteChanged && JSON.stringify(value) !== JSON.stringify(this.props.selectedRoute)) {
        this.props.onSelectedRouteChanged(e.detail.value);
      }
    };
  }

  componentDidMount() {
    if (Array.isArray(this.props.items)) {
      this.$appNav.items = this.props.items;
    }
    if (Array.isArray(this.props.selectedRoute)) {
      this.$appNav.selectedRoute = this.props.selectedRoute;
    }

    this.$appNav.addEventListener('selected-route-changed', this._handleSelectedRouteChanged, false);
  }

  componentWillUnmount() {
    this.$appNav.removeEventListener('selected-route-changed', this._handleSelectedRouteChanged);
  }

  componentWillReceiveProps(nextProps) {
    if (Array.isArray(nextProps.items) && this.props.items !== nextProps.items) {
      this.$appNav.items = nextProps.items;
    }
    if (Array.isArray(nextProps.selectedRoute) && this.props.selectedRoute !== nextProps.selectedRoute) {
      this.$appNav.selectedRoute = nextProps.selectedRoute;
    }
  }

  render() {
    return (
      <px-app-nav ref={n => {this.$appNav = n}}></px-app-nav>
    );
  }
}

export default AppNav;
