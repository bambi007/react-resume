import React, { Component } from 'react';

export class DownloadButton extends Component {
  render() {
    return (
      <div className="download">
        <a href="javascript:window.print()" alt='download PDF'>Download PDF</a>
      </div>
    )
  }
}
