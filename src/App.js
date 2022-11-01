import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>What word do you want to look up?</p>
      </header>
      <DictionarySearch />
      <footer className="App-footer">
        This project was coded by Kuksa Yuliia and is {""}
        <a
          href="https://github.com/YKUKSA/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://bucolic-alpaca-8dc83f.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
