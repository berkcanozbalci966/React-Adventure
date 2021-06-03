export const addBasket = (book) => {
  return { type: "ADD_BASKET", payload: book };
};

export const removeBook = (id) => {
  return { type: "REMOVE_BASKET", payload: id };
};
