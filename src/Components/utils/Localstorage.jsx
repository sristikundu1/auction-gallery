// get the data from localstorage
const getBidFromLocalstorage = () => {
  const bookMarkedBlogs = localStorage.getItem("Bookmarked");

  if (bookMarkedBlogs) {
    const storeBlog = JSON.parse(bookMarkedBlogs);
    return storeBlog;
  }

  return [];
};

// save data in localstorage

const saveBidInLocalstorage = (Bookmarked) => {
  const bookmarkedString = JSON.stringify(Bookmarked);
  localStorage.setItem("Bookmarked", bookmarkedString);
};

// remove from local storage
const removeBidFromLocalstorage = (id) => {
  const storeBlog = getBidFromLocalstorage();
  const remaining = storeBlog.filter((storeId) => storeId != id);
  saveCartToLocalstorage(remaining);
};

// add to localstorage
const addBidToLocalstorage = (id) => {
  const bookmarkedBlogs = getBidFromLocalstorage();
  const newBlogs = [...bookmarkedBlogs, id];
  saveBidInLocalstorage(newBlogs);
};

export {
  getBidFromLocalstorage,
  addBidToLocalstorage,
  removeBidFromLocalstorage,
};
