import React, { Component } from 'react';

class VisPolar extends Component {
  componentDidMount() {
    this.updateProps(this.$visPolar, this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateProps(this.$visPolar, nextProps);
  }

  updateProps(el, props) {
    el.width = props.width;
    el.height = props.height;
    el.chartData = props.chartData;
    el.seriesConfig = props.seriesConfig;
    el.hideRegister = props.hideRegister;
    el.useDegrees = props.useDegrees;
  }

  render() {
    return (
      <px-vis-polar ref={n => {this.$visPolar = n}}></px-vis-polar>
    );
  }
}

export default VisPolar;
