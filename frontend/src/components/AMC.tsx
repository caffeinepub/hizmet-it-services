import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AMC() {
  const benefits = [
    'Priority support',
    'Regular preventive maintenance',
    'Cost-effective hardware replacements',
  ];

  return (
    <section id="amc" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Annual Maintenance Contract (AMC)
              </CardTitle>
              <CardDescription className="text-lg">
                Comprehensive AMC services for workstations and networking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Benefits:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
