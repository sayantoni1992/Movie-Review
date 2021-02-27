import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import { createContext, useReducer } from 'react';
import MovieReview from './components/MovieReview';

export const movieContext = createContext();

const initialState = {
  movieName: 'all',
};

function reducer(state, action) {
    if(action.type === 'CHANGE_MOVIE_NAME')
    {
      return action.payload;
    }
    else {
      return state;
    }

}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
    <div className="App">
          <movieContext.Provider value={{ state, dispatch}}>
              <Header />
           </movieContext.Provider>
         
      <Switch>
         <Route path="/movie-review/:particularMovie">
           
             <movieContext.Provider value={{ state, dispatch}}>
               <MovieReview />
             </movieContext.Provider> 
         </Route>

         <Route path="/">
           
             <movieContext.Provider value={{ state, dispatch}}>
               <Body />
             </movieContext.Provider> 
         </Route>
      </Switch>
           
        <Footer />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
