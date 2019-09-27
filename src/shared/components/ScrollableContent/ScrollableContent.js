import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class ScrollableContent extends Component {
  render() {
    return (
      <Scrollbars autoHide>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default ScrollableContent;