import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Review from '../Review/Review';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feeling />}></Route>
          <Route path="/understanding" element={<Understanding />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
