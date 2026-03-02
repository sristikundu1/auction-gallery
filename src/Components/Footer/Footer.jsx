import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal gap-4 footer-center bg-base-200 text-base-content rounded p-10 py-20">
      <nav>
        <a className=" text-xl text-[#003EA4]">
          Auction <span className="text-[#FFD337]">Gallery</span>
        </a>
      </nav>
      <nav className="grid grid-flow-col gap-4 text-black text-lg font-normal leading-7">
        <a className="link link-hover">Bid. </a>
        <a className="link link-hover">Win.</a>
        <a className="link link-hover">Own.</a>
      </nav>
      <nav className="grid grid-flow-col gap-4 text-black text-sm font-normal leading-6">
        <a className="link link-hover">Home </a>
        <a className="link link-hover">Auctions </a>
        <a className="link link-hover">Categories </a>
        <a className="link link-hover">How to works</a>
      </nav>
      <aside>
        <p className="text-black text-sm font-normal leading-6">
          © 2025 AuctionHub. All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
