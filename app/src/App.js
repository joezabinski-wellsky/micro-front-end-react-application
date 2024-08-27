import './App.css';
import AngularEmbeddedModule from './modules/AngularEmbedded';
import {ReactComponent as ReactLogo} from "./logo.svg";
function App() {
  return (
    <div className="App">
      <div className="main-app">
        <h1>Main Application in</h1>
        <ReactLogo className="react-logo"/>
      </div>
      <div className="content">
        <AngularEmbeddedModule></AngularEmbeddedModule>
      </div>
    </div>
  );
}

export default App;
