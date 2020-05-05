import React from 'react';
import MemeForm from './MemeForm';
import Meme from './Meme';
import { useSelector, useDispatch } from "react-redux";

/**HomePage: renders MemeFrom component and list of Memes*/
function HomePage() {
  const memes = useSelector(st => st.memes);
  console.log(memes);
  const dispatch = useDispatch();

  /**addMeme: adds a meme to state in store */
  function addMeme(formData) {
    dispatch({
      type: 'ADD_MEME',
      meme: formData
    })
  }

  /**deleteMeme: deletes a meme to state in store */
  function deleteMeme(id) {
    dispatch({
      type: 'DELETE_MEME',
      id: id
    })
  }

  return (
    <div>
      <h1>Meme Generator!</h1>
      <MemeForm addMeme={addMeme} />
      {memes.map(m => <Meme
        key={m.id}
        id={m.id}
        deleteMeme={deleteMeme}
        topText={m.topText}
        bottomText={m.bottomText}
        url={m.url} />)}
    </div>
  )
}

export default HomePage;