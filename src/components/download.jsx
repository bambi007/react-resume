import React, { Component } from 'react';

export class DownloadButton extends Component {
  render() {
    return (
      <div className="download">
        <button onClick={() => window.print()}>Download PDF</button>
      </div>
    )
  }
}
