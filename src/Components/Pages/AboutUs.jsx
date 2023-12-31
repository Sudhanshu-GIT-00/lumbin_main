import React from 'react';
import AboutusImg from '../../Assests/aboutus.jpg'
import nepal from "../../Assests/nepal.png"
import india from "../../Assests/india.jpeg"

const AboutUs = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto flex flex-col items-center">
        <img src={AboutusImg} alt="" className="w-1/2 mb-8 rounded-lg" />
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-4 mb-4">About Us</h1>
          <p className="text-lg px-16 mb-8">
          Lumbini has been established to tap the gaps currently existing in the area of technical support agency for development sector and other small and medium business owners. The organization addresses imminent social (Health, Education, Livelihood, Right & Entitlement); Environmental (Pollution, Sanitation & Hygiene, Waste Management, Water, vegetation); Energy conservation and e ciency (Solar and etc); Insurance; Human Resource; Financial & Statutory; Research & Documentation and Skill Development issues. We are into NABH, ISO and other Quality Management System Certi cation services. It works on consumer products/goods quality and supply-chain management. Lumbini support social entrepreneur to generate the ideas and implementation of those ideas in the  eld. The organization’s uniqueness is to provide complete solutions to NGO/Trust/Company working within the country and beyond the border.
We value Quality, Promptness and Customized services to our clients.
          </p>
        </div>
        <div className="text-center bg-green-100 py-6 px-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Areas of Operation</h2>
          <p className="text-lg  px-10">
          The currently organization is operational in Nepal and state of Bihar, Uttar Pradesh, West Bengal, Jharkhand, Uttarakhand, Delhi and Rajasthan.
          <div className='flex items-center px-10 pt-10'>
          <img className=' pl-60 px-10'src={india} alt='india'/>
          <img className='px-10'src={nepal} alt='nepal'/>
          </div>
          </p>
        </div>
        <div className="text-center bg-blue-100 py-6 px-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg px-10">
          The organization is headed by a visionary and experienced leader. The team consists of experts from various domain of expertise having multi-year practical experience.
We have experts in the domain of health, hospital planning and Quality Management System Certi cation, education, livelihood, insurance,  nance, institutional capacity building, community mobilization, public-private- partnership, procurement & supplies and etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
