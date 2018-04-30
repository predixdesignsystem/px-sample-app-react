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

class BrandingBar extends Component {
  componentDidMount() {
    this.$brandingBar.applicationTitle = this.props.applicationTitle;
  }

  componentWillReceiveProps(nextProps) {
    this.$brandingBar.applicationTitle = nextProps.applicationTitle;
  }

  render() {
    return (
      <px-branding-bar ref={n => {this.$brandingBar = n}}></px-branding-bar>
    );
  }
}

export default BrandingBar;
