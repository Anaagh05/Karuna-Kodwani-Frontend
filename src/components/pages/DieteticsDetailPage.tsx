import { motion } from "motion/react";
import { Apple, Check, Clock, Phone, Video, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Service } from "./ServicesPage";

interface DieteticsDetailPageProps {
  onAddToCart: (service: Service) => void;
}

export function DieteticsDetailPage({ onAddToCart }: DieteticsDetailPageProps) {
  const allServices = [
    {
      id: "diet-consultation",
      name: "One to One Consultation",
      description: "Consultation with Karuna and one personalized diet plan",
      price: 5000,
      duration: "One session",
      features: ["One consultation", "One diet plan", "Online"],
      icon: Apple,
      benefits: [],
      image: "",
      available: true,
      availableMode: "Online",
    },
    {
      id: "diet-monthly",
      name: "Diet Plans Monthly",
      description: "Complete monthly package with multiple diet plans and consultations",
      price: 15000,
      duration: "1 month",
      features: ["4 diet plans", "4 phone consultations", "Unlimited chat support", "Online"],
      icon: Apple,
      benefits: [],
      image: "",
      available: true,
      availableMode: "Online",
    },
    {
      id: "diet-quarterly",
      name: "Diet Plans Quarterly",
      description: "Comprehensive 3-month program for sustained results",
      price: 40000,
      duration: "3 months",
      features: ["14 diet plans", "14 phone consultations", "Unlimited chat support", "Online"],
      icon: Apple,
      benefits: [],
      image: "",
      available: true,
      availableMode: "Online",
    },
    {
      id: "diet-6months",
      name: "Diet Plans 6 Months Package",
      description: "Long-term comprehensive nutrition program",
      price: 70000,
      duration: "6 months",
      features: ["30 diet plans", "30 phone consultations", "Unlimited chat support", "Online"],
      icon: Apple,
      benefits: [],
      image: "",
      available: true,
      availableMode: "Online",
    },
    {
      id: "yoga-diet-1month",
      name: "Yoga + Diet Plans - 1 Month",
      description: "Combined yoga and diet plan program",
      price: 20000,
      duration: "1 month",
      features: ["Yoga sessions", "4 diet plans (Day 0, 10, 20, 30)", "Online"],
      icon: Apple,
      benefits: [],
      image: "",
      available: false,
    },
    {
      id: "yoga-diet-3months",
      name: "Yoga + Diet Plans - 3 Months",
      description: "Extended combined yoga and diet program",
      price: 55000,
      duration: "3 months",
      features: ["Yoga for 3 months", "10 diet plans (Day 0, 10, 20, 30, 40, 50, 60, 70, 80, 90)", "Online"],
      icon: Apple,
      benefits: [],
      image: "",
      available: false,
    },
    {
      id: "yoga-diet-6months",
      name: "Yoga + Diet Plans - 6 Months",
      description: "Complete comprehensive wellness transformation",
      price: 95000,
      duration: "6 months",
      features: ["Yoga for 6 months", "19 diet plans throughout the program", "Online"],
      icon: Apple,
      benefits: [],
      image: "",
      available: false,
    },
  ];

  const availableNowServices = allServices.filter(s => s.available);

  const handleAddToCart = (service: any) => {
    const cartItem: Service = {
      id: service.id,
      name: service.name,
      description: service.description,
      price: service.price,
      duration: service.duration,
      icon: Apple,
      benefits: service.features,
      image: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NjAyNTc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    };
    onAddToCart(cartItem);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Apple className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Dietetics Services
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Personalized nutrition planning tailored to your body's unique needs and health goals
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Available Now Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-emerald-600 text-white">Available Now</Badge>
            <h2 className="mb-4">Services Currently Available</h2>
            <p className="text-foreground/70">
              Book these services now - Available online
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {availableNowServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="flex-1">{service.name}</CardTitle>
                      <Badge variant="outline" className="ml-2">
                        <Video className="w-3 h-3 mr-1" />
                        {service.availableMode}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/70">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 border-t pt-6">
                    <div className="w-full flex items-center justify-center">
                      <span className="text-3xl text-emerald-600">₹{service.price.toLocaleString('en-IN')}</span>
                    </div>
                    <motion.div
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => handleAddToCart(service)}
                      >
                        Add to Cart
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center p-6 bg-amber-50 rounded-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground/80">
              <strong>Special Offers:</strong> Innumerable offers will be announced on Instagram from time to time. Follow us to stay updated!
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services We Offer */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">All Services We Offer</h2>
            <p className="text-foreground/70">
              Complete range of dietetics and nutrition services (Online)
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className={`h-full flex flex-col ${!service.available ? 'opacity-75' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-base">{service.name}</CardTitle>
                      {!service.available && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Under Maintenance
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-foreground/70">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex flex-col gap-3">
                    <div className="w-full text-center">
                      <span className="text-2xl text-emerald-600">₹{service.price.toLocaleString('en-IN')}</span>
                    </div>
                    {!service.available && (
                      <div className="w-full text-center text-sm text-muted-foreground">
                        Under Maintenance
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Have Questions?</h3>
            <p className="text-foreground/70">
              Contact us for more information about our dietetics services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919819131121">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
              <a href="mailto:karunakodwani@gmail.com">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
