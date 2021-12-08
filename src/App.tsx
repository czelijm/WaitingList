
import { Global,css } from '@emotion/react';
import React from 'react';
import './App.css';
import ListContainer from './components/list-container/list.container';
import { Colors } from './constants/colors';

function App() {
  return (
    <div className="App">
      <Global styles={css` body { padding:5%;  background-color:${Colors.DARK_BLUE};}; `}/>
      <ListContainer/>
    </div>
  );
}

export default App;
