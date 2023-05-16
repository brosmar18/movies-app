import React from 'react';
import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

// 55505650

const API_URL = 'http://www.omdbapi.com?apikey=55505650';

const movie1 = {
    "Title": "The Amazing Spider-Man",
    "Year": "2012",
    "imdbID": "tt0948470",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spider-man');
    }, [])
    return (
        <div className='app'>
            <h1>Movies</h1>
            <div className='search'>
                <input
                    placeholder='search for movies'
                    value='Superman'
                    onChange={() => {}}
                />
                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => { }}
                />
            </div>
            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={ movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
