import { Phone, MapPin, Clock, Mail, FileText, Building2, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'hizmet-it-services';

  return (
    <footer id="contact" className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HIZMET IT SERVICES</h3>
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                JG-3/175B, Vikaspuri<br />
                New Delhi - 110018
              </p>
            </div>
          </div>

          {/* Contact Numbers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+918510811600" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +91 8510811600
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+919811375723" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +91 9811375723
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:01149537600" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  011-49537600
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:nidhiinfotech@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  nidhiinfotech@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Mon - Sat<br />
                10:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Business Credentials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Credentials</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-muted-foreground font-medium">UDYAM Registration</p>
                  <p className="text-muted-foreground">DL-11-0014598</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-muted-foreground font-medium">GST No.</p>
                  <p className="text-muted-foreground">07AHPPK1766K1ZU</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShoppingCart className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-muted-foreground font-medium">GeM Seller ID</p>
                  <p className="text-muted-foreground">853B200001112907</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} HIZMET IT Services. All rights reserved.
          </p>
          <p className="mt-2">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
