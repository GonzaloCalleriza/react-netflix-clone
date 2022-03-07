import './App.css';
import { useState, useEffect } from 'react';
import Section from './components/Section';



function App() {
  
  const [genres, setGenres] = useState(null);
  
  const fetchData = async () => {
    
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
    })

    const responseBody = await response.json()

    setGenres(responseBody.data.reference_list.values);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div >
      {Object.values(genres).map((genre, index) => (
            <Section key={index} genre={genre.value} />
      ))}
      
    </div>
  );
}

export default App;
