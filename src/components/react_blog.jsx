import React from 'react'

import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
 
class React_blog extends React.PureComponent {
    state = {
        hits: []
    }

    componentDidMount() {
        
        var url =
        "https://api.github.com/repos/edgewood1/gatsby/contents/markdown";
        
         
        axios.get(url)
            .then(results => {
                results = results.data
                console.log(results)
                var hits = results.map((element) => {
                    console.log(element.name)
                    return element.name
                })
                this.setState({hits: hits}, ()=> {
                    console.log(this.state.hits)
                })
             
        })


    }
/// end of compDidMount
    
style= {
    fontSize: '20px',
    marginLeft: '10%'
}

    render() {
        return (
                        <div>
                <h5> Blog Categories</h5>>
                <div>
                    <ul style={this.style}>
                        {this.state.hits.map((elem) => 
                         
                            (
                                <li>        
                                    <Link  
                                        to={`/react_post/${elem}`}>{elem}
                                    </Link>
                                </li>
                            )
                            )
                        }
                    
                    </ul>
                </div>
            </div>
    
        )
    }

}


export default React_blog;