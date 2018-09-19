const initialState = {
  builderWidth: 48,
  builderHeight: 48,
  fixtures: [
    [
      {width: 48, height: 36},
      {width: 48, height: 36},
      // {width: 48, height: 36},
      // {width: 48, height: 36}
    ],[
      {width: 48, height: 36},
      {width: 48, height: 36},
      // {width: 48, height: 36},
      // {width: 48, height: 36},
      // {width: 24, height: 36},
      // {width: 24, height: 36}
    ],
    [
      {width: 48, height: 48},
      // {width: 48, height: 48},
    ],[]]
};

const reducer = (state = initialState, action) => {
  const temp = {
    width: state.builderWidth,
    height: state.builderHeight,
  }
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
    case 'DELETE_SECTION':

      const newDelSecArr = [
        ...state.fixtures.slice(0, action.value),
        ...state.fixtures.slice(action.value + 1)
      ]
      // one section minimum
      if (newDelSecArr.length === 0) return state;
      // set builder height to 48 if there is no ficture
      const builderHeight = Object.is(newDelSecArr[newDelSecArr.length-1][0], undefined) ? 48 : newDelSecArr[newDelSecArr.length-1][0].height;

      console.log();
      return {
        ...state,
        builderHeight: builderHeight,
        fixtures: newDelSecArr,
      }

    case 'DELETE_FIXTURE':
      const [indexA, indexB] = [action.value[0], action.value[1]];
      const newArr = [
        ...state.fixtures[indexA].slice(0, indexB),
        ...state.fixtures[indexA].slice(indexB + 1)
      ]

      return {
        ...state,
        fixtures: state.fixtures.map((currentArr, currentIndex) => indexA === currentIndex ? newArr : currentArr)
      }

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
     const endZone = Object.is(state.fixtures[endArrIndex][0], undefined) ? state.fixtures[startArrIndex][0].height : state.fixtures[endArrIndex][0].height;

    //   console.log(typeof state.fixtures[endArrIndex][0].height)
      if (state.fixtures[startArrIndex][0].height !== endZone) return state;

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
