import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";
import LoginPage from './routing/LoginPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename="/paperflite_react_task">
            <LoginPage/>
        </BrowserRouter>
    </div>
  );
}

export default App;
