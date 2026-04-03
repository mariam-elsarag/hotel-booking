import Footer from "@/app/_components/layout/Footer";
import Navigaition from "@/app/_components/layout/Navigaition";
import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col justify-between">
      <div>
        <Navigaition />
        <div className="flex-1 px-2 pt-2 max-w-[1536px] mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
