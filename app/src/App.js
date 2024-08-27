import './App.css';
import RightSidebar from "./modules/RightSidebar";
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
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}

export default App;
