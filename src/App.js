import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

// import LoginPage from './components/LoginPage';
// import {BrowserRoute , Routes,Route} from 'react-router-dom'
import RegisterPage from './components/RegisterPage';

function App() {
 
  
  return (
    <div>
<Router>

<Routes>
<Route exact path='/' element={<LoginPage/>}/>
<Route exact path='/register' element={<RegisterPage/>}/>
</Routes>
</Router>

    </div>
  );
};



export default App;
