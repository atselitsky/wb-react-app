import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './app/App';
import store from './store'
import reportWebVitals from './reportWebVitals';

//const store: Store<ChannelState, ChannelAction> & {
//  dispatch: DispatchType,
//} = createStore(reducer, applyMiddleware(thunk))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
