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
