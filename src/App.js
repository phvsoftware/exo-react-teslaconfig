import React, { useState } from "react";
import "./App.css";

function App() {
  const tabBase = [90700, 106700];
  const tabOption = [0, 1000];
  const [base, setBase] = useState(0);
  const [option, setOption] = useState(0);

  return (
    <div className="App">
      <h1>Tesla Config</h1>
      <h2>Sélectionnez votre véhicule</h2>

      {base === 0 && <div className="option selected">Grande Autonomie : 90 700€</div>}
      {base !== 0 && (
        <div
          className="option"
          onClick={() => {
            setBase(0);
          }}
        >
          Grande Autonomie : 90 700€
        </div>
      )}
      {base === 1 && <div className="option selected">Performance : 106 700€</div>}
      {base !== 1 && (
        <div
          className="option"
          onClick={() => {
            setBase(1);
          }}
        >
          Performance : 106 700€
        </div>
      )}

      <h2>Sélectionnez la couleur</h2>
      {option === 0 && <div className="option selected">Blanc nacré multicouches : 0€</div>}
      {option !== 0 && (
        <div
          className="option"
          onClick={() => {
            setOption(0);
          }}
        >
          Blanc nacré multicouches : 0€
        </div>
      )}

      {option === 1 && <div className="option selected">Noir uni : 1 000€</div>}
      {option !== 1 && (
        <div
          className="option"
          onClick={() => {
            setOption(1);
          }}
        >
          Noir uni : 1 000€
        </div>
      )}

      <div className="total">
        <h1>{tabBase[base] + tabOption[option]} €</h1>
        <button className="achat">Acheter</button>
      </div>
    </div>
  );
}

export default App;
