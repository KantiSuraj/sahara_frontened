
import React from 'react';
import ProductsSection from '@/components/home/ProductsSection';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-10">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="mt-4 text-muted-foreground">View our featured products</p>
        <ProductsSection/>
      </div>
    </div>
  );
}

