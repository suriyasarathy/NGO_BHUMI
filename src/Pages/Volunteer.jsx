import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import VolunteerImage from "../assets/volunteer_image.png";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import decodedToken from "@/AuthChecker";

const Volunteer = () => {
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    user_id: userId,
    fullname: "",
    email: "",
    mobile_number: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const validate = async () => {
    const newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Full name is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid.";
    if (!formData.mobile_number)
      newErrors.mobile_number = "Mobile number is required.";
    else if (!/^\d{10}$/.test(formData.mobile_number))
      newErrors.mobile_number = "Mobile number must be exactly 10 digits.";
    if (!formData.location) newErrors.location = "Location is required.";

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = await validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const accessToken = Cookies.get("access-token");

    if (!accessToken) {
      toast({
        variant: "destructive",
        title: "User does not have an account",
        description: "Kindly register or login to submit the form",
      });
      return;
    }

    setUserId(decodedToken.id);
    try {
      const response = await fetch("http://localhost:3000/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseBody = await response.json();
      console.log("RESPONSE: ", responseBody);

      if (response.success) {
        toast({
          title: "Volunteer form submitted successfully",
          description: "🎉 Welcome to Bhumi",
        });
        setFormData({
          fullname: "",
          email: "",
          mobile_number: "",
          location: "",
        });
      } else {
        toast({
          variant: "destructive",
          title: "You have already registered as volunteer",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center pb-5">
            Volunteer Registration
          </h1>

          <div className="flex flex-col max-w-md gap-2">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.fullname && (
                <p className="text-red-500">{errors.fullname}</p>
              )}
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="mobile_number">Mobile Number</Label>
              <Input
                type="number"
                id="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
              {errors.mobile_number && (
                <p className="text-red-500">{errors.mobile_number}</p>
              )}
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your preferred location"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location}</p>
              )}
            </div>

            <div className="flex justify-start items-center">
              <Checkbox id="contactPermission" />
              <p className="pl-2">Permission to contact over WhatsApp</p>
            </div>

            <div className="flex justify-start items-center">
              <Checkbox id="newsletterSubscription" />
              <p className="pl-2">
                I would like to receive Bhmi's newsletter and emails
              </p>
            </div>

            <Button
              variant="default"
              className="max-w-sm"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={VolunteerImage} className="w-[500px] rounded-lg" />

          <div className="flex gap-10 pt-10">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">2000+</p>
              <p>Volunteers</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">65+</p>
              <p>Cities & Villages</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">80%</p>
              <p>Contribution</p>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default Volunteer;
