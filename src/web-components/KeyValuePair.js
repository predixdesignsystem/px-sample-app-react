import React, { Component } from 'react';

class KeyValuePair extends Component {
  componentDidMount() {
    this.updateProps(this.$keyValuePair, this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateProps(this.$keyValuePair, nextProps);
  }

  updateProps(el, props) {
    el.key = props.valueKey;
    el.value = props.value;
    el.size = props.size;
    el.uom = props.uom;
  }

  render() {
    return (
      <px-key-value-pair ref={n => {this.$keyValuePair = n}}></px-key-value-pair>
    );
  }
}

export default KeyValuePair;
