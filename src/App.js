import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import axios from 'axios';
import Grid from './components/characters/grid'
import Search from './components/characters/Search';

function App() {
  const [items, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
   useEffect(()=>{
     const fetchitems = async()=>{
       const result  = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
       setItem(result.data);
      setLoading(false)
     }
     fetchitems();
     

   }, [query])
  return (
    <div className="container">
    <Header />
    <Search getQuery = {(q)=>setQuery(q)} />
    <Grid isLoading = {isLoading} items = {items}/>
    </div>
  );
}

export default App;
