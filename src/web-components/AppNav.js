import React, { Component } from 'react';

class AppNav extends Component {
  constructor(props) {
    super(props);
    this._handleSelectedRouteChanged = e => {
      const {value} = e.detail;
      if (this.props.onSelectedRouteChanged && JSON.stringify(value) !== JSON.stringify(this.props.selectedRoute)) {
        this.props.onSelectedRouteChanged(e.detail.value);
      }
    };
  }

  componentDidMount() {
    if (Array.isArray(this.props.items)) {
      this.$appNav.items = this.props.items;
    }
    if (Array.isArray(this.props.selectedRoute)) {
      this.$appNav.selectedRoute = this.props.selectedRoute;
    }

    this.$appNav.addEventListener('selected-route-changed', this._handleSelectedRouteChanged, false);
  }

  componentWillUnmount() {
    this.$appNav.removeEventListener('selected-route-changed', this._handleSelectedRouteChanged);
  }

  componentWillReceiveProps(nextProps) {
    if (Array.isArray(nextProps.items) && this.props.items !== nextProps.items) {
      this.$appNav.items = nextProps.items;
    }
    if (Array.isArray(nextProps.selectedRoute) && this.props.selectedRoute !== nextProps.selectedRoute) {
      this.$appNav.selectedRoute = nextProps.selectedRoute;
    }
  }

  render() {
    return (
      <px-app-nav ref={n => {this.$appNav = n}}></px-app-nav>
    );
  }
}

export default AppNav;
