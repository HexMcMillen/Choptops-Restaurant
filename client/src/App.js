import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FoodMenuTwo from './views/FoodMenuTwo';
import DrinksMenu from './views/DrinksMenu';
import HomePageTwo from './views/HomePage';
import NavBar from './components/NavBar';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div>
    <NavBar />
      <Routes>
        <Route element={ <FoodMenuTwo /> } path="/ChopTops/Burgers" />
        <Route element={ <DrinksMenu /> } path='/ChopTops/Drinks' />
        <Route element={ <HomePageTwo /> } path='/' />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
