import "./App.css";
import { useState } from "react";

const App = () => {
  // amount input function
  const [inputamount, setinputamount] = useState("");
  const changeamount = (event) => {
    setinputamount(event.target.value);
  };
  // tip input function
  const [inputtip, setinputtip] = useState("");
  const changetip = (event) => {
    setinputtip(event.target.value / 100);
  };

  // person increment function
  const [persons, setpersons] = useState(1);
  const add = () => {
    setpersons(persons + 1);
  };

  // person decrement function
  const sub = () => {
    if (persons < 2) {
      return;
    }
    setpersons(persons - 1);
  };
  // final amount function
  const final = Number(inputamount) + Number(inputtip) * Number(inputamount);
  const [endamount, setendamount] = useState("");
  const result = () => {
    setendamount((final / persons).toFixed(2));
  };

  return (
    <div className="App">
      <div class="king-container">
        <div class="title">Tip Calculator</div>
        <div class="container-top">
          <div class="heading">Total Amount</div>
          <div>
            <input
              onInput={changeamount}
              type="text"
              placeholder="$0.00"
              id="totalbill"
            />
          </div>
          <div class="heading">Tip %</div>
          <div>
            <input
              onInput={changetip}
              type="text"
              placeholder="%0.0"
              id="tip-per"
            />
          </div>
        </div>
        <div class="container-bottom">
          <div class="bottom-left">
            <div class="text">People</div>
            <div class="operations">
              <div class="button">
                <button onClick={add}>+</button>
              </div>
              <div class="n-o-p" id="no-of-ppl">
                {persons}
              </div>
              <div class="button">
                <button onClick={sub}>-</button>
              </div>
            </div>
          </div>
          <div class="bottom-right">
            <div class="text">Total Per Person</div>
            <div class="amount-pp" id="amount-p-p">
              ${endamount}
            </div>
          </div>
        </div>
        <div class="generate-button">
          <button id="generate" onClick={result}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
