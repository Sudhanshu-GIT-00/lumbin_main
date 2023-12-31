import React, { useState } from "react";
import ContactUsForm from "../ContactUsSmall";
import ConnectModal from "../ConnectModal";
import Headerimg from "../../Assests/Header2.jpg"
import cardimg from "../../Assests/company.png"
import service from "../../Assests/servicehome.jpg"
import service2 from "../../Assests/servicehome2.jpg"
import service3 from "../../Assests/servicehome3.jpg"
import service4 from "../../Assests/servicehome4.jpg"
import service5 from "../../Assests/servicehome5.jpg"
import service6 from "../../Assests/servicehome6.jpg"
import service7 from "../../Assests/servicehome7.jpg"
import service8 from "../../Assests/servicehome8.jpg"
import service9 from "../../Assests/servicehome9.jpg"
import service11 from "../../Assests/servicehome11.jpg"
const Dashboard=()=>{
    return(
    <div>
    
    <div className="flex items-center text-left bg-white">
      <div className="container mx-auto px-4 py-8 lg:py-16 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pt-8">
          <h1 className="text-4xl font-bold mb-4">Customized Consulting for Unleashing Success</h1>
          <p className="text-xl text-gray-600 mb-8">Partner with us to strategically transform your business, unlocking new opportunities and achieving remarkable results</p>
          <ConnectModal/>
          
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 ml-10">
          <img className="w-300 h-300 object-cover" src={Headerimg} alt="Image" />
        </div>
      </div>
    </div>
    <div className="bg-slate-950 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-300 text-center font-bold mb-2">Services</h2>
        <p className="text-center text-gray-600 mb-8">Services we offer</p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className="bg-red-500 text-white p-6 rounded-lg">
              <img className="pb-4"src={service11} alt="img" />
              <h3 className="text-lg font-bold mb-2">NGO Consultancy</h3>
              <p className="text-gray-200">NGO Consultancy is key area where our organization is providing One Stop Solution to various NGOs across India. We are into business development, proposal writing, documentation, digital support and etc</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className="bg-purple-500 text-white p-6 rounded-lg">
              <img className="pb-4"src={service5} alt="img" />
              <h3 className="text-lg font-bold mb-2">Human Resource Solution</h3>
              <p className="text-gray-200">Human Resource (HR) Solution is being provided to our partners as per requirement. We have track record of providing quality and stable staff with due diligence</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <img className="pb-4 "src={service7} alt="img" />
              <h3 className="text-lg font-bold mb-2"> RESEARCH/STUDIES</h3>
              <p className="text-gray-200">Research/Studies team of the organization has rich experience in supporting partners in questionnaire designing, data collection (qualitative and quantitative) & its analysis and final quality report preparation.</p>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <img className="pb-4 "src={service6} alt="img" />
              <h3 className="text-lg font-bold mb-2">Technical Assistance</h3>
              <p className="text-gray-200">Technical Assistance to private and public sector in planning, execution, MIS development, monitoring & assessment of national programs/Schemes at the ground level</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className="bg-yellow-500 text-white p-6 rounded-lg">
              <img className="pb-4 "src={service9} alt="img" />
              <h3 className="text-lg font-bold mb-2">Supply Chain Management</h3>
              <p className="text-gray-200">Supply – Chain Management solution provided to clients in the most streamlined and cost-effective way possible. It maximizes customer value and gain a competitive advantage in the marketplace</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <img className="pb-4 "src={service8} alt="img" />
              <h3 className="text-lg font-bold mb-2">Hospital & Health</h3>
              <p className="text-gray-200">Hospital & Health Planning and Quality Certification professionals of Lumbini has decades of experience to provide management solution to cope with changing healthcare environment. We are into NABH, ISO and other Quality Management System certification services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover blur"
          src="image.jpg"
          alt="Background"
        />
      </div>
      <div className="bg-opacity-75 bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-white font-bold pt-4 mb-10">About Us</h2>
          <p className="text-white text-lg pb-16">
          Lumbini has been established to tap the gaps currently existing in the area of technical support agency for development sector and other small and medium business owners. The organization addresses imminent social (Health, Education, Livelihood, Right & Entitlement); Environmental (Pollution, Sanitation & Hygiene, Waste Management, Water, vegetation); Energy conservation and e ciency (Solar and etc); Insurance; Human Resource; Financial & Statutory; Research & Documentation and Skill Development issues. We are into NABH, ISO and other Quality Management System Certi cation services. It works on consumer products/goods quality and supply-chain management. Lumbini support social entrepreneur to generate the ideas and implementation of those ideas in the  eld. The organization’s uniqueness is to provide complete solutions to NGO/Trust/Company working within the country and beyond the border.
We value Quality, Promptness and Customized services to our clients.

            
          </p>
        </div>
      </div>
      </div>
      <ContactUsForm/>

      </div>
    );
};
export default Dashboard