import './App.css';
import Login from './components/Login';
import Token from './components/Token';
import Fetch_data from './components/Fetch_data';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="main">
     <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route exact path='/token/' element={<Token />}/>
        <Route exact path='/fetch_data' element={<Fetch_data />}/>
      </Routes>
     </Router>
      
    </div>
  );
}

export default App;
