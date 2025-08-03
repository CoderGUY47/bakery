'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselData = [
  {
    id: 1,
    image: '/images/carousel-1.jpg',
    title: 'Fresh Artisan Breads',
    subtitle: 'Handcrafted with love every morning',
    description: 'Discover our traditional sourdough, crusty baguettes, and soft sandwich breads made with premium ingredients.'
  },
  {
    id: 2,
    image: '/images/carousel-2.jpg',
    title: 'Delicious Pastries',
    subtitle: 'Sweet treats for every occasion',
    description: 'From buttery croissants to decadent cakes, our pastries are baked fresh daily with the finest ingredients.'
  },
  {
    id: 3,
    image: '/images/service-1.jpg',
    title: 'Custom Cakes',
    subtitle: 'Celebrate with our special creations',
    description: 'Let us create the perfect cake for your birthday, wedding, or any special celebration.'
  },
  {
    id: 4,
    image: '/images/service-2.jpg',
    title: 'Catering Services',
    subtitle: 'Perfect for events and gatherings',
    description: 'We provide catering for corporate events, parties, and special occasions with our signature bakery items.'
  }
];

export default function BannerCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings} className="banner-slider">
        {carouselData.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden rounded-2xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-amber-200">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors">
                      Order Now
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
} 