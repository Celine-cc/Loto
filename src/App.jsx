import { useState } from "react";
import "./App.css";


function App(){
  //Variables d'état
  const [tirage, setTirage] = useState(0);
  const [historiqueTirage, setHistoriqueTirage] = useState([]);
  const [bigNumber, setBigNumber] = useState(0);

  //Change l'etat du tirage avec variable etat "setTirage"
  const handleButton = () => {
    setTirage(Math.floor(Math.random() * 90));

    // Si tableau à un tirage alors retourne null sinon pousser dans tableau tirage 
    if (historiqueTirage.includes(tirage)) {
      return null;
    } else {
      setHistoriqueTirage([...historiqueTirage, tirage]);
    }

    // Si tableau contient nmb -> lance funtion verification du + grand nmb
    if (historiqueTirage.length > 0) {
      handleBigNumber();
    }
    console.log("historique", historiqueTirage);
  };

  //Boucle sur mon tableau de tirage
  const renderMyTirage = () => {
    if (historiqueTirage.length >= 0) {
      return historiqueTirage.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      });
    }
  };

  //funstion pour trouver le + grand nombre de mon tableau

  const handleBigNumber = () => {
    let largest = 0;

    for (let i = 0; i < historiqueTirage.length; i++) {
      if (largest < historiqueTirage[i]) {
        largest = historiqueTirage[i];
      }
    }
    setBigNumber(largest);
  };

  // Change la variable d'état grace à mon input
  const handleChange = (e) => {
    setBigNumber(e.target.value);
  };

  return (
    <div className="App">
     
     <div className="Title">
      <img src="https://www.centre-commercial.fr/wp-content/uploads/2015/06/logo-carrefour-loto.png" alt="" />
      </div>
      <button onClick={handleButton}>JOUER</button>
      <h5>Le numéro complémentaire est {tirage}</h5>
      <input onChange={handleChange} placeholder="changer mon tirage" />
      {bigNumber > 0 ? (
        <h5>Votre plus gros numéro est le {bigNumber}</h5>
      ) : (
        <h5>Vous n'avez pas de numéros</h5>
      )}
      <div>
        <h5>Mes numéros tirés</h5>
        {renderMyTirage()}
      </div>
    </div>
  );
}

export default App;
