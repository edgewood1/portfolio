import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Fragment} from 'react';
import {Base64} from 'js-base64';
 
//react-remarkable
 
var showdown = require('showdown')

var converter = new showdown.Converter({metadata: true});
 
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

    // var url = "https://api.github.com/repos/edgewood1/gatsby/contents/markdown/"+id
    var url = "https://api.github.com/repos/edgewood1/portfolio/contents/markdown/"+id
console.log(url)
    axios.get(url)
      .then(res => {
          console.log(res)
          console.log(res.data.name)
          const content = Base64.decode(res.data.content)
        //   var content = base64.decode(this.state.content);
          var title = res.data.name;
          title = title.replace('.md', '').replace('-', ' - ')
        this.setState({content:content, title: title}), ()=> {
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
    // wordWrap: "break-word", 
    // whiteSpace: "pre-line", 
}

    render() {
        
        var render = converter.makeHtml(this.state.content)
        var meta = converter.getMetadata()
        console.log(meta)
        // var render = md.render(this.state.content)
        console.log(render)
        return( 
            <div>
                <div style={this.titleStyle}>
                {this.state.title}
                </div>
            {/* <ReactMarkdown source={this.state.content} /> */}
            <div style={this.textStyle}dangerouslySetInnerHTML={this.createMarkup(render)} />
            {/* {render} */}
            </div>
        )
    }

}

export default Post;