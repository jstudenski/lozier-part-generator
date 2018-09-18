const initialState = {
  builderWidth: 48,
  builderHeight: 72,
  // items:[
  //   [{
  //     width: 48,
  //     height: 36,
  //   },
  //   {
  //     width: 48,
  //     height: 114,
  //   }],[{
  //     width: 48,
  //     height: 120,
  //   },
  //   {
  //     width: 48,
  //     height: 120,
  //   }],
  // ],
  fixtures: [
    [
      {width: 48, height: 36},
      {width: 48, height: 36},
      {width: 48, height: 36},
      {width: 48, height: 36}
    ],[
      {width: 48, height: 36},
      {width: 48, height: 36},
      {width: 48, height: 36},
      {width: 48, height: 36},
      {width: 24, height: 36},
      {width: 24, height: 36}
    ],
    [
      {width: 48, height: 120},
      {width: 48, height: 120},
      {width: 48, height: 120},
      {width: 48, height: 120}
    ]]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'HEIGHT_CHANGE':
      return {
        ...state,
        builderHeight: action.value,
      }
    case 'WIDTH_CHANGE':
      return {
        ...state,
        builderWidth: action.value,
      }
    case 'ADD_BUTTON':
      const temp = {
        width: state.builderWidth,
        height: state.builderHeight,
      }
      const last = state.fixtures.length-1;
      return {
        ...state,
        fixtures: [...state.fixtures.slice(0, last), [...state.fixtures[last], temp]]
      }
    case 'NEW_SECTION':
      return {
        ...state,
        fixtures: [...state.fixtures, []]
      }
    // Drag and drop
    case 'ON_DRAG_END':
      const { source, destination } = action.value;
      // dragged outside zone
      if (destination === null) return state;

      const startArrIndex = parseInt(source.droppableId);
      const startArr = state.fixtures[startArrIndex];
      const startIndex = source.index;
      const endArrIndex = parseInt(destination.droppableId);
      const endIndex = destination.index;
      const activeItem = startArr.slice(startIndex,startIndex+1)[0];

      // if the heights don't match
      if (state.fixtures[startArrIndex][0].height != state.fixtures[endArrIndex][0].height) return state;

      // make copy of current array
      let copyArr = state.fixtures.slice();
      // remove item from starting position
      copyArr[startArrIndex] = [
        ...startArr.slice(0, startIndex),
        ...startArr.slice(startIndex + 1)
      ];
      // add active item to new position
      copyArr[endArrIndex].splice(endIndex, 0, activeItem)

      return {
        ...state,
        fixtures: copyArr,
      }

    default:
      return state
  }

};

export default reducer;
