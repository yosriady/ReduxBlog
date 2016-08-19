import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsNew from './components/posts_new';
import PostsIndex from './components/posts_index';
import PostsShow from './components/posts_show';

// React router defines mappings between paths and components
// We can nest routes to have more complex urls
// parent components (App) need to reference child components (this.props.children) to know where to render it
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
)
