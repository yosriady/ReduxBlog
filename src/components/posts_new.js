import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <div>Create Form</div>
    )
  }
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
})(PostsNew);
