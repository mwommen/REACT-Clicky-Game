import React from 'react';
import './App.css';
import Image from './components/Image';
import _ from 'lodash';

const App = () => {
  const numbers = [1,2,3,4,5,6, 7,8,9];
  return (
    <div className="App">
      {numbers.map(url => <Image key={_.uniqueId('image-')} url={url} />)}
    </div>
  );
}

export default App;
