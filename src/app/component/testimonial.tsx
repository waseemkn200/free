"use client";

import React, { useRef, useState } from "react";

const testimonials = [
  { name: "Jane Doe", text: "Absolutely love the freshness and quality! 🌱" },
  { name: "John Smith", text: "Best organic products I’ve ever purchased! 🍃" },
  { name: "Emily Brown", text: "Great customer service and fast delivery! 🚀" },
  { name: "Michael Lee", text: "The taste and purity are unmatched! 😍" },
  { name: "Sophia Wilson", text: "Highly recommend this store to everyone! 💯" }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    if (scrollRef.current) {
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="testimonials" className="py-20 px-7 text-center bg-gradient-to-r from-green-100 to-green-50 rounded-lg ">
      <h3 className="text-2xl md:text-3xl font-bold text-green-800">💬 What Our Customers Say</h3>
      <div
        ref={scrollRef}
        className="mt-6 mx-auto overflow-hidden flex space-x-4 p-4 cursor-grab active:cursor-grabbing"
        style={{
          scrollSnapType: "x mandatory",
          display: "flex",
          gap: "12px",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="min-w-[90%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] p-4 bg-white rounded-2xl shadow-lg scroll-snap-align-center transition-transform transform hover:scale-105">
            <p className="italic text-base md:text-lg text-gray-700 break-words whitespace-normal">"{testimonial.text}"</p>
            <p className="font-semibold mt-3 text-sm md:text-base text-green-900">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
