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

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemRef: null
    };

    this._handleSelectedItemRefChanged = e => {
      const {value} = e.detail;
      if (this.props.onSelectedItemRefChanged && this.selectedItemRef !== value) {
        this.props.onSelectedItemRefChanged(value);
      }
    };
  }

  componentDidMount() {
    this.$inbox.addEventListener('selected-item-ref-changed', this._handleSelectedItemRefChanged, false);
    this.$inbox.listItems = this.props.listItems;
  }

  componentWillUnmount() {
    this.$inbox.removeEventListener('selected-item-ref-changed', this._handleSelectedItemRefChanged);
  }

  componentWillReceiveProps(nextProps) {
    if (Array.isArray(nextProps.listItems) && this.props.listItems !== nextProps.listItems) {
      this.$inbox.listItems = nextProps.listItems;
    }
  }

  render() {
    return (
      <px-inbox ref={n => {this.$inbox = n}}>
        {this.props.children}
      </px-inbox>
    );
  }
}

export default Inbox;
