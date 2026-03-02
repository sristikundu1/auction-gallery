import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero w-full h-[630px] object-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556448851-9359658faa54?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==)",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className=" text-neutral-content text-left  w-full">
          <div className="max-w-7xl  px-6 lg:px-20">
            <h1 className="mb-5 text-white text-5xl font-semibold text-left leading-[60px]">
              Bid on Unique Items from <br /> Around the World
            </h1>
            <p className="mb-5 text-white text-xl font-light text-left opacity-80">
              Discover rare collectibles, luxury goods, and vintage <br />{" "}
              treasures in our curated auctions
            </p>
            <button className="btn rounded-4xl">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
