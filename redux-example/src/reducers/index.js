import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_BASKET":
      const removedBook = state.cart.filter(
        (book) => book.id !== action.payload
      );
      return { ...state, cart: removedBook };

    default:
      return state;
  }
};
