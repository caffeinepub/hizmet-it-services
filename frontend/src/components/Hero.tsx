import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const handleCall = () => {
    window.location.href = 'tel:+918510811600';
  };

  const handleBookVisit = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.png"
          alt="IT Services Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Professional IT Services Delivered to Your Doorstep.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            From chip-level repairs to new hardware sales, HIZMET provides end-to-end technology solutions for your home and office in Delhi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={handleCall} className="text-base">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 8510811600
            </Button>
            <Button size="lg" variant="outline" onClick={handleBookVisit} className="text-base">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
