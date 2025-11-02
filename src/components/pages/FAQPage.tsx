import { motion } from "motion/react";
import { Plus, Minus, Send, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const faqs = [
    {
      question: "What types of services do you offer?",
      answer: "I offer a comprehensive range of holistic wellness services including personalized dietetics consultations, meditation and mindfulness sessions, and life coaching. Each service is tailored to meet your unique needs and goals. Yoga sessions are coming soon!",
    },
    {
      question: "How do I book a session?",
      answer: "Booking is simple! Browse our Services page, select the service you're interested in, add it to your cart, and proceed to checkout. After payment, you'll complete a questionnaire to help me understand your needs better. You'll receive a confirmation email with session details.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "No refunds or transfers of services are available. Rescheduling of a fixed or planned appointment must be requested at least 24 hours in advance. Requests made with less notice will be subject to the specific terms and conditions outlined in each service plan, which may have varying rescheduling policies.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes! All my services are available online via video call. Online sessions are just as effective and provide the flexibility to join from anywhere. You'll receive a video call link after booking.",
    },
    {
      question: "How long is each session?",
      answer: "Session lengths vary by service: Dietetics consultations are 30 minutes, and Life Coaching sessions are 180 minutes (with a minimum of 10 participants required). This ensures we have adequate time to address your needs and create effective, actionable plans.",
    },
    {
      question: "Do I need any prior experience?",
      answer: "Absolutely not! My services are designed for all levels, from complete beginners to those with experience. I'll meet you where you are and create a personalized approach that works for your current level and comfort.",
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on understanding your goals, challenges, and health history. We'll discuss what you hope to achieve and create a customized plan. For dietetics, we'll review your current diet and lifestyle. For meditation, we'll start with basic techniques. For life coaching, we'll identify your key objectives.",
    },
    {
      question: "How many sessions will I need?",
      answer: "This varies based on your individual goals and needs. Some clients see results in 3-4 sessions, while others prefer ongoing support. After your initial consultation, I'll recommend a plan, but you're never locked in. We can adjust as we go based on your progress.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, and net banking. All payments are processed securely through our encrypted payment gateway. You'll receive a receipt via email after each transaction.",
    },
    {
      question: "Can I purchase sessions as gifts?",
      answer: "Yes! Wellness sessions make wonderful gifts. During checkout, simply indicate that it's a gift, and we'll provide a gift certificate that can be sent to the recipient. They can then schedule their session at their convenience.",
    },
    {
      question: "What is your approach to wellness?",
      answer: "I believe in a holistic approach that integrates mind, body, and spirit. Rather than quick fixes, I focus on sustainable lifestyle changes that support your long-term wellness. My methods combine ancient wisdom with modern, evidence-based practices.",
    },
    {
      question: "Are your services suitable for specific health conditions?",
      answer: "While I work with clients with various health conditions, my services are complementary and should not replace medical treatment. Always consult with your healthcare provider about your specific condition. I'm happy to work alongside your medical team to support your overall wellness.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the question to a backend
    alert("Thank you for your question! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", question: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
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
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Find answers to common questions about our services, booking process, and wellness approach.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <motion.div
                    className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-emerald-50/50 transition-colors"
                    >
                      <span className="pr-8">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {expandedIndex === index ? (
                          <Minus className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-emerald-600" />
                        )}
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-2 text-foreground/70 bg-emerald-50/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ask Question Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Still Have Questions?</CardTitle>
                  <CardDescription>
                    Can't find the answer you're looking for? Send us your question and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="question">Your Question *</Label>
                      <Textarea
                        id="question"
                        value={formData.question}
                        onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                        required
                        placeholder="Ask us anything..."
                        rows={5}
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                        size="lg"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Question
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="mb-4">Other Ways to Reach Us</h3>
                <p className="text-foreground/70 mb-6">
                  Prefer to connect directly? We're here to help through multiple channels.
                </p>
              </div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="mb-1">Email Us</h4>
                      <p className="text-sm text-foreground/70 mb-2">
                        For detailed inquiries
                      </p>
                      <a
                        href="mailto:karunakodwani@gmail.com"
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        karunakodwani@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="mb-1">Call Us</h4>
                      <p className="text-sm text-foreground/70 mb-2">
                        Mon-Fri, 9 AM - 6 PM IST
                      </p>
                      <a
                        href="tel:+919819131121"
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        +91 98191 31121
                      </a>
                    </div>
                  </CardContent>
                </Card>

              </motion.div>

              <motion.div
                className="p-6 bg-white rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="mb-3">Response Times</h4>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>📧 Email: Within 24 hours</p>
                  <p>📞 Phone: Immediate during business hours</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
