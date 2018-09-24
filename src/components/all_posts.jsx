import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

// function skip(id) {
//     console.log("skipped", id)

 

//     }
// }

class Blog extends React.Component {
  state = {
    hits: []
  }
 
 componentWillMount() {
    const {id} = this.props.match.params;
    console.log(id)
        if (id == 'React') {
            console.log("hhhiiiittt")
            var url = '/go'
            axios.get(url).then(function(res) {
                console.log("finished")
            })
        }
   
    }

  componentDidMount() {
    const {id} = this.props.match.params;
    console.log(id)
    var new_id = id.toString()
    // myStr=myStr.toLowerCase();
    new_id=new_id.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"");   //this one
    new_id=new_id.replace(/\s+/g, "-");
    var newer_id = new_id.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"-")
            // if (id == 'React') {
            //     skip(id)
            // }
    var hits = [];
    // 'https://public-api.wordpress.com/rest/v1/sites/code757.wordpress.com/posts/'

    var url = 
    'https://public-api.wordpress.com/rest/v1.1/sites/code757.wordpress.com/posts/?tag='+newer_id
console.log(url)
    axios.get(url)
      .then(res => {
          var posts = res.data.posts;
          console.log(posts)
        //   var posts = decodeURIComponent(posts)
          var hits = posts.map((element) => {
              console.log(element.tags)
              if (element.tags){
                  console.log(element.tags[id].name)
            //   console.log(element.tags[id].ID, id)
            
              if (element.tags[id].name == id) {
                  console.log(element)
              
                //   console.log(element.tags[id].name)
                    return(element);
                    
              } 
            }
         
          } 
        )
        console.log(hits)
        // console.log(JSON.parse(hits))
        this.setState({hits: hits}, ()=> {
            console.log(this.state.hits)
        })
        
        //  


       } )

  }

 style= {
    fontSize: '20px',
    marginLeft: '10%'
}

    render() {
    
        if (this.state.hits.length>0){
            console.log(Object.keys(this.state.hits[0]))
            //   console.log(JSON.parse(this.state.))
            console.log(this.state.hits[0]["title"])
            var title = this.state.hits[0]["title"]
        }
        
        // var keys = Object.keys(this.state.hits[0])
   
        // console.log(keys)
        return (
            <div>
                <h5> Blog Categories</h5>>
                <div>
                    <ul style={this.style}>
                        {this.state.hits.map((elem) => 
                         
                            (
                                <li>        
                                    <Link  
                                        to={`/one_post/${elem["ID"]}`}>{elem["title"]}
                                    </Link>
                                </li>
                            )
                            )
                        }
                    
                    </ul>
                </div>
            </div>
        );
    }
}

export default Blog;

