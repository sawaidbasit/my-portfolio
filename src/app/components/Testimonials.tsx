"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Tech Solutions",
    image: "/images/john.png", // Replace with actual image path
    review:
      "An exceptional frontend developer with an eye for design and performance. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Project Manager, Web Agency",
    image: "/images/jane.png",
    review:
      "Outstanding work! The attention to detail and responsiveness in his projects are top-notch.",
  },
  {
    id: 3,
    name: "Michael Lee",
    designation: "Founder, Startup Inc.",
    image: "/images/michael.png",
    review:
      "Professional and highly skilled. My website turned out better than I imagined!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">Testimonials</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full border-2 border-orange-500"
                />
                <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.designation}</p>
                <p className="my-4 text-gray-300 italic">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
