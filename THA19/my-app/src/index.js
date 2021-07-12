import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import App2 from './App2'

function App(){
  return(<div className="main">
    <App2/>
    <App2/>
    <App2/>
    <App2/>
    <App2/>
    <App2/>
    <App2/>
  </div>
   


)}

ReactDOM.render(<App/> , document.getElementById('root'));
