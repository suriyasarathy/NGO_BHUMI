import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../assets/banner2.png";
import Food from "../assets/food.jpeg";
import Hospitality from "../assets/hospitality.jpeg";
import Education from "../assets/education.jpg";
import Homepng from "../assets/home.png"
import Impact from "../assets/impact.png"
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="image-container flex flex-col justify-center bg-gray">
        <img src={BannerImage}></img>
        <div className="flex flex-row justify-around items-center mt-16 top-20 mx-48 ">
          <div className="flex flex-col ">
            <img
              src={Education}
              className="w-56 h-48 border-4 border-white"
            ></img>
            <h2 className="  p-2 text-black text-center text-2xl pt-5">
              Education
            </h2>
          </div>
          <div className="flex flex-col ">
            <img src={Food} className="w-56 h-48 border-4 border-white"></img>
            <h2 className="  p-2 text-black text-center text-2xl pt-5">Food</h2>
          </div>
          <div className="flex flex-col ">
            <img
              src={Hospitality}
              className="w-56 h-48 border-4 border-white"
            ></img>
            <h2 className="  p-2 text-black text-center text-2xl pt-5">
              Hospitality
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-20 mx-52 mt-10">
          <img src={Homepng} className="h-80 w-80"></img>
          <div className="flex flex-col ">
            <h2 className="text-3xl font-semibold text-red">
              Help Children now
            </h2>
            <h2 className="text-4xl font-semibold mt-3 ">
              WE'RE WORLD WIDE <br /> ORGANIZAION.
            </h2>
            <h4 className="  font-medium text-lg mt-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </h4>
            <p className="text-md font-extralight mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-20 px-52 mt-10 p-10 bg-black">
          <div className="flex flex-col ">
            <h2 className="text-xl font-semibold text-red">IMPACT</h2>
            <h2 className="text-2xl font-semibold mt-3 text-white">
              EXPLORE PUREGIVEN WORK AND IMPACT
            </h2>
            <h4 className="  font-medium text-lg mt-3 text-white">
              We invest the money we raise into organizaion with years of
              experience to build sustainable, community owned water projects
              around the world.
            </h4>
            <p className="text-md font-extralight mt-3 text-white">
              We invest the money we raise into organizaion with years of
              experience to build sustainable, community owned water projects
              around the world.
            </p>
          </div>
          <img src={Impact} className="h-80 w-80"></img>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
