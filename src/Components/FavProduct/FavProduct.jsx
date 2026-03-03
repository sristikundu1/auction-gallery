import React from "react";
import { FaRegHeart } from "react-icons/fa6";

const FavProduct = ({ fbid, handleRemoveBid }) => {
  const { id, title, image, currentBidPrice, bidsCount } = fbid;
  return (
    <div className="bg-white p-2  rounded-2xl">
      <div className="rounded-xl border p-1">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="mask  h-14 w-14 rounded-xl border">
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[rgba(14,41,84,1)] text-sm font-normal leading-5 text-left">
              {title}
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-[rgba(14,41,84,1)] text-sm font-normal leading-5">
                ${currentBidPrice}
              </p>
              <p className="text-[rgba(14,41,84,1)] text-sm font-normal leading-5">
                Bids: {bidsCount}
              </p>
            </div>
          </div>
          <button onClick={() => handleRemoveBid(id)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default FavProduct;
