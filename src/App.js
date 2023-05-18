import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import DriftPage from './Components/DriftPage.js';
import TimeAttackPage from './Components/TimeAttackPage.js';
import ForzaPage from './Components/ForzaPage.js';
 

function App() {
  function Menu() {
    return <div className='menu'>
        <NavLink to='/' className='menu__item'>Главная</NavLink>
        <NavLink to='/drift' className='menu__item'>Дрифт-такси</NavLink>
        <NavLink to='/timeattack' className='menu__item'>Time Attack</NavLink>
        <NavLink to='/forza' className='menu__item'>Forza Karting</NavLink>
    </div>
  };

  return (
      <div>
        <Menu />
        <Routes className="page">
          <Route path="/" exact element={ <HomePage /> } />
          <Route path="/drift" element={ <DriftPage /> } />
          <Route path="/timeattack" element={ <TimeAttackPage /> } />
          <Route path="/forza" element={ <ForzaPage /> } />
        </Routes>
      </div>
  );
}

export default App;
