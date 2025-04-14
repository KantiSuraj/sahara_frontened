import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Star } from 'lucide-react';

// Define product type
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: 'Womens T-Shirt',
    price: 76.00,
    rating: 4.5,
    image: 'https://ext.same-assets.com/3049334603/2369812464.jpeg',
    isNew: true,
    category: 'featured'
  },
  {
    id: 2,
    name: 'Women Leather Shoes',
    price: 64.00,
    originalPrice: 78.00,
    rating: 4.2,
    image: 'https://ext.same-assets.com/3049334603/3081223028.jpeg',
    isSale: true,
    category: 'featured'
  },
  {
    id: 3,
    name: 'Girls Nylon Purse',
    price: 59.00,
    rating: 4.8,
    image: 'https://ext.same-assets.com/3049334603/334153140.jpeg',
    category: 'new'
  },
  {
    id: 4,
    name: 'Round Neck T-Shirt',
    price: 46.00,
    rating: 4.0,
    image: 'https://ext.same-assets.com/3049334603/3474038737.jpeg',
    isNew: true,
    category: 'top'
  },
  {
    id: 5,
    name: 'Leather Handbag',
    price: 82.00,
    originalPrice: 95.00,
    rating: 4.7,
    image: 'https://ext.same-assets.com/3049334603/557926526.jpeg',
    isSale: true,
    category: 'new'
  },
  {
    id: 6,
    name: 'Blue Denim Jacket',
    price: 129.00,
    rating: 4.3,
    image: 'https://ext.same-assets.com/3049334603/2283962858.jpeg',
    category: 'top'
  },
  {
    id: 7,
    name: 'Stylish Sunglasses',
    price: 39.00,
    rating: 4.6,
    image: 'https://ext.same-assets.com/3049334603/4075499556.jpeg',
    isNew: true,
    category: 'featured'
  },
  {
    id: 8,
    name: 'Women Watch',
    price: 115.00,
    rating: 4.4,
    image: 'https://ext.same-assets.com/3049334603/988855479.jpeg',
    category: 'new'
  }
];

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0 relative">
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-ekka-info z-10">New</Badge>
        )}
        {product.isSale && (
          <Badge className="absolute top-2 left-2 bg-ekka-primary z-10">Sale</Badge>
        )}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 xs:h-56 sm:h-64 object-cover object-center transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button size="icon" variant="secondary" className="rounded-full bg-white text-ekka-dark">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full bg-white text-ekka-dark">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="font-medium text-ekka-dark text-sm sm:text-base line-clamp-1">{product.name}</h3>
          <div className="flex items-center mt-1">
            {Array(5).fill(0).map((_, i) => (
              <Star
                key={`star-${product.id}-${i}`}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-gray-500 text-xs sm:text-sm ml-1">({product.rating})</span>
          </div>
          <div className="mt-2 flex items-center">
            <span className="font-bold text-ekka-primary text-sm sm:text-base">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through ml-2 text-xs sm:text-sm">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-0">
        <Button variant="link" asChild className="w-full text-ekka-dark hover:text-ekka-primary text-xs sm:text-sm py-2">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProductsSection = () => {
  return (
    <section className="section-padding py-10 xs:py-12 sm:py-16">
      <div className="container-custom">
        <h2 className="section-title text-xl xs:text-2xl md:text-3xl">Our Top Collection</h2>
        <p className="section-subtitle text-xs sm:text-sm md:text-base">Browse our top selling products across all categories</p>

        <Tabs defaultValue="all" className="mx-auto max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-6 sm:mb-10">
          <TabsList className="grid grid-cols-4 h-auto">
            <TabsTrigger value="all" className="py-1.5 sm:py-2 text-xs sm:text-sm">All</TabsTrigger>
            <TabsTrigger value="new" className="py-1.5 sm:py-2 text-xs sm:text-sm">New Arrivals</TabsTrigger>
            <TabsTrigger value="featured" className="py-1.5 sm:py-2 text-xs sm:text-sm">Featured</TabsTrigger>
            <TabsTrigger value="top" className="py-1.5 sm:py-2 text-xs sm:text-sm">Top Sellers</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 sm:mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-6 sm:mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
              {products.filter(p => p.category === 'new' || p.isNew).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-6 sm:mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
              {products.filter(p => p.category === 'featured').map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="top" className="mt-6 sm:mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
              {products.filter(p => p.category === 'top').map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 sm:mt-10">
          <Button
            asChild
            variant="outline"
            className="border-ekka-primary text-ekka-primary hover:bg-ekka-primary/10 px-4 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm"
          >
            <Link href="/shop">Shop All Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
