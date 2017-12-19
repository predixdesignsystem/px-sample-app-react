import React, { Component } from 'react';
import Inbox from './components/Inbox';
import { alertItems } from './AppData.js';
import './AlertsView.css';

class AlertsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }

  render() {
    return (
      <div className="alerts">
        <Inbox
            listItems={alertItems}
            onSelectedItemRefChanged={selectedItem => this.setState({selectedItem})}>
          <div className="alerts-detail">
            {this.state.selectedItem ? this.state.selectedItem.title : ''}
          </div>
        </Inbox>
      </div>
    );
  }
}

export default AlertsView;
