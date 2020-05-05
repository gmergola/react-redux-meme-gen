import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

/**MemeForm: create a new meme and adds new meme to state in store
 * through passed down function*/
function MemeForm({ addMeme }){
  const INITIAL_STATE = {
    topText: '',
    bottomText: '',
    url: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  /**handleChange: adds form values to formData state */
  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  /**handleSubmit: adds formData to meme state in store */
  function handleSubmit(evt){
    evt.preventDefault();
    addMeme({...formData, id: uuid()})
    setFormData(INITIAL_STATE);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="topText">Top Text:</label>
        <input onChange={handleChange} name="topText" value={formData.topText}/>
      </div>
      <div>
        <label htmlFor="bottomText">Bottom Text:</label>
        <input onChange={handleChange} name="bottomText" value={formData.bottomText}/>
      </div>
      <div>
        <label htmlFor="url">Image Url:</label>
        <input onChange={handleChange} name="url" value={formData.url}/>
      </div>
      <button>Add Meme!</button>
    </form>
  )
}

export default MemeForm;