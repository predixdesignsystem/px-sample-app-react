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

import React from 'react';
import KeyValuePair from '../web-components/KeyValuePair';
import './DashboardGauge.css';

export default function DashboardGauge(props) {
  return (
    <div className='dashboard-gauge-container flex flex--col'>
      <div className='flex u-mb'>
        <KeyValuePair valueKey={props.title} value={props.value} uom={props.unit} size='delta' />
        <span className='u-ml++'>
          <px-simple-bar-chart className='u-ml++' width='100' height='50' chart-data={props.chartData} colors={props.chartColors}></px-simple-bar-chart>
        </span>
      </div>
      <px-gauge style={{'--px-gauge-fill-normal-color': props.gaugeColor||'inherit'}} value={props.value} unit="%" normal='[[0,100]]' bar-width='20'></px-gauge>
    </div>
  );
}
