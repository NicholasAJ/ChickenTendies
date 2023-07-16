import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const [loggedIn, setLoggedIn] = useState(false);
const [user, setUser] = useState({});

function App() {
  return (
    <div className="App">
        <header className="App-header">
          Chicken Tinder
        </header>
        <div className='page'>
          <BrowserRouter>
            <Routes> 
              <Route path="/"/>
              {/* <Route path="/" />
              <Route path="/" /> */}
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
