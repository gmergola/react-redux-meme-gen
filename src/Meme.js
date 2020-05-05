import React from 'react';
import './Meme.css';

/**Meme: returns meme details with delete buton */
function Meme({ topText, bottomText, url, id, deleteMeme }) {

  return (
    <div>
      <div className="meme-container">
        <div className={topText}>{topText}</div>
        <img className="image" src={url} alt="meme" />
        <div className="bottomtext">{bottomText}</div>
        <button onClick={() => deleteMeme(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Meme;
