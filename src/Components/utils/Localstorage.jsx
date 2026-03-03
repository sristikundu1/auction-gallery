// get the data from localstorage
const getBidFromLocalstorage = () => {
  const favBids = localStorage.getItem("Favourite");

  if (favBids) {
    const storeBid = JSON.parse(favBids);
    return storeBid;
  }

  return [];
};

// save data in localstorage

const saveBidInLocalstorage = (Favourite) => {
  const FavouriteString = JSON.stringify(Favourite);
  localStorage.setItem("Favourite", FavouriteString);
};

// remove from local storage
const removeBidFromLocalstorage = (id) => {
  const storeBid = getBidFromLocalstorage();
  const remaining = storeBid.filter((storeId) => storeId != id);
  saveCartToLocalstorage(remaining);
};

// add to localstorage
const addBidToLocalstorage = (id) => {
  const favouriteBlogs = getBidFromLocalstorage();
  const newBids = [...favouriteBlogs, id];
  saveBidInLocalstorage(newBids);
};

export {
  getBidFromLocalstorage,
  addBidToLocalstorage,
  removeBidFromLocalstorage,
};
