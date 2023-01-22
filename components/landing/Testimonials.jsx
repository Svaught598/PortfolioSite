import React from 'react';
import Carousel from '../ui/Carousel';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Steven has been an incredible mentor! My development ability has gotten immeasurably better since I started working with him.", 
      author: "Jacob Pixler", 
      title: "Software Developer",
    },
    {
      text: "I bought a Sugar Glider from Steven's Sugar Glider Emporium. Steven made the buying process super simple and painless.", 
      author: "Michael Ross", 
      title: "Sugar Glider Enthusiast",
    },
    {
      text: "I appreciate their prompt and professional communication, and I am grateful for the positive impact they have had on my [business/personal life]. I look forward to continuing my relationship with [Company Name] in the future.", 
      author: "ChatGPT3", 
      title: "Glorified Transistor Collection",
    },
    {
      text: "Why do you need a testimonial from me? I have a headache, leave me alone. ", 
      author: "Alexandria Vaught", 
      title: "My Wife",
    },
  ];

  return (
    <section id="testimonials-section" className="bg-gradient-to-br from-charcoal to-persian-green h-screen">
      <h2 className="w-10/12 sm:w-8/12 lg:w-10/12 mx-auto text-center pt-12 lg:pt-24 font-bungee text-sandy-brown text-3xl lg:p-0 lg:text-5xl z-50">
        What others have to say
      </h2>
      <p className="w-10/12 sm:w-8/12 lg:w-10/12 mx-auto text-center pb-12 lg:pb-24 font-bungee text-sandy-brown lg:p-0 text-sm z-50">
        (100% factual and totally not made up)
      </p>

      <div className="w-screen h-auto">
        <Carousel items={testimonials} />
      </div>
    </section>
  );
}