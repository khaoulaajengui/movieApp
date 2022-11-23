import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data';
import NavBar from './NavBar';
import AddMovie from './components/addMovie';
import MovieCard from './components/Card';
import "./components/style.css";

function App() {
  const [Mymovies, setMymovies] = useState(data);
  const [search, setSearch] = useState('');
  const [rate, setRate] = useState(0);
  return (
    <div className='body' >

      <NavBar></NavBar>
      <MovieCard data={data}></MovieCard>
      <AddMovie ></AddMovie>

    </div>
  );
}

export default App;
