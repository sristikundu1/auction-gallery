import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import { Suspense, useState } from "react";
import FavProduct from "./Components/FavProduct/FavProduct";
import { FaRegHeart } from "react-icons/fa6";
import {
  addBidToLocalstorage,
  getBidFromLocalstorage,
  removeBidFromLocalstorage,
} from "./Components/utils/Localstorage";

const bidPromises = fetch("BidData.json").then((res) => res.json());
function App() {
  const [favBid, setFavBids] = useState([]);

  const handleClickBids = (bid) => {
    // toast alert
    toast("Bid Added to the list!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const newFavBid = [...favBid, bid];
    setFavBids(newFavBid);

    // Store bid id in localStorage
    addBidToLocalstorage(bid.id);

    updateTotal(bid.currentBidPrice);
  };

  //  Get favourite Bid IDs from localStorage
  const storedBidsIds = getBidFromLocalstorage();

  // Filter bid to show only fav bid
  const FavouriteBid = favBid.filter((bid) => storedBidsIds.includes(bid.id));

  // remove bid from favourite item
  const handleRemoveBid = (id) => {
    // toast alert
    toast("Bid removed from the list!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // remove from ui and localstorage
    const remainingBid = favBid.filter((bid) => bid.id != id);
    setFavBids(remainingBid);
    removeBidFromLocalstorage(id);
  };

  // total bid amount count
  let totalBidAmount = 0;

  for (let i = 0; i < FavouriteBid.length; i++) {
    totalBidAmount += FavouriteBid[i].currentBidPrice;
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="bg-[#EBF0F5] py-32 px-3 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-5">
        <Suspense fallback={<h1>Bid Data are loading...........</h1>}>
          {/* left Side  */}
          <div className="md:col-span-3">
            <h1 className="text-[#0E2954] text-2xl font-medium text-left">
              Active Auctions
            </h1>
            <p className="py-3 text-black text-lg font-normal text-left opacity-80">
              Discover and bid on extraordinary items
            </p>
            {/* left side table  */}
            <div>
              <Products
                bidPromises={bidPromises}
                handleClickBids={handleClickBids}
                favBid={favBid}
              ></Products>
            </div>
          </div>

          {/* Right side  */}
          <div className=" md:col-span-1">
            <div className="bg-white p-5 mt-20 rounded-2xl">
              <div className="mb-2">
                <h2 className="flex justify-center items-center gap-4 text-[#0E2954] text-xl font-medium">
                  <FaRegHeart
                    className="text-[#0E2954] text-lg font-semibold text-left"
                    size={20}
                  />{" "}
                  Favorite Items
                </h2>
              </div>
              <div>
                {FavouriteBid.length === 0 ? (
                  <div className="bg-white p-5 rounded-2xl">
                    <div className="text-center py-4">
                      <h1 className="text-black text-lg font-medium">
                        No favorites yet
                      </h1>
                      <p className="text-black text-sm font-normal opacity-80">
                        Click the heart icon on any item to add it to your
                        favorites
                      </p>
                    </div>
                  </div>
                ) : (
                  FavouriteBid.map((fbid) => (
                    <FavProduct
                      key={fbid.id}
                      fbid={fbid}
                      handleRemoveBid={handleRemoveBid}
                    />
                  ))
                )}
              </div>
              <ToastContainer />
              <div className="flex justify-between text-black text-lg font-semibold">
                <h1>Total bids Amount</h1>
                <p>
                  $
                  <span>
                    {FavouriteBid.length === 0 ? "0000" : totalBidAmount}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Suspense>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
