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

class VisPolar extends Component {
  componentDidMount() {
    this.updateProps(this.$visPolar, this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateProps(this.$visPolar, nextProps);
  }

  updateProps(el, props) {
    el.width = props.width;
    el.height = props.height;
    el.chartData = props.chartData;
    el.seriesConfig = props.seriesConfig;
    el.hideRegister = props.hideRegister;
    el.useDegrees = props.useDegrees;
  }

  render() {
    return (
      <px-vis-polar ref={n => {this.$visPolar = n}}></px-vis-polar>
    );
  }
}

export default VisPolar;
