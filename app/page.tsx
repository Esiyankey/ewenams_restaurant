"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Phone, Send, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Footer from "./(components)/footer";

// Sample food images data
const foodImages = [
  {
    src: "/images/sandwich.jpg",
    alt: "Elegantly plated dish with pear and garnishes",
    tag: "Fashion",
  },
  {
    src: "/images/waffles.jpg",
    alt: "Grilled salmon with herbs",
    tag: "Seafood",
  },
  {
    src: "/images/french-fries.jpg",
    alt: "Fresh vegetable salad",
    tag: "Healthy",
  },
  {
    src: "/images/grilled-chicken.jpg",
    alt: "Chocolate dessert with berries",
    tag: "Dessert",
  },
  {
    src: "/images/brownie.jpg",
    alt: "Chocolate dessert with berries",
    tag: "Dessert",
  },
  {
    src: "/images/cake.jpg",
    alt: "Chocolate dessert with berries",
    tag: "Dessert",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + foodImages.length) % foodImages.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Calculate visible slides (current and next)
  const visibleSlides = [];
  visibleSlides.push(currentIndex);
  visibleSlides.push((currentIndex + 1) % foodImages.length);

  return (
    <div className="">
      <div className=" h-[750px] bg-[#233100] w-full pt-20 ">
        <div className="max-w-7xl mx-auto flex ">
          <section className=" flex gap-20 flex-col md:flex-row">
            {/* Text that overlaps the image */}
            <div className="">
              <h2 className="text-5xl md:mt-20 p-4 md:p-0 text-center md:text-start text-white md:text-6xl lg:text-8xl font-serif leading-tight">
                Healthy Eating
                <br />
                is important
                <br />
                part of lifestyle
              </h2>
              <p className="text-lg text-white text-center md:text-start p-2 md:p-0 opacity-80 max-w-md mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>
            {/* Image positioned behind text */}

            <div className="">
              <Image
                src="/images/hero-image-1.png"
                alt="Delicious steak dish with onions"
                width={500}
                height={400}
                className="md:rounded-sm"
              />
            </div>
          </section>
        </div>
      </div>
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
        {/* Decorative leaves image */}
        <div className="absolute top-0 right-0 w-1/3 md:w-1/4">
          <Image
            src="/images/flower.png"
            alt="Decorative eucalyptus leaves"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Menu heading and description */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 relative z-10">
            <h2 className="text-5xl md:text-6xl font-serif mb-4">Our Menu</h2>
            <p className="text-gray-600 max-w-md">
              This is a section of your menu. Give your section a brief
              description
            </p>
          </div>

          {/* Menu items grid */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-20 relative z-10">
            {/* Menu item 1 */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">$20</div>
                <div className="border-t border-dotted border-gray-400 flex-grow mx-2"></div>
              </div>
              <h3 className="text-3xl font-serif mb-3">
                Deep Sea Snow White Cod Fillet
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Pink dot */}
              <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-8 md:translate-x-4 md:-translate-y-8">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              </div>
            </div>

            {/* Menu item 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">$22</div>
                <div className="border-t border-dotted border-gray-400 flex-grow mx-2"></div>
              </div>
              <h3 className="text-3xl font-serif mb-3">
                Steak With Rosemary Butter
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Menu item 3 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">$18</div>
                <div className="border-t border-dotted border-gray-400 flex-grow mx-2"></div>
              </div>
              <h3 className="text-3xl font-serif mb-3">Cucumber Salad</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Menu item 4 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">$90</div>
                <div className="border-t border-dotted border-gray-400 flex-grow mx-2"></div>
              </div>
              <h3 className="text-3xl font-serif mb-3">Natural Wine Pairing</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-[#f0f2e6] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left side with chef image */}
            <div className="relative">
              {/* Top left leaf decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 -translate-x-1/4 -translate-y-1/4"></div>

              <Image
                src="/images/pizza.jpg"
                alt="pizza"
                width={700}
                height={500}
                className="rounded-md"
              />
            </div>

            {/* Right side with text */}
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-serif mb-6">
                Delicious
                <br />
                Pizza&apos;s
              </h2>
              <p className="text-gray-700 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </p>
              <p className="text-gray-700">
                Turpis egestas ultricies purus auctor tincidunt lacus nunc.
              </p>

              {/* Bottom right leaf decoration */}
              <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-1/4 translate-y-1/4"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Premium Quality */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-[#f0f2e6] flex items-center justify-center mb-6 overflow-hidden relative">
                <Image
                  src="/images/jollof.jpg"
                  alt="jollof"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">Rice Dishes</h3>
              <p className="text-gray-600 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>

            {/* Seasonal Vegetables */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-[#f0f2e6] flex items-center justify-center mb-6 overflow-hidden relative">
                <Image
                  src="/images/kontonmire.jpg"
                  alt="kontonmire"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">Stews</h3>
              <p className="text-gray-600 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>

            {/* Fresh Fruit */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-[#f0f2e6] flex items-center justify-center mb-6 overflow-hidden relative">
                <Image
                  src="/images/peanut soup.jpg"
                  alt="peanut soup"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">Seasoned Soups</h3>
              <p className="text-gray-600 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif">Our Ingredients</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-10 w-10 border-gray-300"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-10 w-10 border-gray-300"
                disabled={isAnimating}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>

          <div ref={sliderRef} className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {foodImages.map((image, index) => (
                <div key={index} className="min-w-[40%] px-2">
                  <div className="relative rounded-md overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover aspect-square"
                    />
                    <div className="absolute top-4 right-4 bg-[#5c6d20] text-white px-3 py-1 text-sm">
                      {image.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {foodImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-[#5c6d20]"
                    : "w-2 bg-gray-300"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="flex min-h-screen items-center justify-center bg-[#f0f2e9] p-4">
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Place Your Order
            </h1>
            <p className="text-muted-foreground">
              Quick and easy - direct to our kitchen
            </p>
          </div>

          <div className="space-y-4 pt-4 md:w-xl  p-6 rounded-sm">
            <div className="grid gap-4 w-full">
              <Select defaultValue="meal" >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select meal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meal">Main Course</SelectItem>
                  <SelectItem value="appetizer">Appetizer</SelectItem>
                  <SelectItem value="dessert">Dessert</SelectItem>
                  <SelectItem value="beverage">Beverage</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="2">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Number of items" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Item</SelectItem>
                  <SelectItem value="2">2 Items</SelectItem>
                  <SelectItem value="3">3 Items</SelectItem>
                  <SelectItem value="4">4+ Items</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Special instructions or details about your order..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2 pt-4">
              <Link href="#">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Order via WhatsApp
                </Button>
              </Link>

              <div className="flex items-center justify-center space-x-2 pt-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Or call us: +233 256 778 060</span>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4 text-sm md:w-xl">
            <div className="flex items-center justify-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
              <p className="font-medium">Fast delivery within 30-45 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Calories Energy Balance</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starters Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/sandwich.jpg"
              alt="Starters"
              width={400}
              height={400}
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <h2 className="text-xl font-semibold text-[#3c4a2a] bg-[#f5f5f5]/80 px-3 py-1 rounded">Starters</h2>
              <ArrowRight className="ml-2 w-5 h-5 text-[#3c4a2a] bg-[#f5f5f5]/80 p-0.5 rounded" />
            </div>
          </div>
        </div>

        {/* Mains Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/juice.jpg"
              alt="Mains"
              width={400}
              height={400}
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <h2 className="text-xl font-semibold text-[#3c4a2a] bg-[#f5f5f5]/80 px-3 py-1 rounded">Mains</h2>
              <ArrowRight className="ml-2 w-5 h-5 text-[#3c4a2a] bg-[#f5f5f5]/80 p-0.5 rounded" />
            </div>
          </div>
        </div>

        {/* Soups Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/brownie.jpg"
              alt="Soups"
              width={400}
              height={400}
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <h2 className="text-xl font-semibold text-[#3c4a2a] bg-[#f5f5f5]/80 px-3 py-1 rounded">Soups</h2>
              <ArrowRight className="ml-2 w-5 h-5 text-[#3c4a2a] bg-[#f5f5f5]/80 p-0.5 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
