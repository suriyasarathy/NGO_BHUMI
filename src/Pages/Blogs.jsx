import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaUser } from "react-icons/fa";
import BlogCardImage from "../assets/blogcard_image.jpg";
import Navbar from "./Navbar";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="block pt-10">
        <h1 className="text-2xl font-bold text-center">Our Written Blogs</h1>

        <div className="flex justify-center items-end pt-10 gap-5">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="text">Search by Title</Label>
            <Input type="text" id="text" placeholder="Blog Name" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Select Campaign</Label>
            <Input type="text" id="email" placeholder="Blog Name" />
          </div>

          <Button variant="default">Search</Button>
        </div>

        <div className="grid grid-cols-3 px-20 py-10 gap-y-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

const BlogCard = () => {
  return (
    <>
      <Card className="w-[350px] justify-self-center">
        <CardHeader>
          <img src={BlogCardImage} className="rounded-lg" />
          <CardTitle className="py-2">Blog Title</CardTitle>
          <CardDescription className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna
            dolor, convallis et auctor nec, condimentum finibus nisl. Curabitur
            at finibus purus, tristique hendrerit urna. Morbi egestas tempus
            augue, laoreet iaculis elit imperdiet ac. Nullam pharetra viverra
            massa, sed rhoncus ipsum tempus id. Vestibulum eget elit leo.
            Aliquam venenatis purus non risus auctor, a commodo odio tristique.
            Donec dapibus nec nulla in tincidunt. Vestibulum fermentum
            vestibulum dignissim.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <FaUser />
            <p className="pl-2">suriya</p>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Read More</Button>
            </SheetTrigger>
            <SheetContent className="px-10 sm:max-w-[550px]">
              <SheetHeader>
                <img src={BlogCardImage} className="rounded-lg" />
                <div className="flex items-center justify-between py-2">
                  <SheetTitle>Blog Title</SheetTitle>
                  <Button variant="outline">
                    <FaUser />
                    <p className="pl-2">suriya</p>
                  </Button>
                </div>

                <SheetDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  urna dolor, convallis et auctor nec, condimentum finibus nisl.
                  Curabitur at finibus purus, tristique hendrerit urna. Morbi
                  egestas tempus augue, laoreet iaculis elit imperdiet ac.
                  Nullam pharetra viverra massa, sed rhoncus ipsum tempus id.
                  Vestibulum eget elit leo. Aliquam venenatis purus non risus
                  auctor, a commodo odio tristique. Donec dapibus nec nulla in
                  tincidunt. Vestibulum fermentum vestibulum dignissim..
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </CardFooter>
      </Card>
    </>
  );
};

export default Blogs;
