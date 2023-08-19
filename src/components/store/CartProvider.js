import React, { useContext } from "react";

import cartContext from "./cart-context";

const AddItemToCartHandler = (item) => {};
const RemoveItemFromCartandler = (id) => {};

const CartProvider = (props) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: AddItemToCartHandler,
    removeItem: RemoveItemFromCartandler,
  };

  return (
    <cartContext.Provider value={cartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
