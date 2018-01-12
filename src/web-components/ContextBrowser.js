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
