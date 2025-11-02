import { Apple, Heart, Sparkles, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: typeof Apple;
  benefits: string[];
  image: string;
}

interface ServicesProps {
  onAddToCart: (service: Service) => void;
}

export function Services({ onAddToCart }: ServicesProps) {
  const services: Service[] = [
    {
      id: "dietetics",
      name: "Dietetics Consultation",
      description: "Personalized nutrition planning tailored to your body's unique needs and health goals.",
      price: 2999,
      duration: "60 min",
      icon: Apple,
      benefits: ["Custom meal plans", "Nutritional analysis", "Ongoing support"],
      image: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NjAyNTc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "yoga",
      name: "Yoga Sessions",
      description: "Restore balance and flexibility through guided yoga practices suitable for all levels.",
      price: 1999,
      duration: "90 min",
      icon: Heart,
      benefits: ["Stress relief", "Improved flexibility", "Mind-body connection"],
      image: "https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MDMxODY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "meditation",
      name: "Meditation & Mindfulness",
      description: "Find inner peace and mental clarity through guided meditation and mindfulness techniques.",
      price: 1499,
      duration: "45 min",
      icon: Sparkles,
      benefits: ["Reduced anxiety", "Better focus", "Emotional balance"],
      image: "https://images.unsplash.com/photo-1759754154962-f56bc4965843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzYwMzAxMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "life-coach",
      name: "Life Coaching",
      description: "Unlock your potential and achieve your goals with personalized life coaching sessions.",
      price: 3999,
      duration: "90 min",
      icon: Target,
      benefits: ["Goal setting", "Personal growth", "Accountability"],
      image: "https://images.unsplash.com/photo-1537444532052-2afbf769b76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwY29hY2hpbmclMjBtZW50b3J8ZW58MXx8fHwxNzYwMzM0OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="mb-4">My Services</h2>
          <p className="text-foreground/70">
            Choose from a range of holistic healing services designed to nurture your 
            mind, body, and spirit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-foreground">
                      {service.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="mb-2">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
                <div className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-6 border-t">
                <div className="w-full flex items-center justify-between">
                  <span className="text-2xl text-emerald-600">₹{service.price}</span>
                  <span className="text-sm text-foreground/60">per session</span>
                </div>
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => onAddToCart(service)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
