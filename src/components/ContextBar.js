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
