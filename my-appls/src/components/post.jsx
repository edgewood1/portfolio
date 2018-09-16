import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Fragment} from 'react';

class Post extends React.Component {
  state = {
    content: ''
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
  
    var hits = [];

    var url = 'https://public-api.wordpress.com/rest/v1.1/sites/code757.wordpress.com/posts/'+id
console.log(url)
    axios.get(url)
      .then(res => {
          console.log(res.data.content)
          const content = res.data.content
 
        this.setState({content:content}), ()=> {
            console.log(this.state.content)
        }

       } )

  }

 style= {
    fontSize: '20px',
    marginLeft: '10%'
}

    render() {
   
        return <div style={this.style}dangerouslySetInnerHTML={this.createMarkup(this.state.content)} />;
    }

}

export default Post;