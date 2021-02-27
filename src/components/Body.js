import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';

import Thumbnail from './Thumbnail';
import { movieContext } from '../App';
import './styles/Body.css'


function Body() {

    const { state, dispatch } = useContext(movieContext);
    const key = "1gGiDUzpxGYELPkwoJRD8lpNsIL7fZTq";

    const [movieData, setMovieData] = useState({});
    const [results, setResults ] = useState([]);

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${key}&query=${state.movieName}`,{
          headers: {
              "Content-Type": "application/json"
          },
          method: "GET"
       })
        .then(res => res.json())
        .then(data => {
            if(data)
             { 
                console.log(data);
                setMovieData(data);
                setResults(data.results);
                // dispatch({type: 'SET_MOVIE_DATA', payload: { movieName: state.movieName, movieData: data.results }});
                // // console.log(data.results);
                console.log(state.movieData);
             }
            else 
              console.log("Err");
        });
    }, [state]);

    const goBack = (event) => {
        event.preventDefault();
        dispatch({type: 'CHANGE_MOVIE_NAME', payload: { movieName: 'all'}});
    }

    return (
        <div className="body">

            
           { movieData.num_results !== 20 && <h2>{movieData.num_results} Results Found</h2>}
            
            <div className="body__thumbnails">
            
            {
               results && results.map((result) => {
                    return result.multimedia ? ( 
                        <Link to={`/movie-review/${result.display_title}`}>
                          <Thumbnail displayTitle={result.display_title} imageUrl={result.multimedia.src} key={result.display_title}/>
                        </Link>                       
                        
                    ) : (
                        <Link to={`/movie-review/${result.display_title}`}>
                           <Thumbnail displayTitle={result.display_title} imageUrl="https://scottyscinemas.com.au/Content/Images/Movies//default-movie.png" key={result.display_title} />
                        </Link> 
                    )
                })

              
            }
          
            </div>

            {
                state.movieName !== 'all' && <button className="body__goBackButton" onClick={goBack}>Go Back</button>
            }
        </div>
    )
}

export default Body;
