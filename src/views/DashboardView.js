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
import ContextBar from '../components/ContextBar';
import DashboardGauge from '../components/DashboardGauge';
import KeyValuePair from '../web-components/KeyValuePair';
import { contextItems } from '../SampleData.js';
import './DashboardView.css';

const getRandomNumBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getFakeDashboardData = () => ({
  alerts: getRandomNumBetween(0, 100),
  connectedDevices: getRandomNumBetween(500, 800),
  utilization: getRandomNumBetween(0, 100),
  faults: getRandomNumBetween(5, 20),
  output: getRandomNumBetween(0, 100),
  measurements: [
    getRandomNumBetween(0, 100),
    getRandomNumBetween(0, 100),
    getRandomNumBetween(0, 100),
    getRandomNumBetween(0, 100)
  ]
});

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: contextItems[1].children[2].children[5].children[1].children[2],
      sampleData: getFakeDashboardData()
    };
  }

  _selectedItemChanged(selectedItem) {
    const sampleData = getFakeDashboardData();
    this.setState({ selectedItem, sampleData });
  }

  render() {
    const selectedName = this.state.selectedItem ? this.state.selectedItem.label : 'No Item Selected';

    return (
      <div className='dashboard'>
        <ContextBar items={contextItems} selectedItem={this.state.selectedItem} onSelectedItemChanged={this._selectedItemChanged.bind(this)} />

        <div className='dashboard-spine u-p'>
          <p className='heading--page u-mt-- u-mb'>{selectedName}</p>

          <div className='flex flex--wrap flex--justify'>
            <KeyValuePair className='u-p' valueKey='Total alerts' value={this.state.sampleData.alerts} size='beta' />
            <KeyValuePair className='u-p' valueKey='Connected devices' value={this.state.sampleData.connectedDevices} size='beta' />
            <KeyValuePair className='u-p' valueKey='Utilization' value={this.state.sampleData.utilization} uom='%' size='beta' />
            <KeyValuePair className='u-p' valueKey='Faults' value={this.state.sampleData.faults} size='beta' />
            <KeyValuePair className='u-p' valueKey='Output' value={this.state.sampleData.output} uom='MW' size='beta' />
          </div>
        </div>

        <px-card header-text="Productivity Details" icon="px-fea:alerts">
          <div slot='actions'>
            <px-icon icon='px-utl:app-settings'></px-icon>
          </div>
          <div className='flex flex--wrap flex--justify'>
            <DashboardGauge
              title='Measured Output'
              value={this.state.sampleData.measurements[0]}
              unit='MW'
              chartData={'[[112,57,53,122,128,120,56]]'}
              chartColors={'["#8098FF"]'}
              gaugeColor='#8098FF' />
            <DashboardGauge
              title='Measured Output'
              value={this.state.sampleData.measurements[1]}
              unit='MW'
              chartData={'[[53,122,128,120,56,94,102]]'}
              chartColors={'["#7BA662"]'}
              gaugeColor='#7BA662' />
            <DashboardGauge
              title='Measured Output'
              value={this.state.sampleData.measurements[2]}
              unit='MW'
              chartData={'[[53,122,128,120,56,94,102]]'}
              chartColors={'["#E081C9"]'}
              gaugeColor='#E081C9' />
            <DashboardGauge
              title='Measured Output'
              value={this.state.sampleData.measurements[3]}
              unit='MW'
              chartData={'[[53,122,128,120,56,94,102]]'}
              chartColors={'["#E9A24B"]'}
              gaugeColor='#E9A24B' />
          </div>
        </px-card>
      </div>
    );
  }
}

export default DashboardView;
