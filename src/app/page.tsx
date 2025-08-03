/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { 
  Heart, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  ChevronRight,
  ShoppingCart,
  Users,
  Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import ProductCard from '@/components/ProductCard';
import CartIcon from '@/components/cart/CartIcon';
import CartSidebar from '@/components/cart/CartSidebar';
import BannerCarousel from '@/components/BannerCarousel';
import { useState } from 'react';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Artisan Sourdough",
      description: "Traditional sourdough bread with a crispy crust and tangy flavor",
      price: "৳6.50",
      image: "/images/product-1.jpg",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: "Chocolate Croissant",
      description: "Buttery croissant filled with rich dark chocolate",
      price: "৳4.25",
      image: "/images/product-2.jpg",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "Blueberry Muffin",
      description: "Fresh blueberries in a moist, tender muffin",
      price: "৳3.75",
      image: "/images/product-3.jpg",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Cinnamon Roll",
      description: "Soft, fluffy roll with cinnamon sugar and cream cheese frosting",
      price: "৳4.50",
      image: "/images/product-4.jpg",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 5,
      name: "French Baguette",
      description: "Classic French bread with a golden crust and soft interior",
      price: "৳5.25",
      image: "/images/product-5.jpg",
      rating: 4.8,
      reviews: 98
    },
    {
      id: 6,
      name: "Danish Pastry",
      description: "Flaky pastry with sweet filling and delicate icing",
      price: "৳4.75",
      image: "/images/product-6.jpg",
      rating: 4.7,
      reviews: 134
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Heart, value: "100%", label: "Fresh Daily" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-800">Sweet Dreams</h1>
              <span className="ml-2 text-sm text-amber-600">Bakery</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</Link>
              <Link href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Products</Link>
              <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <CartIcon onClick={() => setIsCartOpen(true)} className="hidden md:flex" />
              <button className="hidden md:flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                <span>Order Now</span>
              </button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <section id="home" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BannerCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-amber-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Featured Products</h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Our most popular items, baked fresh every morning with premium ingredients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Our bakery interior and baking process"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                Founded in 2009, Sweet Dreams Bakery has been serving our community 
                with the finest artisan breads and pastries. Our master bakers combine 
                traditional techniques with modern innovation to create unforgettable 
                flavors.
              </p>
              <p className="text-lg text-amber-800 mb-8 leading-relaxed">
                We source only the highest quality ingredients and bake everything 
                fresh daily. From our signature sourdough to our decadent pastries, 
                every item is crafted with passion and attention to detail.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span className="text-amber-800">Open Daily 6AM-8PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-amber-600" />
                  <span className="text-amber-800">Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Our passionate bakers and staff who make every visit special
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/team-1.jpg"
                  alt="Master Baker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Sarah Johnson</h3>
              <p className="text-amber-600 font-medium">Master Baker</p>
              <p className="text-gray-600 mt-2">15+ years of experience in artisan bread making</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/team-2.jpg"
                  alt="Pastry Chef"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Michael Chen</h3>
              <p className="text-amber-600 font-medium">Pastry Chef</p>
              <p className="text-gray-600 mt-2">Specializes in French pastries and desserts</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/team-3.jpg"
                  alt="Cake Designer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Emma Rodriguez</h3>
              <p className="text-amber-600 font-medium">Cake Designer</p>
              <p className="text-gray-600 mt-2">Creates beautiful custom cakes for special occasions</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/team-4.jpg"
                  alt="Customer Service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">David Wilson</h3>
              <p className="text-amber-600 font-medium">Customer Service</p>
              <p className="text-gray-600 mt-2">Ensures every customer has a wonderful experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Do not just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/testimonial-1.jpg"
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;The best sourdough bread I&apos;ve ever tasted! Fresh, crusty, and absolutely delicious.&rdquo;
              </p>
              <h4 className="font-semibold text-amber-900">Jennifer Smith</h4>
              <p className="text-sm text-amber-600">Regular Customer</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/testimonial-2.jpg"
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Their pastries are heavenly! I order them for all our office celebrations.&rdquo;
              </p>
              <h4 className="font-semibold text-amber-900">Robert Davis</h4>
              <p className="text-sm text-amber-600">Office Manager</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/testimonial-3.jpg"
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Amazing service and the staff is so friendly. My go-to place for fresh bread!&rdquo;
              </p>
              <h4 className="font-semibold text-amber-900">Maria Garcia</h4>
              <p className="text-sm text-amber-600">Local Resident</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/testimonial-4.jpg"
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;The custom cake they made for my daughter&apos;s birthday was absolutely perfect!&rdquo;
              </p>
              <h4 className="font-semibold text-amber-900">Lisa Thompson</h4>
              <p className="text-sm text-amber-600">Happy Parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Visit Us</h2>
            <p className="text-xl text-amber-800">
              Come experience the warmth and aroma of our bakery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Location</h3>
              <p className="text-amber-800">
                123 Baker Street<br />
                Downtown District<br />
                City, State 12345
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Hours</h3>
              <p className="text-amber-800">
                Monday - Friday: 6AM - 8PM<br />
                Saturday: 7AM - 7PM<br />
                Sunday: 7AM - 6PM
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Contact</h3>
              <div className="text-amber-800">
                <p>Phone: (555) 123-4567</p>
                <p>Email: hello@sweetdreams.com</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Instagram className="w-6 h-6 text-amber-600 hover:text-amber-700 cursor-pointer" />
                  <Facebook className="w-6 h-6 text-amber-600 hover:text-amber-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sweet Dreams</h3>
              <p className="text-amber-200">
                Crafting delicious memories one bite at a time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200">
                <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Artisan Breads</li>
                <li>Fresh Pastries</li>
                <li>Custom Cakes</li>
                <li>Seasonal Items</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-amber-200 hover:text-white cursor-pointer" />
                <Facebook className="w-6 h-6 text-amber-200 hover:text-white cursor-pointer" />
              </div>
              <p className="text-amber-200 mt-4">
                Subscribe to our newsletter for updates and special offers.
              </p>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy;Sweet Dreams Bakery 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
