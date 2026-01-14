
// src/components/home/ContentSection.tsx
import React from "react";
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
  showButton?: boolean;
  onButtonClick?: () => void;
  buttonText?: string;
}

export function ContentSection({
  title,
  subtitle,
  children,
  imageUrl,
  imageAlt = "Orchard Image",
  reverse = false,
  centered = false,
  showButton = true,
  onButtonClick,
  buttonText = "Learn More",
}: ContentSectionProps) {
  // Unique, stable ID per render tree (React 18+)
  const reactId = (React as any).useId ? (React as any).useId() : undefined;
  const headingId = reactId ? `content-section-title-${reactId}` : `content-section-title-${title.replace(/\s+/g, "-").toLowerCase()}`;

  if (centered) {
    return (
      <section
        className="py-24 bg-background border-b border-border/40"
        aria-labelledby={headingId}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            {subtitle && (
              <span className="text-accent font-medium tracking-wider text-sm uppercase">
                {subtitle}
              </span>
            )}
            <h2
              id={headingId}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            >
              {title}
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            {children}
          </div>

          {showButton && (
            <Button
              variant="outline"
              className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-24 bg-background overflow-hidden border-b border-border/40"
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            reverse && "lg:grid-flow-dense"
          )}
        >
          {/* Content Side */}
          <div className={cn("space-y-8", reverse && "lg:col-start-2")}>
            <div className="space-y-4">
              {subtitle && (
                <span className="text-accent font-medium tracking-wider text-sm uppercase">
                  {subtitle}
                </span>
              )}
              <h2
                id={headingId}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight"
              >
                {title}
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              {children}
            </div>

            {showButton && (
              <Button
                variant="outline"
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            )}
          </div>

          {/* Image Side */}
          <div className={cn("relative", reverse && "lg:col-start-1")}>
            <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div aria-hidden="true" className="w-full h-full bg-muted/40" />
              )}
              <div className="absolute inset-4 border border-white/30 rounded-xl pointer-events-none" />
            </div>

            {/* Background Texture Elements */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
``
