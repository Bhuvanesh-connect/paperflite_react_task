import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";
import LoginPage from './routing/LoginPage';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <LoginPage/>
        </HashRouter>
    </div>
  );
}

export default App;
