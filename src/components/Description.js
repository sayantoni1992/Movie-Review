import React from 'react';
import './styles/Description.css';

function Description(props) {
    return (
        <>
             <h2 className="description__header">{props.headline}</h2>
                <p className="movieReview__date">{`Publication Date: ${props.pDate}`}</p>
                <p>{`By ${props.byline}`}</p>
                <div>
                    {props.summary}
                </div> 
                  <p className="movieReview__date">{`Last Updated: ${props.uDate}`}</p>
                  
                    { props.reviewLink   &&
                  
                           <a className="movieReview__link" style={{display: "block"}} href={props.reviewLink}>See New York Times Review</a>
                     }
                  
        </>
    )
}

export default Description;
