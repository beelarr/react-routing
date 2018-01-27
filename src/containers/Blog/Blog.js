import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'


import './Blog.css';

import Posts from '../../containers/Posts/Posts'
import NewPost from "../NewPost/NewPost";


class Blog extends Component {



    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                    // activeStyle={{ color: 'purple', textDecoration: 'underline'}}
                                    // activeClasName="my-active"
                                        >Posts</NavLink>
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
                    <Route path="/new-post"  component={NewPost} />
                    <Route path="/posts"  component={Posts} />
                    {/*<Redirect from="/" to="/posts"/>*/}
                    {/*<Route path="/"  component={Posts} />*/}


                </Switch>


            </div>
        );
    }
}

export default Blog;
