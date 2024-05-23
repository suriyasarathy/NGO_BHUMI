import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import decodedToken from "@/AuthChecker";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";


const Navbar = () => {
  const { toast } = useToast();

  const signOutHandler = () => {
    if (decodedToken) {
      Cookies.remove("access-token");
      toast({
        description: "User logged out successfully"
      });
      window.location.reload();  
    } 
  }

  return (
    <div className="h-14 w-full flex border-b-gray-200 border-b">
      <div className="w-1/5 flex justify-center items-center">
        <h2>BHUMI</h2>
      </div>
      <div className="flex flex-row justify-around items-center w-2/3 border-l-gray-200 border-l border-r border-r-gray-200">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/blogs">Blogs</Link>
        {decodedToken ? (
          <button type="submit" variant="ghost" onClick={
            () => signOutHandler()
          }>Sign Out</button>
        ) : (
          <Link to="/signup">Sign Up</Link>
        )}
      </div>
      <div className="w-1/5 flex justify-center items-center gap-5">
        <Link to="/volunteer">
          <Button variant="default" className="max-w-sm">
            Volunteer
          </Button>
        </Link>
        <Link to="/donate">
          <Button variant="default" className="max-w-sm">
            Donate Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
