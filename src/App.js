import logo from './logo.svg';
import './App.css';
import { Contact } from './models/contact.class';
import Componenta from './components/pure/componenta';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Componenta></Componenta>
      </header>
    </div>
  );
}

export default App;
