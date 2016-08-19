import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
      this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
        .then(() => {
            // blog post successfully created, redirect to index
            this.context.router.push("/");
        });
    }

    render() {
        const {post} = this.props;
        if(!post) {
            return (<div>Loading...</div>);
        }

        return (
            <div>
                <Link to="/">Back</Link>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete</button>

                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
