import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center opacity-10" />
      <div className="container-custom py-12 xs:py-16 sm:py-20 md:py-28 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block text-ekka-primary font-medium text-sm xs:text-base mb-1 xs:mb-2">
              Fresh Arrivals, Just In!
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ekka-dark mb-3 xs:mb-4">
            Discover the Season’s Best Picks
            </h1>
            <p className="text-gray-600 text-sm xs:text-base mb-6 xs:mb-8 max-w-lg mx-auto md:mx-0">
            Explore our handpicked selection of fresh produce, pantry staples, and daily essentials.
            From farm-fresh fruits to gourmet treats, find everything you need to nourish your home and lifestyle.
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
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D"
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
