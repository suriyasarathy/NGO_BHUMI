import React from "react";
import CardImage from "../../assets/banner.jpg";

const Campcard = () => {
  return (
    <>
      <div className="flex flex-col w-[20rem] shadow-2xl mb-[80px]">
        <img src={CardImage} alt="bannerImage" className="rounded-t-md" />
        <div className="bg-white rounded-md">
          <div className="flex flex-row gap-20 mx-14 my-8">
            <p>29 May</p>
            <p>11.00 am</p>
          </div>
          <div className="mx-10 my-5">
            <p className="font-bold text-lg">
              Innovative Fundraising for Students
            </p>
          </div>
          <div className="flex flex-col gap-2 mx-10 my-5">
            <p className="text-[10px]">HOSTED BY</p>
            <p className="text-xs">suriya</p>
          </div>
          <div className="mx-20 my-5">
            <button className="px-6 py-3 rounded-md border-gray-300 border-2 text-white  bg-red">
              Request to Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campcard;
