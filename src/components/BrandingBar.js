import React, { Component } from 'react';

class BrandingBar extends Component {
  componentDidMount() {
    this.$brandingBar.applicationTitle = this.props.applicationTitle;
  }

  componentWillReceiveProps(nextProps) {
    this.$brandingBar.applicationTitle = nextProps.applicationTitle;
  }

  render() {
    return (
      <px-branding-bar ref={n => {this.$brandingBar = n}}></px-branding-bar>
    );
  }
}

export default BrandingBar;
