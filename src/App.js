import './App.css';
import { useState, useEffect } from 'react';
import Section from './components/Section';



function App() {
  
  const [genres, setGenres] = useState(null);
  
  const fetchData = async () => {
    const url = "/.netlify/functions/getGenres"
    const response = await fetch(url)

    const responseBody = await response.json()

    setGenres(responseBody.data.reference_list.values);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div >
      {genres &&  genres.map((genre) => (
        <Section genre={genre} key={genre._id}/>       
      ))}
      
    </div>
  );
}

export default App;
