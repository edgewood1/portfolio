 
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

// import { Document, Page } from 'react-pdf';
// import { Document } from 'react-pdf/dist/entry.webpack';
import url from '../resume/developer_resume.pdf';
class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

styles = {
    margin: '0 auto'
}

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
   
    return (
             <div style={this.styles}>
    <div className ="container"> 
        <div className ="row"> 
        <div className ="center-align">
  
        <Document 
          file={url}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
  export default Resume;