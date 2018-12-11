import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Fragment} from 'react';
import {Base64} from 'js-base64';
import ReactMarkdown from 'react-markdown';
var Remarkable = require('remarkable');
var md = new Remarkable({
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // Autoconvert URL-like text to links
  
    // Enable some language-neutral replacement + quotes beautification
    typographer:  false,
  
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',
  
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed
    highlight: function (/*str, lang*/) { return ''; }
  });

class Post extends React.Component {
  state = {
    content: '', 
    title: ''
  }

  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    // return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    return e.childNodes[0].nodeValue
    
  }
 createMarkup(input) {
    return {__html: input};
  }

  

  componentDidMount() {
    const {id} = this.props.match.params;

    console.log(id);
  
    var hits = [];

    var url = "https://api.github.com/repos/edgewood1/gatsby/contents/markdown/"+id
console.log(url)
    axios.get(url)
      .then(res => {
          console.log(res)
          console.log(res.data.title)
          const content = Base64.decode(res.data.content)
        //   var content = base64.decode(this.state.content);
 
        this.setState({content:content, title: res.data.title}), ()=> {
            console.log(this.state.content)
        }

       } )

  }

titleStyle= {
    fontSize: '150%',
    // marginLeft: '10%',
    textAlign: 'center',
    fontWeight: 'bold'
}
textStyle= {
    fontSize: '130%',
    marginLeft: '5%',
    marginRight: '5%',
    fontWeight: 540,
    fontFamily: "Garamond",
    wordWrap: "break-word", 
    whiteSpace: "pre-line", 
}

    render() {
        var render = md.render(this.state.content)
        console.log(render)
        return( 
            <div style={this.textStyle}>
            {/* <ReactMarkdown source={this.state.content} /> */}
            <div style={this.textStyle}dangerouslySetInnerHTML={this.createMarkup(render)} />
            {/* {render} */}
            </div>
        )
    }

}

export default Post;