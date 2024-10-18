import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeComponent from './PokeComponent';
import CountryComponent from './CountryComponent';
import CatFactsComponent from './CatFactsComponent';
import Header from './Header';
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/poke" element={<PokeComponent />} />
                    <Route path="/cat-facts" element={<CatFactsComponent />} />
                    <Route path="/country" element={<CountryComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

