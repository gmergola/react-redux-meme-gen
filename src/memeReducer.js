const INITIAL_STATE = {
  meme:
  {
    topText: '',
    bottomText: '',
    url: ''
  }
};

function memeReducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_MEME') {
    return {
      ...state,
      meme: {
        topText: action.topText,
        bottomText: action.bottomText,
        url: action.url
      }
    }
  }
  return state
}

export default memeReducer;
