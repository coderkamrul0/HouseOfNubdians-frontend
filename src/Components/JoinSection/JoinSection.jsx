import React from 'react';
import StudentsImg from '../../assets/students.png'

const JoinSection = () => {
    return (
        <div className='py-10'>
            <div className='max-w-screen-xl mx-auto px-3'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <h2 className='text-4xl font-bold'>আজই জয়েন করুন <br /> বাংলাদেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে</h2>
                        <p className='py-4'>ফ্রি রেজিস্ট্রেশন করে হাউজ অব এনইউবিডিয়ানস থেকে শেখা শুরু করে দিন এখনই</p>
                        <button className="bg-[#0284C7] hover:bg-[#3ab9f0] text-white px-5 py-2 rounded-full">শুরু করুন</button>
                    </div>
                    <div>
                        <img src={StudentsImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinSection;