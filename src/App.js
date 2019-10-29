import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'; //provider react component the glue for react & redux

import Posts from './components/Posts';
import PostForm from './components/Postform';
import { createStore,applyMiddleware } from 'redux';

const store = createStore(() => [],{},applyMiddleware())

function App() {
  return (
    <Provider store={ store }> //store holds the state
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <PostForm />
          <hr />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
