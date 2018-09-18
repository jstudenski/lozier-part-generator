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
    ],
    [
      {id: "item-10", content: "item 10"},
      {id: "item-11", content: "item 11"},
      {id: "item-12", content: "item 12"},
      {id: "item-13", content: "item 13"},
      {id: "item-14", content: "item 14"}
    ]]
};


// const insertItem = (array, action) => {
//   let newArray = array.slice();
//   newArray.splice(action.index, 0, action.item);
//   return newArray;
// }
// ​
// const removeItem = (array, action) => {
//   let newArray = array.slice();
//   newArray.splice(action.index, 1);
//   return newArray;
// }

// function immutablySwapItems(items, firstIndex, secondIndex) {
//   // Constant reference - we can still modify the array itself


//   return results;
// }

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

      let copyArr = state.test;

      const beginParentId = parseInt(action.value.source.droppableId);
      const endParentId = parseInt(action.value.destination.droppableId);

      const beginChildId = action.value.source.index;
      const endChildId = action.value.destination.index;

      const firstArr = state.test[beginParentId];
      const secondArr = state.test[endParentId];

      // remove item from origional position
      let newArrA = [
        ...state.test[beginParentId].slice(0, beginChildId),
        ...state.test[beginParentId].slice(beginChildId + 1)
      ];

      // remove item from origional position
      copyArr[beginParentId] = [
        ...state.test[beginParentId].slice(0, beginChildId),
        ...state.test[beginParentId].slice(beginChildId + 1)
      ];
      console.log(copyArr);


      let removedItem = state.test[beginParentId].slice(beginChildId, beginChildId + 1)[0];
      let newArrayB;
      let arrDiff = false;
      if (beginParentId === endParentId) {

        newArrA.splice(endChildId, 0, removedItem)

      } else {
        arrDiff = true;
        newArrayB = [...state.test[endParentId].slice()];
        newArrayB.splice(endChildId, 0, removedItem)

      }

      // let manipulatedArr =  state.test.map((content, index) => {
      //   if (index === endParentId) {
      //     return newArrA
      //   } else if (arrDiff && index === endParentId) {
      //     return newArrayB;
      //   }

      //   return content
      // })



      // return {
      //   ...state,
      //   test:
      // }

    //   return {
    //     ...state,
    //     test: state.test.map((item, i) => i === endParentId ? [...item, removedItem ] : item)
    //  }



      // const grab = state.test[beginParentId].slice(beginChildId,beginChildId+1);

      // console.log(action.value);

      // let newArray = state.test[beginParentId].slice();

      // newArray.splice(beginChildId, 1);

      // if (beginParentId === endParentId) {
      // // moved in same array
      //   newArray.splice(endChildId, 0, state.test[beginParentId].slice());
      // } else {
      //   let newArrayB = state.test[endParentId].slice();

      // }



     // console.log(state.test[beginParentId].slice(beginChildId, beginChildId + 1)[0]);

      // let testAdd = [...state.test[endParentId].slice()];
      // testAdd.splice(endChildId, 0, state.test[beginParentId].slice(0, beginChildId));

      // console.log(testAdd);

    //  // let newArrayB = (state.test[beginParentId] === state.test[endParentId]) ? newArray
    //   let newArrayB = state.test[endParentId].slice();
    //   newArrayB.splice(action.value.destination.index, 0, state.test[beginParentId][beginChildId]);

    //  const result = Array.from(list);
    // const [removed] = result.splice(startIndex, 1);
    // result.splice(endIndex, 0, removed);

    // console.log(result);


      // // insertItem
      // let newArray = state.test[beginParentId].slice();
      // newArray.splice(action.value.source.index, 0, state.test[beginParentId][beginChildId]);
      // console.log(newArray);


      // const firstItem = state.test[0][beginChildId];
      // results[beginChildId] = state.test[0][endChildId];
      // results[endChildId] = firstItem;

    //    console.log(results);

      // console.log(results);
      // return {
      //   ...state,
      //   test: [...state.test, [...state.test[0], results]]
      // }

      // return {
      //   ...state,
      //   // optional 2nd arg in callback is the array index
      //   test: state.test.map((content, index) => {
      //     if (index === action.meta.index) {
      //       return action.data
      //     }

      //     return content
      //   })
      // }

      // return {
      //   ...state,
      //   items: [...state.items.slice(0, last), [...state.items[last], temp]]
      // }
        // return [
        //   ...state,
        //   items: [...state.items.slice(0, 3), []] // ,
        //   // ...array.slice(3 + 1)
        // ];



      // function removeItem(array, action) {
      //   return array.filter( (item, index) => index !== action.index);
      // }

      // console.log();
      // console.log();
      // console.log(beginId);
      // console.log(endId);
      // return {
      //  // ...state,
      //   ...test[0].slice(action.value.source.index) // remove
      // }
    default:
      return state
  }


};




export default reducer;


// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   console.log(list, startIndex, endIndex)

//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   console.log(result);
//  // return result;
// };
