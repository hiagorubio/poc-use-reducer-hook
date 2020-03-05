import React, { useReducer } from 'react';
import './App.css';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'incrementTen': return state + 10;
    case 'decrementTen': return state - 10;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

const ButtonWithReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="item">
        {count}
      </div>
      <div className="App">
        <div className="item">
          <button onClick={() => dispatch('increment')}>+1</button>
        </div>
        <div className="item">
          <button onClick={() => dispatch('decrement')}>-1</button>
        </div>
        <div className="item">
          <button onClick={() => dispatch('incrementTen')}>+10</button>
        </div>
        <div className="item">
          <button onClick={() => dispatch('decrementTen')}>-10</button>
        </div>
        <div className="item">
          <button className="resetBtn" onClick={() => dispatch('reset')}>reset</button>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <ButtonWithReducer />
    </div>
  );
}

export default App;
