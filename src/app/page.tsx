'use client'
import React, { useState } from "react";
import Testimonials from "./component/testimonial";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./card.css"
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const product=[
    { name: "Taba (Bamboo Shoot)", image: "bambooshoot.jpg" },
    { name: "Dallay Khorsani (Red cherry Pepper Chilli)", image: "DalleKhorsani.jpg" },
    { name: "Ghee (Cow Ghee)", image: "ghee.jpg" },
    { name: "Mauri ko Maha (Honey)", image: "honey.jpeg" },
    { name: "Kodo ko Pitho (Millet Powder)", image: "millet.jpg" },
    { name: "Bhakimlo ko chuk (Sumac)", image: "sumac.jpg" },
    { name: "Besar (Turmeric)", image: "Turmeric.jpg" },
    { name: "PGundruk (Pickled leafy vegetables)", image: "pickled.jpeg" },
    { name: "Fapar ko Pitho (Buckwheat Powder)", image: "buckweet.jpeg" },
    { name: "Makai ka Chamal(Maize Rice)", image: "maze.jpeg" }
  ];
  return (
    <div className="min-h-screen bg-green-100 text-gray-900 font-comic relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4  ">
      <div className=" w-full flex justify-between items-center  bg-white px-3 py-2 rounded border-b-5 border-green-900 shadow-lg">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Organic World Logo" className="w-[120px] h-[50px] sm:w-[150px] sm:h-[70px]"></img>
          {/* <h1 className="text-2xl font-extrabold text-green-800 tracking-wide drop-shadow-md font-organic">Organic World</h1> */}
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-lg font-medium text-green-900">
          {["About Us", "Products", "Testimonials", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-green-600 transition duration-300 ease-in-out">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden px-4 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300" 
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      </div>
    </nav>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-green-700 text-white p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden z-50 rounded-r-lg` }>
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setIsSidebarOpen(false)}>
          ✖
        </button>
        <ul className="mt-16 space-y-6 text-xl">
          <li><a href="#aboutus" onClick={() => setIsSidebarOpen(false)}>About Us</a></li>
          <li><a href="#products" onClick={() => setIsSidebarOpen(false)}>Products</a></li>
          <li><a href="#testimonials" onClick={() => setIsSidebarOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsSidebarOpen(false)}>Contact</a></li>
        </ul>
      </div>

      <div className="">
        {/* Hero Section */}
        <section className="text-center h-[65vh] bg-green-600 text-white  rounded-b-lg shadow-xl relative">
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-full">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">🌿 Fresh & Organic Products</h2>
          <p className="mt-4 text-xl">Healthy, sustainable, and chemical-free.</p>
          <button className="mt-6 px-8 py-3 bg-yellow-300 text-green-700 rounded-full font-bold shadow-lg text-xl hover:bg-yellow-400" onClick={() =>{ document.location.href ='tel:917047326677';}}>Shop Now</button>
          </div>
         
          <img 
            src="https://healthybuddha.in/image/catalog/banner/latestjuly21/1_Delivered%20Fresh%20from%20Farms.jpg" 
            alt="Organic Products" 
            className="w-full h-full object-cover "
          />
        </section>

        {/* About Us */}
        <section id="aboutus" className="py-20 px-6 text-center ">
          <h3 className="text-4xl font-bold">About Us</h3>
          <div className="w-full flex items-center justify-center">
          <p className="mt-4 text-[15px] sm:text-2xl sm:max-w-[50vw]">"Organic world is sourced from home-based producers and farmers from the Himalayas.
Our hyperlocal sourcing and delivery model assures that our suppliers receive the full value of their produce, while our customers get the flavour and taste of unadulterated goodness of nature!"</p>
</div>
        </section>

        {/* Products */}
        <section id="products" className="py-20 px-6 text-center bg-white">
          <h3 className="text-4xl font-bold">🛒 Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {product.map((item, index) => (
              <div key={index} className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <img
                src={`./${item.image}`}
                alt="Organic Product"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-green-700">{item.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">
                  Freshly harvested and packed with antioxidants for a healthy lifestyle.
                </p>
                <div className="mt-3 flex items-center justify-center">
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-md hover:bg-green-700 transition" onClick={() =>{ document.location.href ='tel:917047326677';}}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials/>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-6" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          
            <Image
              src="/l.png"
              alt="Organic World Logo"
              width={100}
              height={200}
              
            />
          
          <h2 className="text-xl font-semibold">Organic World</h2>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-lg font-medium">Contact Us</p>
          <p><FaEnvelope className="inline-block mr-2" /> organicgiftofnature@gmail.com</p>
          <p><FaPhone className="inline-block mr-2" /> +91-7047326677</p>
          <p><FaMapMarkerAlt className="inline-block mr-2" /> Gangtok | Kathmandu | Guwahti</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <span  className="hover:text-green-300 flex items-center" onClick={() =>{ document.location.href ='tel:917047326677';}}><FaFacebook className="mr-2" /> Facebook</span>
          <span className="hover:text-green-300 flex items-center" onClick={() =>{ document.location.href ='tel:917047326677';}}><FaInstagram className="mr-2" /> Instagram</span>
          <span  className="hover:text-green-300 flex items-center" onClick={() =>{ document.location.href ='tel:917047326677';}}><FaTwitter className="mr-2" /> Twitter</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} Organic World. All rights reserved.
      </div>
    </footer>
      </div>
      
    </div>
  );
};

export default Home;
