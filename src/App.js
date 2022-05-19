import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import Number from './components/Number';
import { useState } from 'react';



function App() {
  const [numberCount, setNumber] = useState(0);


  const clicListener= () => {
    setNumber(numberCount+1);
  }
  const clicRestart=() =>{
    setNumber(0);
    
  }


  return (
      <div className="App">
        <div className='logo-container'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <div className='number-box'>
            <Number 
            count= {numberCount}
            />
          </div>
            <Button
            text='clic'
            buttonClass={true}
            clicListener={clicListener}
          />
          
            <Button
            text='restart'
            buttonClass={false}
            clicListener={clicRestart}
          
          />

          
      </div>
    
  );
}

export default App;
