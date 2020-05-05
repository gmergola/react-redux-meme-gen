const INITIAL_STATE = {
  memes:
    []
};

/**memeReducer: changes state based on action that is called */
function memeReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'ADD_MEME':
      return {
        ...state,
        memes: [
          ...state.memes,
          {
            ...action.meme
          }
        ]
      }
    case 'DELETE_MEME':
      return {
        ...state,
        memes: state.memes.filter(meme => action.id !== meme.id)
      }
      default: 
        return state
  }
}

export default memeReducer;
