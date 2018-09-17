const initialState = {
  builderWidth: 24,
  builderHeight: 72,
}

const reducer = (state = initialState, action) => {
  console.log(action);
  // this.verticalBoundChange = (e) => {
  //   this.setState({ verticalBound: e });
  // }
  // this.horizontalBoundChange = (e) => {
  //   this.setState({ horizontalBound: e });
  // }


  if (action.type === 'HEIGHT_CHANGE') {
    return {
      ...state,
      builderWidth: action.value,
    }
  }

  if (action.type === 'WIDTH_CHANGE') {
    return {
      ...state,
      builderWidth: action.value,
    }
  }
  return state;
};

export default reducer;
