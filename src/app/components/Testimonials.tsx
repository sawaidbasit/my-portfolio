"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Hassan Mujtaba",
    designation: "Founder, TechTs",
    review:
      "I was thoroughly impressed by the professionalism and timely delivery. The project was completed exactly as expected. Highly appreciated!",
  },
  {
    id: 2,
    name: "Haris Raza",
    designation: "Freelancer & Client",
    review:
      "Working with him was a great experience. As a freelancer myself, I was impressed by his skills, communication, and the final output.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-10 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">
          Testimonials
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-all 
      hover:shadow-2xl hover:border-gray-600"
              >
                <h3 className="text-xl font-semibold mt-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {testimonial.designation}
                </p>
                <p className="my-4 text-gray-300 italic">
                  &quot;{testimonial.review}&quot;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
