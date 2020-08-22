import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//This file basically is telling the DOM to render the App
//component in the element with id of “root”. Our App component
//will contain all of our components that we are going to build.