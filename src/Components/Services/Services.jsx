import React from "react";
import imgOne from "../../assets/application.png";
import imgTwo from "../../assets/book.png";
import imgThree from "../../assets/newspaper.png";

const Services = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between gap-14 ">
          <div className="flex  gap-3">
            <img src={imgOne} className="h-[100px]" alt="" />
            <div>
              <h4 className="text-2xl font-bold text-[#38BDF8]">আর্টিক্যাল</h4>
              <p>
                বাংলাদেশ, মুক্তিযুদ্ধ, ইতিহাস, শিল্প-সংস্কৃতি, বই-সিনেমা এবং
                জীবনি নিয়ে আমাদের সর্বশেষ ব্লগ পোস্টগুলো পড়ুন...
              </p>
            </div>
          </div>
          <div className="flex  gap-3">
            <img src={imgTwo} className="h-[100px]" alt="" />
            <div>
              <h4 className="text-2xl font-bold text-[#38BDF8]">পড়াশোনা</h4>
              <p>
                আমাদের বিভিন্ন বিষয়ের উপর বানানো টিউটোরিয়াল, কোর্স, মোটিবেশনাল
                স্পিচ গুলো দেখুন...
              </p>
            </div>
          </div>
          <div className="flex  gap-3">
            <img src={imgThree} className="h-[100px]" alt="" />
            <div>
              <h4 className="text-2xl font-bold text-[#38BDF8]">চাকরির খবর</h4>
              <p>
                নিয়মিত সরকারি, বেসরকারি কর্পোরেট, টেলিকম, ব্যাংক, এনজিওসহ সকল
                ধরণের চাকরির খবর দেখুন...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
