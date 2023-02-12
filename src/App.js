import './App.css';
import { useState, useEffect, createContext } from 'react';
import Button from './components/Button/Button';
import PersonalisedText from './components/PersonalisedText/PersonalisedText';
import Card from './components/Card/Card';
import ButtonsGroup from './components/ButtonsGroup/ButtonsGroup';
import Botton2 from './components/Button/Bottone2/Bottone2';

//useContext per creare una theme per i bottoni

export const ButtonThemeContext = createContext("light");

function App() {

  // Passare funzioni on click senza argomenti
  const name = "Pippo"
  const sayCiao = () => {
    alert("Ciao, " + name + "!");
  }
  // Passare funzioni on click con argomenti
  const sayAddio = (givenName) => {
    alert(`Addio, ${givenName}!`);
  }

  //Contare usando viriabile Let o useState
  let numberLet = 0;
  let [numberState, setNumberState] = useState(0);

  const counterLet = () => {
    numberLet++
    alert(numberLet);
  }

  const counterState = () => {
    setNumberState(numberState + 1);
  }

  //useEffect ad ogni renderizzazione o al primo render
  useEffect(() => console.log("useEffect sempre"));

  useEffect(() => console.log("solo al primo render"), []);

  //useEffect al cambio di uno stato
  let [riferimentoEffect, setRiferimentoEffect] = useState("Tick");

  useEffect(() => console.log(`stato cambiato: ${numberState}`), [numberState]);

  const cambiaRiferimento = () => {
    riferimentoEffect === "Tick" ? setRiferimentoEffect("Tock") : setRiferimentoEffect("Tick");
  };

  //Creo una Theme variabile per UseContext
  let [buttonTheme, setButtonTheme] = useState("dark");
  const changeTheme = () => {
    buttonTheme === "dark" ? setButtonTheme("light") : setButtonTheme("dark");
  }

  return (
    <div className="App">
      <h1>Esempi React</h1> {/*Elementi JSX semplici */}
      <h2>Le basi:</h2>
      <p>Benvenuto {name}!</p> {/*inserire variabili JS in JSX con le graffe*/}
      {name === "Pippo" && <p>Benvenuto solo se sei {name}!</p>} {/*inserire logiche JS in JSX*/}

      <h2>Componenti personalizzati:</h2>
      <Button />  {/*componente personalizzato senza prop */}
      <Botton2 />

      <PersonalisedText personalizzata={name}>Testo personalizzato di: </PersonalisedText>  {/*componente personalizzato con prop */}
      <Button btnOnClick={sayCiao}>ciao</Button> {/*elemento con funzione onclick */}
      <Button btnOnClick={() => sayAddio(name)}>addio</Button> {/*funzione onclick con parametri */}

      <h2>Usare useState:</h2>
      <Button btnOnClick={counterLet}>Count usando let: {numberLet}</Button>
      <Button btnOnClick={counterState}>Count usando State: {numberState}</Button>

      <h2>Usare useEffect:</h2>
      <Button btnOnClick={cambiaRiferimento}>Fai tick-tock con useEffect</Button>

      <br /><br />
      <h2>Componenti Nidificati:</h2>
      <div className='d-flex justify-content-center'>
        <Card /> {/*Senza parametri */}
        {/*con passaggio di parametri*/}
        <Card cardButtonText={"testo passato"} cardBtnOnClick={sayCiao} />
      </div>
      <br />

      <h2>Usare useContext:</h2>
      <ButtonThemeContext.Provider value={buttonTheme}>
        <ButtonsGroup />
      </ButtonThemeContext.Provider>
      <Button btnOnClick={changeTheme}>Cambia Theme</Button>
    </div>
  );
}

export default App;

