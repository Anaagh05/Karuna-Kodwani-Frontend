import { motion } from "motion/react";
import {
  Heart,
  Award,
  Users,
  Sparkles,
  CheckCircle,
  Apple,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutPage() {
  const expertise = [
    {
      icon: Sparkles,
      title: "Meditation",
      description:
        "As a Reiki master, I design and teach bespoke meditation and breathing courses incorporating pranayama and mindfulness techniques.",
    },
    {
      icon: Apple,
      title: "Dietetics",
      description:
        "With an MSc in Nutrition and certification as a diabetic educator, I am a clinically trained dietitian specializing in weight management and metabolic health.",
    },
    {
      icon: Target,
      title: "Life Coaching",
      description:
        "Unlock your potential with integrated yoga, dietetics, and meditation for personal and professional growth.",
    },
    {
      icon: Heart,
      title: "Yoga",
      description:
        "A seasoned yoga instructor who began practice in 2009 as a freelancer, eventually establishing my own yoga studio in 2014.",
    },
  ];

  const achievements = [
    "15+ Years of Professional Experience",
    "Established Yoga Studio & Diet Clinic (2014)",
    "Master's Degree in Nutrition",
    "Certified Reiki Master",
    "Diabetic Educator Certification",
    "Osho Meditation Therapies Facilitator",
  ];

  const specializations = [
    "Weight Management Programs",
    "Diabetic & Thyroid Diet Plans",
    "Mental Health Nutritional Support",
    "Depression & Anxiety Management",
    "Pranayama & Breathing Techniques",
    "Holistic Wellness Integration",
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
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Karuna Kodwani
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              A Multifaceted Expert in Holistic Health and Wellness
            </motion.p>
            <motion.p
              className="text-foreground/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering Individuals Through Yoga, Dietetics, and Meditation for
              Over 15 Years
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="relative w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[3/4] sm:aspect-[4/5] lg:h-[550px] lg:aspect-auto">
                    <ImageWithFallback
                      src="/about-image.jpeg"
                      alt="Karuna Kodwani"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-teal-200 rounded-full opacity-50 blur-3xl pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 lg:order-2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <h2>My Journey</h2>
                <p className="text-foreground/70">
                  Karuna Kodwani is a dynamic and versatile mental health coach
                  with a rich and diverse background encompassing yoga,
                  dietetics, and meditation. With over 15 years of experience in
                  the wellness industry, Karuna has dedicated her career to
                  promoting holistic health and well-being.
                </p>
                <p className="text-foreground/70">
                  She began her journey as a yoga practitioner in 2009 and
                  transitioned into a professional yoga instructor, eventually
                  establishing her own yoga studio and diet clinic in 2014. Her
                  extensive education includes a Master's degree in Nutrition
                  and certification as a diabetic educator, making her a
                  clinically trained dietitian adept at addressing a wide range
                  of nutritional needs.
                </p>
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                  <p className="text-foreground/80">
                    <span className="text-emerald-700">
                      I specialize in weight loss and thyroid management
                    </span>
                    , with extensive expertise in addressing metabolic
                    disorders, inflammatory conditions, gut health optimization,
                    as well as liver and kidney function support. My
                    comprehensive approach targets the root causes of these
                    conditions to promote lasting wellness and vitality.
                  </p>
                </div>
                <p className="text-foreground/70">
                  Karuna's expertise spans weight management, diabetic and
                  thyroid diets, and providing nutritional support for mental
                  health conditions such as depression. In addition to her
                  dietetic and yoga qualifications, Karuna is a Reiki master and
                  a certified facilitator of various Osho meditation techniques
                  and therapies
                </p>
                <p className="text-foreground/70">
                  Karuna's mission is to empower individuals to achieve a
                  balanced and healthy lifestyle through personalized coaching.
                  She integrates her knowledge of physical health, mental
                  well-being, and spiritual practices to offer a comprehensive
                  approach to her clients. By creating a supportive and
                  nurturing environment, Karuna helps her clients navigate their
                  wellness journeys, promoting long-term health and happiness.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Expertise Grid */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Areas of Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((area, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <area.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="mb-2">{area.title}</h4>
                  <p className="text-sm text-foreground/60">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements & Specializations Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Achievements */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Qualifications & Achievements</h2>
            <p className="text-foreground/70">
              Certified expertise across multiple wellness disciplines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-sm">{achievement}</span>
              </motion.div>
            ))}
          </div>

          {/* Specializations */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-center mb-8">Core Specializations</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{spec}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="max-w-3xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4">My Mission</h3>
            <p className="text-foreground/70 leading-relaxed">
              To empower individuals to achieve a balanced and healthy lifestyle
              through personalized coaching that integrates physical health,
              mental well-being, and spiritual practices. By creating a
              supportive and nurturing environment, I help my clients navigate
              their wellness journeys, promoting long-term health and happiness.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
