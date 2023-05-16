import React from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png'


function App() {

    const [countFruit, setCountFruit]= React.useState(0);
    const decreaseCount= () => {
        if(countFruit > 0) {
            setCountFruit(countFruit - 1);
        }
    };
    const increaseCount= () => {
        setCountFruit(countFruit + 1)
    };

  return (
    <>
      <img src={logo} alt= "dit is het logon van het bedrijf"/>
        <fieldset>
            <label>
                <h2>Aardbeien</h2>
                <div

                    id="bestelling">
                    <button onClick={decreaseCount}>-</button>
                    <input
                        type="number"
                        value={countFruit}
                        onChange={(e) => setCountFruit(e.target.value)}/>
                    <button onClick={increaseCount}>+</button>
                </div>

            </label>
        </fieldset>
        <fieldset>
            <label>
                <h2>Bananen</h2>
                <div
                    id="bestelling">
                    <button onClick={decreaseCount}>-</button>
                    <input
                        type="number"
                        value={countFruit}
                        onChange={(e) => setCountFruit(e.target.value)}/>
                    <button onClick={increaseCount}>+</button>
                </div>
            </label>
        </fieldset>
        <fieldset>
            <label>
                <h2> Appels</h2>
                <div
                    id="bestelling">
                    <button onClick={decreaseCount}>-</button>
                    <input
                        type="number"
                        value={countFruit}
                        onChange={(e) => setCountFruit(e.target.value)}/>
                    <button onClick={increaseCount}>+</button>
                </div>
            </label>
        </fieldset>
      <fieldset>
            <label>
                <h2> Kiwi's</h2>
                <div
                    id="bestelling">
                    <button onClick={decreaseCount}>-</button>
                    <input
                        type="number"
                        value={countFruit}
                        onChange={(e) => setCountFruit(e.target.value)}/>
                    <button onClick={increaseCount}>+</button>
                </div>
            </label>
        </fieldset>

      <fieldset>
         <label> reset </label>
      </fieldset>
    </>
  );
}

export default App;
