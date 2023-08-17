import React from "react";
import logo from "../../assets/HouseofNubdians.png";
const Header = () => {
  return (
    <div className="border-b">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-3">
          <div>
            <div className="">
            <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <ul className="flex gap-4 text-sm text-black">
              <li className="hover:bg-black px-2 py-1 hover:text-white cursor-pointer rounded-full">আমাদের সম্পর্কে</li>
              <li className="hover:bg-black px-2 py-1 hover:text-white cursor-pointer rounded-full">জাতীয় বিশ্ববিদ্যালয় বিজ্ঞপ্তি</li>
              <li className="hover:bg-black px-2 py-1 hover:text-white cursor-pointer rounded-full">পরীক্ষা</li>
              <li className="hover:bg-black px-2 py-1 hover:text-white cursor-pointer rounded-full">সিভি জমা দিন</li>
              <li className="hover:bg-black px-2 py-1 hover:text-white cursor-pointer rounded-full">সেরা শিক্ষক পুরস্কার</li>
            </ul>
            <div>
            <button className="bg-[#0284C7] hover:bg-[#3ab9f0] text-white px-3 py-2 rounded-full">মেম্বার রেজিস্ট্রেশন</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
