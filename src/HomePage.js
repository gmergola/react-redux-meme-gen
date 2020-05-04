import React from 'react';
import MemeForm from './MemeForm';
import Meme from './Meme';
import { useSelector } from "react-redux";

function HomePage(){
  const{topText, bottomText, url} = useSelector(st => st.meme);
  return(
    <div>
      <h1>Meme Generator!</h1>
      <MemeForm />
      <Meme topText={topText} bottomText={bottomText} url={url}/>
    </div>
  )
}

export default HomePage;