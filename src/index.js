import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/state";
import App from './App';

const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.AddPost.bind(store)} updatePost={store.UpdatePost.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.Subscribe(renderEntireTree)
renderEntireTree(store.GetState());

