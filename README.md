# Quicksand React

## Example
Usage is simple, just wrap your application with the Provider component and pass the store to that. All components inside the Provider will be have the store available at this.props.store.
```
import React from 'react';
import ReactDOM from 'react-dom';
import Quicksand from 'quicksandjs'
import {Provider} from 'quicksandreact'
import App from './app';

ReactDOM.render(<Provider store={new Quicksand()}><App /></Provider>, document.getElementById('root'));
```
