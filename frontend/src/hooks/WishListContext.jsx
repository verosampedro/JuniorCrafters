// WishListContext.js

import React, { createContext, useContext, useState } from "react";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (item) => {
    setWishList((prevWishList) => [...prevWishList, item]);
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};
