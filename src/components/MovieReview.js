import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Title  from './Title';
import Image from './Image';
import Description from './Description';
import './styles/MovieReview.css';
import { movieContext } from '../App';


function MovieReview() {

    const { particularMovie } = useParams(); // picks up the param from the current url
    const key = "1gGiDUzpxGYELPkwoJRD8lpNsIL7fZTq";

    const [movieData, setMovieData] = useState({});
    const [multimediaSrc, setMultimediaSrc] = useState("");

    useEffect(() => {
        async function getData() {
         await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${key}&query=${particularMovie}`,{
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
                 data.results.map((result) => {
                     if(result.display_title == particularMovie) {
                         if(!result.multimedia) {
                             setMultimediaSrc("https://scottyscinemas.com.au/Content/Images/Movies//default-movie.png")
                         }
                         else {
                             setMultimediaSrc(result.multimedia.src);
                         }

                         setMovieData(result);
                         console.log(movieData.publication_date);
                     }
                 });
                 
               }
              else 
              {
                console.log("Err");
              }
                
          });
        }

        getData();
     
    }, []);

    console.log(movieData);

   
        return movieData.link ?  (
            <div className="moviewReview">
                
                
                 <div className="moviewReview__title">
                    <Title title={movieData.display_title} />
                 </div>
              
             <div className="moviewReview__details">
                 <div className="moviewReview__image">
                    <Image url={multimediaSrc} />
                </div>
    
                 <div className="moviewReview__review">
                     <Description 
                         headline={movieData.headline}
                         pDate={`${new Date(movieData.publication_date).toString().substr(4,6)}, ${new Date(movieData.publication_date).toString().substr(11,4)}`} 
                         summary={movieData.summary_short} 
                         byline={movieData.byline} 
                         uDate={new Date(movieData.date_updated).toString().substr(4,6) + ", " + new Date(movieData.date_updated).toString().substr(11,4) + " at " + new Date(movieData.date_updated).toString().substr(16,12)} 
                         reviewLink={movieData.link.url}
                     />
                    {/*  */}
                </div>
         </div>
    
          <Link to="/"><button className="moviewReview__btn">Go Back</button></Link>
             
             
             </div>
        ) : (
            <div className="moviewReview">
                
                
            <div className="moviewReview__title">
               <Title title={movieData.display_title} />
            </div>
         
        <div className="moviewReview__details">
            <div className="moviewReview__image">
               <Image url={multimediaSrc} />
           </div>

            <div className="moviewReview__review">
                <Description 
                    headline={movieData.headline}
                    pDate={`${new Date(movieData.publication_date).toString().substr(4,6)}, ${new Date(movieData.publication_date).toString().substr(11,4)}`} 
                    summary={movieData.summary_short} 
                    byline={movieData.byline} 
                    uDate={new Date(movieData.date_updated).toString().substr(4,6) + ", " + new Date(movieData.date_updated).toString().substr(11,4) + " at " + new Date(movieData.date_updated).toString().substr(16,12)} 
                  
                />
               {/*  */}
           </div>
       </div>

     <Link to="/"><button className="moviewReview__btn">Go Back</button></Link>
        
        
        </div>
        )
  
   
     
}

export default MovieReview;

