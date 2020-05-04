import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function MemeForm(){
  const INITIAL_STATE = {
    topText: '',
    bottomText: '',
    url: ''
  }

  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INITIAL_STATE)

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  function handleSubmit(evt){
    evt.preventDefault();
    dispatch({
      type: 'ADD_MEME',
      meme: formData
    });
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