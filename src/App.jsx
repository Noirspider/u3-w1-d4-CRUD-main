import "./assets/css/style.min.css"; // Importa il file CSS "style.min.css" dai tuoi asset.
import "./App.css"; // Importa il file CSS "App.css".
import MyHeader from "./components/MyHeader"; // Importa il componente MyHeader da "./components/MyHeader".
import MyFooter from "./components/MyFooter"; // Importa il componente MyFooter da "./components/MyFooter".
import MyMain from "./components/MyMain"; // Importa il componente MyMain da "./components/MyMain".
import { useState } from "react"; // Importa il hook useState da React.
import { logDOM } from "@testing-library/react"; // Importa una funzione logDOM da una libreria di test.
import MyDetail from "./components/MyDetail";

function App() {
  // Definizione dello stato per il valore "valueSearched" inizializzato a una stringa vuota.
  const [valueSearched, setValueSearched] = useState("");
  const [actualPage, setActualPage] = useState("main");
  const [bookObj, setBookObj] = useState({});
  // Funzione per gestire la sottomissione della ricerca.
  function handleSearchSubmit(value) {
    setValueSearched(value); // Imposta il valore di "valueSearched" con il valore passato dalla ricerca.
    console.log(value); // Stampa il valore della ricerca nella console.
  }

  function handlePage(page) {
    setActualPage(page);
  }

  function handleBook(bookObj) {
    setBookObj(bookObj);
  }

  return (
    // Il componente principale dell'applicazione React.
    <>
      {/* Componente MyHeader con la funzione di callback "handleSearchSubmit" */}
      <MyHeader callbackSubmit={handleSearchSubmit} />
      {/* Componente MyMain con la funzione di callback "handleSearchSubmit" e il valore di ricerca "valueToSearch" */}
      {actualPage == "main" && (
        <MyMain
          callbackBook={handleBook}
          callbackDetailPage={handlePage}
          callbackSubmit={handleSearchSubmit}
          valueToSearch={valueSearched}
        />
      )}
      {actualPage == "detail" && <MyDetail bookObj={bookObj} />}
      {/* Componente MyFooter */}
      <MyFooter />
    </>
  );
}

export default App; // Esporta il componente App come componente principale dell'applicazione.
