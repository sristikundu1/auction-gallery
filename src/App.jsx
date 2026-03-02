import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";

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
     
    </>
  )
}

export default App
