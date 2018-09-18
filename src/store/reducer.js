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
  ],
  test: [
    [
      {id: "item-0", width: 48, height: 36},
      {id: "item-1", width: 48, height: 36},
      {id: "item-2", width: 48, height: 36},
      {id: "item-3", width: 48, height: 36}
    ],[
      {id: "item-4", width: 48, height: 36},
      {id: "item-5", width: 48, height: 36},
      {id: "item-6", width: 48, height: 36},
      {id: "item-7", width: 48, height: 36},
      {id: "item-8", width: 48, height: 36},
      {id: "item-9", width: 48, height: 36}
    ],
    [
      {id: "item-10", width: 48, height: 120},
      {id: "item-11", width: 48, height: 120},
      {id: "item-12", width: 48, height: 120},
      {id: "item-13", width: 48, height: 120}
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
      const last = state.items.length-1;
      return {
        ...state,
        items: [...state.items.slice(0, last), [...state.items[last], temp]]
      }
    case 'NEW_SECTION':
      return {
        ...state,
        items: [...state.items, []]
      }
    // Drag and drop
    case 'ON_DRAG_END':
      const { source, destination } = action.value;
      // dragged outside zone
      if (destination === null) return state;

      const startArrIndex = parseInt(source.droppableId);
      const startArr = state.test[startArrIndex];
      const startIndex = source.index;
      const endGroupIndex = parseInt(destination.droppableId);
      const endIndex = destination.index;
      const activeItem = startArr.slice(startIndex,startIndex+1)[0];

      // make copy of current array
      let copyArr = state.test.slice();
      // remove item from starting position
      copyArr[startArrIndex] = [
        ...startArr.slice(0, startIndex),
        ...startArr.slice(startIndex + 1)
      ];
      // add active item to new position
      copyArr[endGroupIndex].splice(endIndex, 0, activeItem)

      return {
        ...state,
        test: copyArr,
      }

    default:
      return state
  }

};

export default reducer;
