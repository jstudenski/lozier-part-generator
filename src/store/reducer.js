const initialState = {
  builderWidth: 48,
  builderHeight: 72,
  items:[
    {
      width: 48,
      height: 36,
    },
    {
      width: 48,
      height: 120,
    },
  ]
}

const reducer = (state = initialState, action) => {
  if (action.type === 'HEIGHT_CHANGE') {
    return {
      ...state,
      builderHeight: action.value,
    }
  }
  if (action.type === 'WIDTH_CHANGE') {
    return {
      ...state,
      builderWidth: action.value,
    }
  }
  if (action.type === 'ADD_BUTTON') {
    const temp = {
      width: state.builderWidth,
      height: state.builderHeight,
    }
    return {
      ...state,
      items: [...state.items, temp]
    }
  }
  return state;
};

export default reducer;
