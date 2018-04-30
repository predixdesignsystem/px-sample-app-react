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

class ContextBrowser extends Component {
  constructor(props) {
    super(props);

    this._handleItemSelected = e => {
      const {item} = e.detail;
      if (this.props.onSelectedChanged && item !== this.props.selected) {
        console.log('selected');
        this.props.onSelectedChanged(item);
      }
    };
  }

  componentDidMount() {
    this.$browser.openTrigger = this.$trigger;
    this.$browser.addEventListener('px-app-asset-selected', this._handleItemSelected, false);
    this.updateProps(this.$browser, this.props);
  }

  componentWillUnmount() {
    this.$browser.removeEventListener('px-app-asset-selected', this._handleItemSelected);
  }

  componentWillReceiveProps(nextProps) {
    this.updateProps(this.$browser, nextProps);
  }

  updateProps(el, props) {
    el.items = props.items;
    el.selected = props.selected;
  }

  render() {
    return (
      <div>
        <px-context-browser-trigger ref={n => {this.$trigger = n}}></px-context-browser-trigger>
        <px-context-browser ref={n => {this.$browser = n}}></px-context-browser>
      </div>
    );
  }
}

export default ContextBrowser;
