import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      title: 'Hardware Repairs',
      description: 'Chip-level repairing for motherboards, laptops, and desktops',
      image: '/assets/generated/image_6217e92f~2.png',
    },
    {
      title: 'Printer Solutions',
      description: 'Support for all major brands, cartridge refilling and hardware fixes',
      icon: '/assets/generated/service-printer.dim_256x256.png',
    },
    {
      title: 'Networking',
      description: 'Office/Home WiFi setup, LAN cabling, and server configuration',
      image: '/assets/generated/Screenshot_20260222-122525~2.png',
    },
    {
      title: 'Data Recovery',
      description: 'Professional recovery solutions for crashed hard drives and lost data',
      image: '/assets/generated/image_17f3867a.png',
    },
    {
      title: 'Software Sales & Support',
      description: 'Tally & Busy installation/licensing/training, Antivirus protection, Digital Signatures (DSC) quick issuance',
      icon: '/assets/generated/service-software.dim_256x256.png',
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
            <Card key={service.title} className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader>
                <div className="mb-4 -mx-6 -mt-6">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-muted/50">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
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
