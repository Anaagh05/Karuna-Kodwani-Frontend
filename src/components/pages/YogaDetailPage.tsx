import { motion } from "motion/react";
import { Heart, Check, Clock, Phone, MessageCircle, Users, Video } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Service } from "./ServicesPage";

interface YogaDetailPageProps {
  onAddToCart: (service: Service) => void;
}

export function YogaDetailPage({ onAddToCart }: YogaDetailPageProps) {
  const groupClasses = [
    {
      id: "yoga-group-1month",
      name: "Group Classes - One Month",
      description: "Thrice a week group yoga sessions",
      price: 10000,
      duration: "1 month",
      features: ["3 classes per week", "Group sessions", "Online"],
      icon: Heart,
      benefits: [],
      image: "",
    },
    {
      id: "yoga-group-3months",
      name: "Group Classes - Three Months",
      description: "Extended group yoga program",
      price: 25000,
      duration: "3 months",
      features: ["3 classes per week", "Group sessions", "Online"],
      icon: Heart,
      benefits: [],
      image: "",
    },
    {
      id: "yoga-group-6months",
      name: "Group Classes - Six Months",
      description: "Complete group yoga transformation",
      price: 45000,
      duration: "6 months",
      features: ["3 classes per week", "Group sessions", "Online"],
      icon: Heart,
      benefits: [],
      image: "",
    },
  ];

  const yogaDietPackages = [
    {
      id: "yoga-diet-1month",
      name: "Yoga + Diet Plans - 1 Month",
      description: "Combined yoga and diet plan program",
      price: 20000,
      duration: "1 month",
      features: ["Yoga sessions", "4 diet plans (Day 0, 10, 20, 30)", "Online"],
      icon: Heart,
      benefits: [],
      image: "",
    },
    {
      id: "yoga-diet-3months",
      name: "Yoga + Diet Plans - 3 Months",
      description: "Extended combined yoga and diet program",
      price: 55000,
      duration: "3 months",
      features: ["Yoga for 3 months", "10 diet plans (Day 0, 10, 20, 30, 40, 50, 60, 70, 80, 90)", "Online"],
      icon: Heart,
      benefits: [],
      image: "",
    },
    {
      id: "yoga-diet-6months",
      name: "Yoga + Diet Plans - 6 Months",
      description: "Complete comprehensive wellness transformation",
      price: 95000,
      duration: "6 months",
      features: ["Yoga for 6 months", "19 diet plans throughout the program", "Online"],
      icon: Heart,
      benefits: [],
      image: "",
    },
  ];

  const specialCamps = [
    {
      name: "Diabetic Management Yoga Camps",
      duration: "2 days",
      description: "Specialized yoga for diabetes management",
    },
    {
      name: "Thyroid Management Yoga Camps",
      duration: "2 days",
      description: "Targeted yoga for thyroid health",
    },
    {
      name: "Stress Release and Management Yoga Camps",
      duration: "2 days",
      description: "Intensive stress management program",
    },
  ];

  const pranayamClasses = {
    id: "pranayam-classes",
    name: "Online and Offline Pranayam Classes",
    description: "Specialized breathing techniques for wellness",
    price: 5000,
    duration: "4 days a week",
    features: ["4 days per week", "Pranayama techniques", "Per person pricing", "Online"],
    icon: Heart,
    benefits: [],
    image: "",
  };

  const handleAddToCart = (service: any) => {
    const cartItem: Service = {
      id: service.id,
      name: service.name,
      description: service.description,
      price: service.price,
      duration: service.duration,
      icon: Heart,
      benefits: service.features,
      image: "https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MDMxODY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
              className="w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Yoga Services
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Restore balance and flexibility through guided yoga practices suitable for all levels
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Available Now - Pranayam Classes */}
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
            <h2 className="mb-4">Currently Available Service</h2>
            <p className="text-foreground/70">
              Book your pranayam classes now
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="flex-1">{pranayamClasses.name}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      <Video className="w-3 h-3 mr-1" />
                      Online
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground/70">{pranayamClasses.description}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Clock className="w-4 h-4" />
                    <span>{pranayamClasses.duration}</span>
                  </div>
                  <div className="space-y-2">
                    {pranayamClasses.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 border-t pt-6">
                  <div className="w-full flex items-center justify-center">
                    <span className="text-3xl text-emerald-600">₹{pranayamClasses.price.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-foreground/60 ml-2">per person</span>
                  </div>
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={() => handleAddToCart(pranayamClasses)}
                    >
                      Add to Cart
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services - Group Classes */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Group Yoga Classes</h2>
            <p className="text-foreground/70">
              Join our group sessions (Online)
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {groupClasses.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-base">{service.name}</CardTitle>
                    <p className="text-sm text-foreground/70 mt-2">{service.description}</p>
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
        </div>
      </section>

      {/* Yoga + Diet Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Yoga + Diet Plans Combined Packages</h2>
            <p className="text-foreground/70">
              Combined packages of yoga and nutrition (Online)
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {yogaDietPackages.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-base">{service.name}</CardTitle>
                    <p className="text-sm text-foreground/70 mt-2">{service.description}</p>
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
        </div>
      </section>

      {/* Special Camps */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Specialized Yoga Camps</h2>
            <p className="text-foreground/70">
              2-day intensive camps for specific health goals
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialCamps.map((camp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center flex flex-col">
                  <CardHeader className="flex-1">
                    <CardTitle className="text-base">{camp.name}</CardTitle>
                    <p className="text-sm text-foreground/70 mt-2">{camp.description}</p>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-foreground/60 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{camp.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Contact for pricing and dates</p>
                  </CardContent>
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
            <h3>Ready to Start Your Yoga Journey?</h3>
            <p className="text-foreground/70">
              Contact us for more information about our yoga services and programs
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
