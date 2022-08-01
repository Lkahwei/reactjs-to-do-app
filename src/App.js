import logo from './logo.svg';
import './App.scss';
import {Route, Routes, Navigate} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
