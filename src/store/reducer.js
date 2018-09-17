const initialState = {
  builderWidth: 48,
  builderHeight: 72,
  items:[
    [{
      width: 48,
      height: 36,
    },
    {
      width: 48,
      height: 114,
    }],[{
      width: 48,
      height: 120,
    },
    {
      width: 48,
      height: 120,
    }],
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
    const last = state.items.length-1;
    return {
      ...state,
      items: [...state.items.slice(0, last), [...state.items[last], temp]]
    }
  }
  if (action.type === 'NEW_SECTION') {
    return {
      ...state,
      items: [...state.items, []]
    }
  }
  return state;
};

export default reducer;
