import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Blog extends React.Component {
    state = {
        posts: []
    }
    
    style= {
        fontSize: '20px',
        marginLeft: '10%'
    }

    componentDidMount() {
        var url = 'https://public-api.wordpress.com/rest/v1/sites/code757.wordpress.com/tags/'
        axios.get( url)
        .then(res => {
            console.log(res)
            const posts = res.data.tags;
            const posts2=posts.map(elements => 
                {return elements.name})
            this.setState({ posts: posts2 });
            console.log(posts2)
            console.log(this.state.posts)
        });
    }

    render() {
        return (
        <div>
        <ul style = {this.style}>
            <li> Blog Categories </li>
            {this.state.posts.map(post =>
                <li>
                    <Link id={post} to={`/postSet/${post}`}>
                        {post}
                    </Link>
                </li>
            )}
        </ul>
        </div>
        );
    }
}

export default Blog;