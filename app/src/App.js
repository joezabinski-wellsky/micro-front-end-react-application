import './App.css';
import LeftSidebar from './modules/LeftSidebar';
import {ReactComponent as ReactLogo} from "./logo.svg";
function App() {
  return (
    <div className="App">
      <div className="main-app">
        <h1>Main Application in</h1>
        <ReactLogo className="react-logo"/>
      </div>
      <div className="content">
        <LeftSidebar></LeftSidebar>
      </div>
    </div>
  );
}

export default App;
