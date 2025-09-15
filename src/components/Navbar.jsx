import React from "react";
import { ChevronLeft } from "lucide-react";

const Navbar = () => {
  return (
    <div className="p-4 text-center flex justify-between items-center font-bold text-2xl sticky top-0  backdrop-blur-md">
      <div className="text-sm font-normal flex items-center gap-2 cursor-pointer">
        <ChevronLeft />
        Back
      </div>
      <div>Dashboard</div>
      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
        <span className="text-white font-medium">D</span>
      </div>
    </div>
  );
};

export default Navbar;
