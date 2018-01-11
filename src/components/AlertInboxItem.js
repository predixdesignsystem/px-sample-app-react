import React from 'react';
import KeyValuePair from '../web-components/KeyValuePair';
import VisRadar from '../web-components/VisRadar';
import VisPolar from '../web-components/VisPolar';
import './AlertInboxItem.css';

export default function AlertsInboxItem(props) {
  if (!props.item) return '';

  return (
    <div className='alerts-inbox-items'>
      <p className='heading--page u-pl u-mt'>{props.item.title}</p>

      <div className='flex flex--wrap flex--justify u-p'>
        <span className='u-1/3-desk-and-up u-pr++ u-mb-'>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</span>
        <div className='u-1/3-desk-and-up u-pr++ u-mb-'>
          <KeyValuePair className='u-mv' valueKey='Alert ID' value={props.item.alertId} size='delta' />
          <KeyValuePair className='u-mv' valueKey='Alert Source' value={props.item.alertSource} size='delta' />
        </div>
        <div className='u-1/3-desk-and-up u-pr++ u-mb-'>
          <KeyValuePair className='u-mv' valueKey='Received Date/Time' value={props.item.receivedDateTime} size='delta' />
          <KeyValuePair className='u-mv' valueKey='Case Number' value={props.item.caseNumber} size='delta' />
        </div>
      </div>

      <div className='u-p'>
        <span className='heading--subsection'>Customer Information</span>
        <div className='flex flex--row flex--wrap flex--justify u-mt'>
          <KeyValuePair className="u-mv" valueKey="Customer" value={props.item.customer} />
          <KeyValuePair className="u-mv" valueKey="Contract Type" value={props.item.serialNumber} />
          <KeyValuePair className="u-mv" valueKey="DLN Type" value={props.item.dlnType} />
          <KeyValuePair className="u-mv" valueKey="Security" value={props.item.model} />
        </div>
      </div>

      <px-card light-card header-text='Evidence 1' icon='px-fea:analytics'>
        <div slot='actions'>
          <px-icon icon='px-utl:app-settings'></px-icon>
        </div>
        <VisRadar width='500' height='500' chartData={props.radarChartData} axes={['axis1','axis2','axis3','axis4','axis5']} seriesKey='TimeStamp' hideAxisRegister />
      </px-card>

      <px-card light-card header-text='Evidence 2' icon='px-fea:analytics'>
        <div slot='actions'>
          <px-icon icon='px-utl:app-settings'></px-icon>
        </div>
        <VisPolar width='500' height='500' chartData={props.polarChartData} seriesConfig={props.polarChartSeriesConfig} hideRegister useDegrees />
      </px-card>
    </div>
  );
}
