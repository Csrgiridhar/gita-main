import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' ;
// import Home from './pages/Home';
// import Contents from './pages/Contents';
// import Search from './pages/Search';
// import Forms from './pages/Forms';
// import Registration from './pages/Registration';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import About from './pages/About';


// import Hookclass from './pages/Hookclass';
// import Registration1 from './pages/Registration1';
// import Formdata from './pages/Formdata';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import RegistrationPage from './pages/RegistrationPage';
// import MyForm from './pages/MyForm';
import Register from './pages/Register';
// import MapFuction2 from './pages/MapFuction2';
// import MapFuction2 from './pages/MapFuction2';
// import Newfile from './pages/Newfile';

function App() {
  return (
    <div className="App">
      {/* <Hookclass/> */}
      
      <Router>
        <Routes>
        {/* <Route path='/' element={<Register />} /> */}

          <Route path='/' element={<Register />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/About' element={<About />} />

          {/* <Route path='/Registration1' element={<Registration1 />} />
          <Route path='/Formdata' element={<Formdata />} /> */}


        </Routes>
      </Router>
    </div>
  );
}

export default App;
