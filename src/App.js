import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Country from './Components/Country';
import City from './Components/City';
import EditCity from './Components/EditCity';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add-country' element={<Country/>}></Route>
        <Route path='/add-city' element={<City/>}></Route>
        <Route path='/edit-city/:id' element={<EditCity/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
