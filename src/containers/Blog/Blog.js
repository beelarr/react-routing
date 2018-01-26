import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'


import './Blog.css';

import Posts from '../../containers/Posts/Posts'
import NewPost from "../NewPost/NewPost";
import Post from '../../components/Post/Post';
import FullPost from '../../containers/FullPost/FullPost'


class Blog extends Component {



    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    // activeStyle={{ color: 'purple', textDecoration: 'underline'}}
                                    // activeClasName="my-active"
                                        >Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/new-post">
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/"  exact component={Posts} />
                    <Route path="/new-post"  component={NewPost} />
                    <Route path="/:id"  exact component={FullPost} />
                </Switch>


            </div>
        );
    }
}

export default Blog;
