import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./App.css"
const El = () => {
    return <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>

};

ReactDOM.render(<El /> , document.getElementById('root'));
