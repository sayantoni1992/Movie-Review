import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { movieContext } from '../App';
import './styles/Searchbar.css';


function Searchbar() {

    const [movieName, setMovieName] = useState('');
    const history = useHistory();

    //Consume 
    const { dispatch } = useContext(movieContext);


    const showMovies = (event) => {
         event.preventDefault();
         dispatch({type: 'CHANGE_MOVIE_NAME', payload: { movieName: movieName }});
         history.push("/");
    }
    
    return (
        <div className="searchbar">
            <form>
                <input 
                   type="text" 
                   placeholder="Search Movies..." 
                   onChange={
                       (event) => {
                           setMovieName(event.target.value);
                       }
                   }
                />
              
                  <button type="submit" onClick={showMovies}>
                     <SearchIcon />
                 </button>
               
                
            </form>
        </div>
    )
}

export default Searchbar
