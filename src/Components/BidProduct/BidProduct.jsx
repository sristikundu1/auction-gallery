import React from "react";
import { FaRegHeart } from "react-icons/fa6";

const BidProduct = ({ bid, handleClickBids }) => {
  const { id, title, image, currentBidPrice, timeLeft } = bid;
  return (
    <tr className="border-b-amber-600">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  h-20 w-20">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </td>

      <td className="text-[#0E2954] text-lg font-normal text-left">{title}</td>

      <td className="text-[#0E2954] text-lg font-semibold text-left">
        ${currentBidPrice}
      </td>

      <td className="text-[#0E2954] text-lg font-semibold text-left">
        {timeLeft}
      </td>

      <td>
        <button onClick={() => handleClickBids(bid)}>
          <FaRegHeart
            className="text-[#0E2954] text-lg font-semibold text-left"
            size={20}
          />
        </button>
      </td>
    </tr>
  );
};

export default BidProduct;
