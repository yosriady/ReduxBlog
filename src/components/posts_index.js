import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount() { // lifecycle method when component is rendered for the first time
    this.props.fetchPosts();
  }

  render() {
    return (
        <div>
            <div className="text-xs-right">
              <Link to="/posts/new" className="btn btn-primary">
                Add a Post
              </Link>
            </div>
            Blog posts
        </div>
    );
  }
}

export default connect(null, {fetchPosts})(PostIndex);
