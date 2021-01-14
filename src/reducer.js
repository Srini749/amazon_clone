export const initialState={
    basket: [],
    total: 0,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "Add_to_basket":
     return {
         ...state,
         basket: [...state.basket, action.item],
         total: parseFloat(state.total) + parseFloat(action.item.price),
     };
     case "Remove_from_basket":
     return {
         ...state,
         basket: state.basket.filter(item => item.title !== action.item.title),
         total: parseFloat(state.total) - parseFloat(action.item.price),
     };
    default:
      return state;
  }
}

export default reducer;