export const initialState={
    basket: [],
    total: 0,
    sidebar: false,
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
     case "openSidebar" :
     return {
       ...state,
       sidebar: true,
     };
     case "closeSidebar" :
     return {
       ...state,
       sidebar: false,
     };
    default:
      return state;
  }
}

export default reducer;