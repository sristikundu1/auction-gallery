import React, { use } from "react";
import BidProduct from "../BidProduct/BidProduct";

const Products = ({ bidPromises, handleClickBids }) => {
  const bidDatas = use(bidPromises);

  // console.log(bidDatas);
  return (
    <div className="overflow-x-auto rounded-2xl bg-white p-4">
      <table className="table">
        <thead className="text-sm text-black font-normal text-left">
          <tr>
            <th>Items</th>
            <th>Title</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>

        {/* table row data  */}
        <tbody>
          {bidDatas.map((bid) => (
            <BidProduct
              key={bid.id}
              bid={bid}
              handleClickBids={handleClickBids}
            ></BidProduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
