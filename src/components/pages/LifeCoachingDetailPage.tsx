import { motion } from "motion/react";
import { Target, Check, Clock, Phone, MessageCircle, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Service } from "./ServicesPage";

interface LifeCoachingDetailPageProps {
  onAddToCart: (service: Service) => void;
}

export function LifeCoachingDetailPage({ onAddToCart }: LifeCoachingDetailPageProps) {
  const minimumDeposit = {
    id: "life-coaching-deposit",
    name: "Life Coaching Session Deposit",
    description: "Book a call with Karuna for personalized life coaching discussion",
    price: 10000,
    duration: "Flexible",
    features: [
      "Minimum deposit to secure booking",
      "Book a call with Karuna",
      "Further discussions about timings and rates",
      "Flexible dates as per bookings",
      "Minimum 10 participants required"
    ],
    icon: Target,
    benefits: [],
    image: "",
  };

  const sessionDetails = {
    duration: "3 hours",
    estimatedPrice: 50000,
    includes: [
      "Talk on diet and nutrition",
      "Yoga and movement practices",
      "Meditation and mindfulness",
      "Personalized guidance",
      "Group energy and support"
    ],
    requirements: [
      "Minimum 10 participants compulsory",
      "Rates and timings flexible as per bookings",
      "Dates can be customized for your group",
    ]
  };

  const handleAddToCart = () => {
    const cartItem: Service = {
      id: minimumDeposit.id,
      name: minimumDeposit.name,
      description: minimumDeposit.description,
      price: minimumDeposit.price,
      duration: minimumDeposit.duration,
      icon: Target,
      benefits: minimumDeposit.features,
      image: "https://images.unsplash.com/photo-1537444532052-2afbf769b76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwY29hY2hpbmclMjBtZW50b3J8ZW58MXx8fHwxNzYwMzM0OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
              className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Target className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Life Coaching Services
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Unlock your potential and achieve your goals with personalized life coaching sessions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              Personalized and customized life coaching sessions tailored to your group's needs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Offering Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-emerald-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>Group Life Coaching Session</CardTitle>
                      <p className="text-sm text-foreground/60">Comprehensive 3-hour wellness workshop</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        Session Includes
                      </h4>
                      <div className="space-y-2">
                        {sessionDetails.includes.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                            <span className="text-foreground/70">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Requirements
                      </h4>
                      <div className="space-y-2">
                        {sessionDetails.requirements.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            <span className="text-foreground/70">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border-2 border-dashed border-emerald-300">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Duration</p>
                        <p className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-foreground/60" />
                          <span>{sessionDetails.duration}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground/60 mb-1">Approximate Rate</p>
                        <p className="text-2xl text-emerald-600">₹{sessionDetails.estimatedPrice.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Booking Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-2 border-emerald-200">
                <CardHeader>
                  <Badge className="mb-4 bg-emerald-600 text-white w-fit">Available Now</Badge>
                  <CardTitle>How to Book</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { step: "1", title: "Deposit", desc: "Pay minimum deposit of ₹10,000" },
                      { step: "2", title: "Consultation", desc: "Book a call with Karuna" },
                      { step: "3", title: "Finalize", desc: "Discuss dates, timings, and rates" },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xl">
                          {item.step}
                        </div>
                        <h4 className="text-sm">{item.title}</h4>
                        <p className="text-xs text-foreground/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Deposit Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle>{minimumDeposit.name}</CardTitle>
                  <p className="text-sm text-foreground/70 mt-2">{minimumDeposit.description}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div className="space-y-2">
                    {minimumDeposit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 border-t pt-6">
                  <div className="w-full text-center">
                    <p className="text-sm text-foreground/60 mb-1">Minimum Deposit</p>
                    <span className="text-3xl text-emerald-600">₹{minimumDeposit.price.toLocaleString('en-IN')}</span>
                  </div>
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={handleAddToCart}
                    >
                      Pay Deposit & Book Call
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Life Coaching */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Life Coaching with Karuna?</h2>
            <p className="text-foreground/70">
              Karuna's life coaching integrates her extensive knowledge of physical health through dietetics and yoga, 
              mental well-being through meditation and mindfulness, and spiritual practices for holistic growth. 
              Each session is customized to address your group's specific needs and goals, creating a supportive 
              environment for transformation.
            </p>
            <p className="text-foreground/70">
              With over 15 years of experience in wellness and personal development, Karuna brings a comprehensive 
              approach that helps individuals and groups achieve sustainable positive change in their lives.
            </p>
          </motion.div>
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
            <h3>Ready to Transform Your Life?</h3>
            <p className="text-foreground/70">
              Contact us to discuss your group's needs and customize a life coaching session
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919819131121">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Consultation
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
