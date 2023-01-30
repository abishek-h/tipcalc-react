import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Calc />
    </div>
  );
};

const Calc = () => {
  return (
    <body>
      <div class="king-container">
        <div class="title">Bill Calculator</div>
        <div class="container-top">
          <div class="heading">Bill Total</div>
          <div>
            <input type="text" placeholder="$0.00" id="totalbill" />
          </div>
          <div class="heading">Tip %</div>
          <div>
            <input type="text" placeholder="%0.0" id="tip-per" />
          </div>
        </div>
        <div class="container-bottom">
          <div class="bottom-left">
            <div class="text">People</div>
            <div class="operations">
              <div class="button">
                <button>+</button>
              </div>
              <div class="n-o-p" id="no-of-ppl">
                1
              </div>
              <div class="button">
                <button>-</button>
              </div>
            </div>
          </div>
          <div class="bottom-right">
            <div class="text">Total Per Person</div>
            <div class="amount-pp" id="amount-p-p">
              $0.0
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
