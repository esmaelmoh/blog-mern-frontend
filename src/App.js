import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import {Route,Routes} from 'react-router-dom'
import Try from './Try';

function App() {
  return (
    < >
     < Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
     </Routes>
  
    </>
  );
}

export default App;
