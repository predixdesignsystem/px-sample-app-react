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
import ContextBrowser from '../web-components/ContextBrowser';
import './ContextBar.css';

export default function ContextBar(props) {
  return (
    <div className='context-bar shadow-navigation u-ph'>
      <ContextBrowser items={props.items} selected={props.selectedItem} onSelectedChanged={props.onSelectedItemChanged} />
    </div>
  );
}
