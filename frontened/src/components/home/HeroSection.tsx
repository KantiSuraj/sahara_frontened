import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/3049334603/3474038737.jpeg')] bg-cover bg-center opacity-10" />
      <div className="container-custom py-12 xs:py-16 sm:py-20 md:py-28 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block text-ekka-primary font-medium text-sm xs:text-base mb-1 xs:mb-2">
              New Fashion Collection
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ekka-dark mb-3 xs:mb-4">
              Discover the Latest Trends
            </h1>
            <p className="text-gray-600 text-sm xs:text-base mb-6 xs:mb-8 max-w-lg mx-auto md:mx-0">
              Explore our curated collection of stylish clothing and accessories for every occasion.
              From casual wear to elegant outfits, find the perfect pieces to express your unique style.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 xs:gap-4">
              <Button
                asChild
                className="bg-ekka-primary hover:bg-ekka-primary/90 px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-6 text-sm xs:text-base w-full xs:w-auto max-w-[200px] xs:max-w-none mx-auto xs:mx-0"
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-ekka-primary text-ekka-primary hover:bg-ekka-primary/10 px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-6 text-sm xs:text-base mt-2 xs:mt-0 w-full xs:w-auto max-w-[200px] xs:max-w-none mx-auto xs:mx-0"
              >
                <Link href="/categories">Explore</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://ext.same-assets.com/3049334603/2369812464.jpeg"
              alt="Fashion model"
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
