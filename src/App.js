import React, {useState} from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png'
import CountingFruit from "./components/CountingFruit";
import InputField from "./components/InputField";




function App() {

    const [strawberry, setCountStrawberry]=useState(0);
    const [bananas, setCountBananas]= useState(0);
    const [apples, setCountApples]= useState(0);
    const [kiwis, setCountKiwis] = useState(0);

    const [firstname, setFirstName]= useState('');
    const [lastname, setLastName]= useState('');
    const [age, setAge]=useState('');
    const [zipcode,setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency]= useState('week');
    const [deliveryTime, setDeliveryTime]= useState('daytime');
    const [remark, setRemark]= useState('');
    const [agreeTerms, setAgreeTerms]= useState(false)


    function handleReset(){
        setCountStrawberry(0);
        setCountBananas(0);
        setCountApples(0);
        setCountKiwis(0);
    }

  return (
    <>


      <img src={logo} alt= "dit is het logon van het bedrijf"/>
        <section className="fruit-counters">
            <article>
                <h2>{"Aardbeien"}</h2>
                <CountingFruit
                    count={strawberry}
                    setCount={setCountStrawberry}
                    />
            </article>
        </section>

        <section className="fruit-counters">
            <article>
                <h2>{"Bananen"}</h2>
                <CountingFruit
                    count={bananas}
                    setCount={setCountBananas}
                    />
            </article>
        </section>

        <section className= "fruit-counters">
            <article>
                <h2> {"Appels"}</h2>
                <CountingFruit
                    count={apples}
                    setCount={setCountApples}
                    />
            </article>
        </section>

      <section className="fruit-counters">
            <article>
                <h2> {"Kiwi's"}</h2>
                <CountingFruit
                    count={kiwis}
                    setCount={setCountKiwis}
                    />
            </article>
        </section>

      <fieldset>
         <label>
         <button type="button" onClick={handleReset}>Reset</button>
         </label>
      </fieldset>

      <form>
          <div className="form-row">
            <div className="form-group">
                <label htmlFor="name">Voornaam</label>
                <input type="text" id="name" name="name" required/>
            </div>

            <div className="form-group">
                <label htmlFor="lastname">Achternaam</label>
                <input type="text" id="lastName" name="lastName" required/>
            </div>

            <div className="form-group">
              <label htmlFor="age">Leeftijd</label>
                <input type="number" id="age" name="age" required/>
            </div>


            <div className="form-group">
                <label htmlFor="zipcode">Postcode</label>
                <input type="text" id="zipcode" name="zipcode" required pattern="[0-9]"/>
            </div>
          </div>

          <div>
            <p>Bezorgfrequentie</p>
              <label htmlFor="frequency">
                <select>
                  <input type="text" id="frequency" required/>
                  <option value="weekly">Iedere week</option>
                  <option value="biweekly">Om de week</option>
                  <option value="montly">Iedere maand</option>
                </select>
              </label>
          </div>

          <label>
              <input type="radio" name="daytime"/>Overdag
              <input type="radio" name="nighttime"/>Avond
          </label>

          <label>
            <textarea
            id="message-field"
            rows="4"
            cols="50"
            placeholder="Laat hier jouw bericht achter"
            >Opmerkingen</textarea>

          </label>

          <div className="agreewith">
              <input type="checkbox" id="myCheckbox" name="myCheckbox"/>
                <p>Ik ga akkoord met de voorwaarden</p>
              <label htmlFor="myCheckbox"></label>
          </div>

          <button>
            <input type="submit" value="verzend"/>
          </button>
      </form>
        </>
  );
}

export default App;
