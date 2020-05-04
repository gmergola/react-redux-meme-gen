import React from 'react';


function Meme({topText, bottomText, url}){
  return(
    <span>
      <span>{topText}</span>
      <img src={url} alt="meme"/>
      <span>{bottomText}</span>
    </span>
  );
}

export default Meme;
