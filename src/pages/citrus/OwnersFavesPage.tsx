import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function OwnersFavesPage() {
  // Setup 10 buttons
  const items = Array.from({ length: 10 }, (_, i) => `Favorite ${i + 1}`);

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary/5 py-4">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/citrus"><ArrowLeft size={16} /> Back to Citrus</Link>
          </Button>
        </div>
      </div>
      
      <HeroSection 
        title="Owner's Faves"
        subtitle="Our personal recommendations for your orchard. These will thrive here and taste amazing"
        imageUrl="Citrus on Steps.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Button key={index} variant="outline" className="h-auto py-8 text-lg font-serif hover:bg-primary hover:text-white transition-colors">
              {item}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
