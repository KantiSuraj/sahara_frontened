
import React from 'react';
import CategorySection from '@/components/home/CategorySection';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Categories</h1>
        {/* <p className="mt-4 text-muted-foreground">Explore our product categories</p> */}
        <CategorySection />
      </div>
    </div>
  );
}

