import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

// Top categories with their images and counts
const categories = [
  {
    id: 1,
    name: 'Clothes',
    count: 25,
    image: 'https://ext.same-assets.com/3049334603/1954552662.png'
  },
  {
    id: 2,
    name: 'Footwear',
    count: 52,
    image: 'https://ext.same-assets.com/3049334603/580116370.png'
  },
  {
    id: 3,
    name: 'Jewelry',
    count: 40,
    image: 'https://ext.same-assets.com/3049334603/2220625996.png'
  },
  {
    id: 4,
    name: 'Perfume',
    count: 35,
    image: 'https://ext.same-assets.com/3049334603/3630320912.png'
  }
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Top Categories</h2>
        <p className="section-subtitle">Discover the most popular categories chosen by our customers</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link href={`/categories/${category.id}`} key={category.id}>
              <Card className="overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  <div className="bg-blue-100 p-6 flex justify-center items-center">
                    <img src={category.image} alt={category.name} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.count} Products</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
