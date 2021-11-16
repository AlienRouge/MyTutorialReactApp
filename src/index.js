import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/ReduxStore";
import App from './App';

const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state)
})
renderEntireTree(store.getState());

