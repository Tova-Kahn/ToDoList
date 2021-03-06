import {useDispatch} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import React, {useCallback} from 'react';
import * as actions from './store/actions';

export const App = () => {
    const dispatch = useDispatch();

    const onclick = useCallback(()=>{
        dispatch(actions.init.request());
    },[dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button onClick={onclick}>Click</button>
                <b>Hello!</b>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}