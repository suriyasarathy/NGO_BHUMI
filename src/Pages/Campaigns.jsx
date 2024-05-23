import React from "react";
import Campcard from "@/components/ui/campcard";
import Contact from "@/components/ui/contact";
import Navbar from "./Navbar";

const Campaigns = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center bg-yellow-100">
        <p className="flex justify-center pt-[30px] pb-[50px] text-4xl">
          Our Campaigns
        </p>
        <div className="flex flex-row justify-around">
          <Campcard></Campcard>
          <Campcard></Campcard>
          <Campcard></Campcard>
        </div>
      </div>
      <Contact></Contact>
    </>
  );
};

export default Campaigns;
