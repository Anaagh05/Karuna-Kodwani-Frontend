import { motion } from "motion/react";
import { Sparkles, Clock, Calendar, Phone, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function MeditationDetailPage() {
  const services = [
    {
      name: "One Hour Class of Meditation",
      description: "Traditional meditation practice for inner peace",
      duration: "60 minutes",
    },
    {
      name: "One Hour of Stress Release",
      description: "Specialized stress release techniques",
      duration: "60 minutes",
    },
    {
      name: "One Hour of Yoga Nidra",
      description: "Deep relaxation through guided yoga nidra",
      duration: "60 minutes",
    },
    {
      name: "One Hour of Meditation with Yoga Mudra",
      description: "Meditation combined with powerful hand gestures",
      duration: "60 minutes",
    },
  ];

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
              className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Meditation Services
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Find inner peace and mental clarity through guided meditation and mindfulness techniques
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Services We Offer</h2>
            <p className="text-foreground/70">
              Variety of meditation practices to suit your needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <p className="text-sm text-foreground/70 mt-2">{service.description}</p>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Now */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-amber-500 text-white text-base px-6 py-2">
              <Calendar className="w-4 h-4 mr-2 inline" />
              Coming Soon
            </Badge>
            
            <div className="space-y-4">
              <h2>Services Available Now</h2>
              <div className="p-8 bg-white rounded-2xl shadow-lg">
                <p className="text-xl text-foreground/80 mb-2">
                  Dates will be announced soon
                </p>
                <p className="text-foreground/60">
                  We're preparing special meditation sessions for you. Stay tuned for schedule updates!
                </p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-foreground/70 mb-4">
                Want to be notified when dates are announced?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+919819131121">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Register Interest
                  </Button>
                </a>
                <a href="mailto:karunakodwani@gmail.com">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Meditation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>About Our Meditation Programs</h3>
            <p className="text-foreground/70">
              As a Reiki master and certified facilitator of various Osho meditation therapies, Karuna designs 
              and teaches bespoke meditation and breathing courses incorporating pranayama and mindfulness techniques. 
              Each session is carefully crafted to help you achieve deep relaxation, mental clarity, and emotional balance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
