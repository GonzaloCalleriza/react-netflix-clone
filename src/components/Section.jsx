import React, { useEffect, useState } from 'react';
import Card from './Card';

const Section = ({ genre }) => {

    const [movies, setMovies] = useState(null);

    const fetchData = async () => {
    
        const response = await fetch("/.netlify/functions/getMovies")
        const responseBody = await response.json()
        setMovies(responseBody.data.movies_by_genre.values)
      }
    
      useEffect(() => {
        fetchData()
      }, [])


    return (
        <div>
            <div>{genre}</div>
            {movies && (
                <div className='movie-section'>
                    {movies.map((movie) => (
                        <Card movie={movie} key={movie._id} />
                    ))}    
                </div>
            )}
        </div>
    );
}

export default Section;
