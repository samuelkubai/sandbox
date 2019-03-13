import React, { Component } from 'react';

import './layout-styles.css';

export default class Layout extends Component {
  render() {
    const { main, footer, sidebar } = this.props;
    return (
      <div className="c-layout">
        <div className="c-layout__main-area">
          { main }
          <div className="c-layout__footer">
            { footer }
          </div>
        </div>
        <div className="c-layout__sidebar">
          { sidebar }
        </div>
      </div>
    )
  }
}
