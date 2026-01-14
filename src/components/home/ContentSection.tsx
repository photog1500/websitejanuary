import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
  centered?: boolean;
}

export function ContentSection({ 
  title, 
  subtitle, 
  children, 
  imageUrl, 
  imageAlt = "Orchard Image", 
  reverse = false,
  centered = false
}: ContentSectionProps) {
  
  if (centered) {
    return (
      &lt;section className="py-24 bg-background border-b border-border/40"&gt;
        &lt;div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8"&gt;
          &lt;div className="space-y-4"&gt;
            {subtitle &amp;&amp; (
              &lt;span className="text-accent font-medium tracking-wider text-sm uppercase"&gt;
                {subtitle}
              &lt;/span&gt;
            )}
            &lt;h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground"&gt;
              {title}
            &lt;/h2&gt;
          &lt;/div&gt;
          &lt;div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed"&gt;
            {children}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    );
  }

  return (
    &lt;section className="py-24 bg-background overflow-hidden border-b border-border/40"&gt;
      &lt;div className="container mx-auto px-4 md:px-6"&gt;
        &lt;div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
          reverse &amp;&amp; "lg:grid-flow-dense"
        )}&gt;
          {/* Content Side */}
          &lt;div className={cn(
            "space-y-8",
            reverse &amp;&amp; "lg:col-start-2"
          )}&gt;
            &lt;div className="space-y-4"&gt;
              {subtitle &amp;&amp; (
                &lt;span className="text-accent font-medium tracking-wider text-sm uppercase"&gt;
                  {subtitle}
                &lt;/span&gt;
              )}
              &lt;h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight"&gt;
                {title}
              &lt;/h2&gt;
            &lt;/div&gt;
            
            &lt;div className="prose prose-lg text-muted-foreground leading-relaxed"&gt;
              {children}
            &lt;/div&gt;

            &lt;Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors"&gt;
              Learn More
            &lt;/Button&gt;
          &lt;/div&gt;

          {/* Image Side */}
          &lt;div className={cn(
            "relative",
            reverse &amp;&amp; "lg:col-start-1"
          )}&gt;
            &lt;div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"&gt;
              &lt;img 
                src={imageUrl} 
                alt={imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              /&gt;
              {/* Decorative Border */}
              &lt;div className="absolute inset-4 border border-white/30 rounded-xl pointer-events-none" /&gt;
            &lt;/div&gt;
            {/* Background Texture Element */}
            &lt;div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" /&gt;
            &lt;div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
