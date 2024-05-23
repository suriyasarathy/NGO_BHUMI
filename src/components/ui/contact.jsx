import React from "react";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone.png";
import Address from "../../assets/address.png";

const Contact = () => {
  return (
    <div className="flex flex-row justify-around p-10">
      <div className="flex flex-row">
        <img src={Phone} alt="phoneLogo" className="w-20 h-20 m-5" />
        <div className="flex justify-center flex-col">
          <p className="text-lg text-gray-500">Call us Now :</p>
          <p className="text-xl font-bold">+91 1234567890</p>
        </div>
      </div>
      <div className="flex flex-row">
        <img src={Email} alt="emailLogo" className="w-28" />
        <div className="flex justify-center flex-col">
          <p className="text-lg text-gray-500">Email us on :</p>
          <p className="text-xl font-bold">info@sitename.com</p>
        </div>
      </div>
      <div className="flex flex-row">
        <img src={Address} alt="addressLogo" className="w-28" />
        <div className="flex justify-center flex-col">
          <p className="text-lg text-gray-500">NGO Address :</p>
          <p className="text-xl font-bold">487 South Park Avenue</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
