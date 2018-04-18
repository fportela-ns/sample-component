import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src'

const App = () => (
    <div>
        <h2>You can see it's working</h2>
        <MyComponent />
    </div>
);

render( <App/>, document.getElementById('root') );