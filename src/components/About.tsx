import { Heart, Award, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Personalized approach to your wellness journey with empathy and understanding.",
    },
    {
      icon: Award,
      title: "Certified Expert",
      description: "Years of experience and certifications in multiple healing modalities.",
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your goals and needs are at the heart of every session and program.",
    },
    {
      icon: Sparkles,
      title: "Holistic Approach",
      description: "Integrating mind, body, and spirit for complete transformation.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDI5MzcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Karuna Kodwani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-200 rounded-full opacity-50 blur-3xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h2>About Karuna Kodwani</h2>
              <p className="text-foreground/70">
                With over a decade of experience in holistic healing, I am dedicated to helping 
                individuals discover their inner strength and achieve optimal wellness. My approach 
                combines ancient wisdom with modern science to create personalized healing journeys.
              </p>
              <p className="text-foreground/70">
                Whether you're seeking nutritional guidance, mental clarity through meditation, 
                physical wellness through yoga, or life direction through coaching, I'm here to 
                support you every step of the way.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4>{feature.title}</h4>
                  <p className="text-sm text-foreground/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
