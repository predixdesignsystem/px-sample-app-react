import React, { Component } from 'react';

class VisRadar extends Component {
  componentDidMount() {
    this.updateProps(this.$visRadar, this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateProps(this.$visRadar, nextProps);
  }

  updateProps(el, props) {
    el.width = props.width;
    el.height = props.height;
    el.axes = props.axes;
    el.chartData = props.chartData;
    el.seriesKey = props.seriesKey;
    el.hideAxisRegister = props.hideAxisRegister;
  }

  render() {
    return (
      <px-vis-radar ref={n => {this.$visRadar = n}}></px-vis-radar>
    );
  }
}

export default VisRadar;
