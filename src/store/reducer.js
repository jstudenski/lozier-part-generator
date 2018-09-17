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
  Test: [
    [
      {id: "item-0", content: "item 0"},
      {id: "item-1", content: "item 1"},
      {id: "item-2", content: "item 2"},
      {id: "item-3", content: "item 3"},
      {id: "item-4", content: "item 4"},
      {id: "item-5", content: "item 5"},
      {id: "item-6", content: "item 6"},
      {id: "item-7", content: "item 7"},
      {id: "item-8", content: "item 8"},
      {id: "item-9", content: "item 9"}
    ]
  [
    {id: "item-10", content: "item 10"},
    {id: "item-11", content: "item 11"},
    {id: "item-12", content: "item 12"},
    {id: "item-13", content: "item 13"},
    {id: "item-14", content: "item 14"}
  ]]
}

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
    default:
      return state
  }



  // if (action.type === 'HEIGHT_CHANGE') {
  //   return {
  //     ...state,
  //     builderHeight: action.value,
  //   }
  // }
//   if (action.type === 'WIDTH_CHANGE') {
//     return {
//       ...state,
//       builderWidth: action.value,
//     }
//   }
//   if (action.type === 'ADD_BUTTON') {
//     const temp = {
//       width: state.builderWidth,
//       height: state.builderHeight,
//     }
//     const last = state.items.length-1;
//     return {
//       ...state,
//       items: [...state.items.slice(0, last), [...state.items[last], temp]]
//     }
//   }
//   if (action.type === 'NEW_SECTION') {
//     return {
//       ...state,
//       items: [...state.items, []]
//     }
//   }
//   return state;
};

export default reducer;
