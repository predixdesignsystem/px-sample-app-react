import React, { Component } from 'react';
import Inbox from '../web-components/Inbox';
import AlertInboxItem from '../components/AlertInboxItem';
import { alertItems, alertRadarChartData, alertPolarChartData, alertPolarSeriesConfig } from '../SampleData.js';
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
        <Inbox listItems={alertItems} onSelectedItemRefChanged={selectedItem => this.setState({selectedItem})}>
          <div className="alerts-detail">
            <AlertInboxItem
              item={this.state.selectedItem}
              radarChartData={alertRadarChartData}
              polarChartData={alertPolarChartData}
              polarChartSeriesConfig={alertPolarSeriesConfig} />
          </div>
        </Inbox>
      </div>
    );
  }
}

export default AlertsView;
