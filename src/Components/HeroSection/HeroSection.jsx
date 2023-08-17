import React from "react";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const HeroSection = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="md:flex justify-between items-center md:py-28 py-10 gap-5">
          <div className="md:w-1/2 pb-5 md:pb-0">
            <h5>হাউজ অব এনইউবিডিয়ানস</h5>
            <h1 className="text-5xl md:text-7xl font-bold pb-5">
              <span className="text-[#38BDF8]">হতাশা কাটিয়ে</span> ক্যারিয়ার
              গড়ুন...
            </h1>
            <p>
              জাতীয় বিশ্ববিদ্যালয়ের শিক্ষার্থীদের আত্মোন্নয়ন, মানসিক কাঠামো
              পরিবর্তন ও দক্ষতা বৃদ্ধিসহ নানা বিষয়ে কাজ করছে হাউজ অব
              এনইউবিডিয়ানস। নিয়মিত ক্লাস, চাকুরির খবর ও অজানা দুনিয়াকে জানতে
              আমাদের সঙ্গেই থাকুন...
            </p>
          </div>
          <div className="md:w-1/2">
            <YoutubeVideo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
