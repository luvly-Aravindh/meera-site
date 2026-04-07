import React from "react";
import Main from "../pages/Blogs-1";

const Blogs = () => {
  return (
    <>
     <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center lg:py-20 py-6 text-center lg:text-left">

  {/* Left Content */}
  <div>
    <p className="flex items-center justify-center lg:justify-start gap-3 text-[12px] tracking-[0.2em] uppercase text-[#FC7900] font-semibold font-NickySans">
      <span className="w-8 h-[1px] bg-[#FC7900]"></span>
      Blog
    </p>

    <h2 className="mt-6 leading-tight">
      <span className="block text-[42px] md:text-[56px] font-bold text-black font-NickySans">
        Ideas to Inspire Your
      </span>

      <span className="block text-[42px] md:text-[56px] font-normal text-[#FC7900] font-elmessiri">
        Next Move
      </span>
    </h2>
  </div>

</div>

      {/* Blog Cards Section */}
      <Main />
    </>
  );
};

export default Blogs;