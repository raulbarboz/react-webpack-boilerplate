import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Todos from './components/Todos'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Todos />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
