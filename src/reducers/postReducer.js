/* evaluate any actions that are committed, any actions such as fetch a post or created a new post two actions we will have */

import { FETCH_POSTS,NEW_POST } from '../actions/types';

const initialState = {
    items: [], //represents the post that comes in from our action, action is where will put the fetch request
    item: {} //represents the single post that we add when we get the response back
}

export default function(state = initialState,action) {
    switch (action.type) {
        case FETCH_POSTS: //type is required FETCH_POSTS is coming from postAction.js
            return {
                ...state, // ... (spread operator)
                items: action.payload //payloads coming from postAction.js
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}