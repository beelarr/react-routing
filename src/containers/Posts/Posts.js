import React, { Component } from 'react';

import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';



class Posts extends Component {

    state = {
        posts: [],

    };

    postSelectedHandler = (id) => {
      this.props.history.push('/posts/' + id )
    };

    componentDidMount () {
        console.log('props', this.props);
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Bryon'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }



    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                </section>

            </div>
        )
    }
}

export default Posts;
