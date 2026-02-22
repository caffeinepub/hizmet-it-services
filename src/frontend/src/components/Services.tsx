import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      title: 'Hardware Repairs',
      description: 'Chip-level repairing for motherboards, laptops, and desktops',
    },
    {
      title: 'Printer Solutions',
      description: 'Support for all major brands, cartridge refilling and hardware fixes',
    },
    {
      title: 'Networking',
      description: 'Office/Home WiFi setup, LAN cabling, and server configuration',
    },
    {
      title: 'Data Recovery',
      description: 'Professional recovery solutions for crashed hard drives and lost data',
    },
    {
      title: 'Software Sales & Support',
      description: 'Tally & Busy installation/licensing/training, Antivirus protection, Digital Signatures (DSC) quick issuance',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive doorstep IT support services for homes and businesses across Delhi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
