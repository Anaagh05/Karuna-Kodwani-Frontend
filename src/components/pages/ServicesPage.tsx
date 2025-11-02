import { motion } from "motion/react";
import { Apple, Heart, Sparkles, Target } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: typeof Apple;
  benefits: string[];
  image: string;
  comingSoon?: boolean;
}

interface ServicesPageProps {
  onAddToCart: (service: Service) => void;
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: "dietetics",
      name: "Dietetics",
      description: "Personalized nutrition planning tailored to your body's unique needs and health goals.",
      startingPrice: 5000,
      icon: Apple,
      image: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NjAyNTc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "meditation",
      name: "Meditation",
      description: "Find inner peace and mental clarity through guided meditation and mindfulness techniques.",
      startingPrice: null,
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1759754154962-f56bc4965843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzYwMzAxMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      comingSoon: true,
    },
    {
      id: "yoga",
      name: "Yoga",
      description: "Restore balance and flexibility through guided yoga practices suitable for all levels.",
      startingPrice: null,
      icon: Heart,
      image: "https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MDMxODY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      comingSoon: true,
    },
    {
      id: "life-coaching",
      name: "Life Coaching",
      description: "Unlock your potential and achieve your goals with personalized life coaching sessions.",
      startingPrice: 10000,
      icon: Target,
      image: "https://images.unsplash.com/photo-1537444532052-2afbf769b76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwY29hY2hpbmclMjBtZW50b3J8ZW58MXx8fHwxNzYwMzM0OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Wellness Services
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Choose from a range of holistic healing services designed to nurture your
              mind, body, and spirit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full hover:shadow-xl transition-shadow group">
                  <CardHeader className="p-0 relative">
                    <motion.div
                      className="aspect-[4/3] overflow-hidden rounded-t-lg relative cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => onNavigate(`service-${service.id}`)}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      {service.comingSoon && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                          <motion.div
                            className="px-6 py-3 bg-amber-500 text-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                          >
                            Dates Coming Soon
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </CardHeader>
                  <CardContent className="flex-1 pt-6 space-y-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6 text-emerald-600" />
                    </motion.div>
                    <div>
                      <CardTitle className="mb-2 group-hover:text-emerald-600 transition-colors">
                        {service.name}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 pt-6 border-t">
                    {!service.comingSoon && service.startingPrice && (
                      <>
                        <div className="w-full text-center">
                          <p className="text-sm text-foreground/60 mb-1">Starting from</p>
                          <span className="text-2xl text-emerald-600">₹{service.startingPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <motion.div
                          className="w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                            onClick={() => onNavigate(`service-${service.id}`)}
                          >
                            View Details
                          </Button>
                        </motion.div>
                      </>
                    )}
                    {service.comingSoon && (
                      <div className="w-full text-center py-2 text-sm text-muted-foreground">
                        Stay tuned for updates
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">How It Works</h2>
            <p className="text-foreground/70">
              Simple steps to begin your wellness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Choose Your Service", desc: "Select the wellness service that aligns with your goals" },
              { step: "2", title: "Book & Pay", desc: "Complete the booking process and secure your session" },
              { step: "3", title: "Start Your Journey", desc: "Fill out a brief questionnaire and begin your transformation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.step}
                </motion.div>
                <h3>{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
