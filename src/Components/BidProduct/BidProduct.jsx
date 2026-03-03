import React from "react";
import { FaRegHeart } from "react-icons/fa6";

const BidProduct = ({ bid }) => {
  const { title, currentBidPrice, timeLeft } = bid;
  return (
    <tr className="border-b-amber-600">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  h-20 w-20">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt={title}
              />
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
        <button>
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
