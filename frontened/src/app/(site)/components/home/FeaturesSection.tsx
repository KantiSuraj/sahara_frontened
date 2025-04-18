import type React from 'react';
import { Truck, ShieldCheck, HeadphonesIcon, CreditCard } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $75',
    icon: Truck
  },
  {
    id: 2,
    title: 'Secure Payment',
    description: 'Safe & reliable payment methods',
    icon: CreditCard
  },
  {
    id: 3,
    title: 'Money Back Guarantee',
    description: '100% money back guarantee',
    icon: ShieldCheck
  },
  {
    id: 4,
    title: 'Customer Support',
    description: '24/7 dedicated customer service',
    icon: HeadphonesIcon
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-10 xs:py-12 sm:py-16 bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-card p-3 xs:p-4 sm:p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full bg-ekka-primary/10 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-ekka-primary" />
              </div>
              <h3 className="font-semibold text-sm xs:text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs xs:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
