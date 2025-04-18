import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

// Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  position: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    comment: 'Ekka has transformed my shopping experience. The quality of products and the smooth checkout process make it my go-to online store.',
    rating: 5,
    position: 'Verified Buyer'
  },
  {
    id: 2,
    name: 'Sarah Miller',
    avatar: 'https://i.pravatar.cc/150?img=5',
    comment: 'I appreciate the wide range of products available at Ekka. The delivery is always on time, and the items match exactly what is displayed on the website.',
    rating: 4,
    position: 'Loyal Customer'
  },
  {
    id: 3,
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=3',
    comment: 'The customer service is exceptional! When I had an issue with my order, the team resolved it promptly. Will definitely shop here again.',
    rating: 5,
    position: 'Verified Buyer'
  },
  {
    id: 4,
    name: 'Emma Johnson',
    avatar: 'https://i.pravatar.cc/150?img=10',
    comment: "Ekka offers the best collection of fashion items I've found online. The quality exceeds my expectations every time.",
    rating: 5,
    position: 'Fashion Enthusiast'
  },
  {
    id: 5,
    name: 'David Wilson',
    avatar: 'https://i.pravatar.cc/150?img=12',
    comment: 'Great pricing and even better products. The website is intuitive to navigate, making shopping a breeze.',
    rating: 4,
    position: 'Verified Buyer'
  }
];

// Star Rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={`star-rating-${i}`}
          className={`h-3 w-3 sm:h-4 sm:w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

// Testimonial Card component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-3 sm:p-4 md:p-6">
        <div className="mb-3 sm:mb-4">
          <StarRating rating={testimonial.rating} />
        </div>
        <blockquote className="text-gray-700 mb-4 sm:mb-6 italic text-xs sm:text-sm line-clamp-4 sm:line-clamp-none">
          "{testimonial.comment}"
        </blockquote>
        <div className="flex items-center">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border-2 border-white shadow-sm">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-3 md:ml-4">
            <p className="font-semibold text-xs sm:text-sm">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-10 xs:py-12 sm:py-16 md:py-20 bg-background">
      <div className="container-custom">
        <h2 className="section-title text-xl xs:text-2xl md:text-3xl">Client Reviews</h2>
        <p className="section-subtitle text-xs sm:text-sm md:text-base">What our customers say about us</p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-xs xs:max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 xs:basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-4">
            <CarouselPrevious className="static sm:relative transform-none mx-1 sm:mx-0 h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="static sm:relative transform-none mx-1 sm:mx-0 h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
