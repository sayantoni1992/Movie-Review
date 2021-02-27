import React from 'react';
import './styles/Thumbnail.css';

function Thumbnail(props) {
    return (
        <div className="thumbnail">
          <img src={props.imageUrl}
              alt="God FATHER"
              width="300"
              height="300" />

              <div className="thumbnail__image-title">
                 {props.displayTitle}
              </div>
 
        </div>
    )
}

export default Thumbnail;
