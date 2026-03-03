import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import { Suspense } from "react";

const bidPromises = fetch("BidData.json").then((res) => res.json());
function App() {
  //   const handleclick = () =>{

  // toast("Wow so easy!", {
  // position: "top-right",
  // autoClose: 5000,
  // hideProgressBar: false,
  // closeOnClick: false,
  // pauseOnHover: true,
  // draggable: true,
  // progress: undefined,
  // theme: "light"
  // });
  //   }

  return (
    <>
      {/* <ToastContainer/> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="bg-[#EBF0F5] py-32 px-20 grid grid-cols-4 gap-5">
        <Suspense fallback={<h1>Bid Data are loading...........</h1>}>
          {/* left Side  */}
          <div className="col-span-3">
            <h1 className="text-[#0E2954] text-2xl font-medium text-left">
              Active Auctions
            </h1>
            <p className="py-3 text-black text-lg font-normal text-left opacity-80">
              Discover and bid on extraordinary items
            </p>
            {/* left side table  */}
            <div>
              <Products bidPromises={bidPromises}></Products>
            </div>
          </div>
          {/* Right side  */}
          <div className="col-span-1"></div>
        </Suspense>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
