import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListOfUsers' element={<UserList/>}/>
      </Routes>
    </div>
  );
}

export default App;