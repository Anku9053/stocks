import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <Provider store={store}>
    {/* <ChakraProvider> */}

    <Router>
      <App />
    </Router>
    {/* </ChakraProvider> */}
  </Provider>,
  document.getElementById('root')
);
