import { FETCH_POSTS,NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts /*whatever data is coming in with the type to the reducers we call payload */
            })
        );
};

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));

};
