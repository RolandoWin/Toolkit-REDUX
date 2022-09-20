import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { TodoApp } from './TodoApp';
import App from './App';
import './index.css';
//import { DragonBallApp } from './DragonBallApp';
import { PokemonApp } from './PokemonApp';

import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={ store }>
        {/* <App /> */}
        {/* <PokemonApp /> */}
        <TodoApp />
      </Provider>    
  </React.StrictMode>
)
