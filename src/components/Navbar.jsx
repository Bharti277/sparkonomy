import React from "react";

const Navbar = () => {
  return (
    <div className="p-4 text-center flex justify-between items-center font-bold text-2xl sticky top-0  backdrop-blur-md">
      <div className="text-sm font-normal">Welcome to Sparkonomy!</div>
      <div>Dashboard</div>
      <div className="">Avatar</div>
    </div>
  );
};

export default Navbar;
