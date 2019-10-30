import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //connects your components to the redux store that was provided by the Provider component
import { fetchPosts } from '../actions/postActions';


class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() { //the reason for props is because our mapStateToProps fuction we map the items from the state to the post property
    const postItems = this.props.posts.map(post => (
      <div key={ post.id }>
        <h3> { post.title }</h3>
        <p> { post.body }</p>
      </div>
    ));
    return (
      <div>
        <h1>Post Johnson</h1>
        { postItems }
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

/*
get the new items from the state we will be using map state to props
get the state from redux and map it to properties of the component,
then we can use that inside of our components
*/

const mapStateToProps = state => ({
  posts: state.posts.items //posts comes from our reducers/index.js file that's what we set as our postReducer
})                        //what do we want from our reducers we want the items, that comes from postReducers.js file
//that's where we want to put in our post properties of this component 

export default connect(mapStateToProps,{ fetchPosts })(Posts);

/* mapping our state to our properties,
  fetchPosts calls the fetch request from postActions.js
*/