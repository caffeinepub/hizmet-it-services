import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Products() {
  const products = [
    {
      title: 'Brand New Laptops',
      description: 'Latest models from Dell, HP, Lenovo, and Apple',
      icon: '/assets/generated/product-laptop.dim_400x300.png',
    },
    {
      title: 'Custom Desktops',
      description: 'Built to specific requirements for Gaming, Office, or Design',
      icon: '/assets/generated/product-desktop.dim_400x300.png',
    },
    {
      title: 'Peripherals',
      description: 'Monitors, Keyboards, Mice, and UPS systems',
      icon: '/assets/generated/product-peripherals.dim_400x300.png',
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Sales</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            New hardware solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src={product.icon}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
