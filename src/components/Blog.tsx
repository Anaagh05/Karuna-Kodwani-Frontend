import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Blog() {
  const blogPosts = [
    {
      title: "10 Superfoods to Boost Your Immunity",
      excerpt: "Discover the power of nature's best foods to strengthen your immune system and maintain optimal health throughout the year.",
      category: "Nutrition",
      date: "Oct 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NjAyNTc1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Morning Yoga Routine for Beginners",
      excerpt: "Start your day with this gentle 15-minute yoga sequence designed to energize your body and calm your mind.",
      category: "Yoga",
      date: "Oct 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MDMxODY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "The Science Behind Meditation",
      excerpt: "Explore the fascinating research on how meditation changes your brain and improves mental well-being.",
      category: "Meditation",
      date: "Oct 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1759754154962-f56bc4965843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzYwMzAxMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Setting Goals That Actually Work",
      excerpt: "Learn the proven framework for setting and achieving meaningful goals that align with your values and vision.",
      category: "Life Coaching",
      date: "Oct 1, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1537444532052-2afbf769b76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwY29hY2hpbmclMjBtZW50b3J8ZW58MXx8fHwxNzYwMzM0OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Holistic Approaches to Stress Management",
      excerpt: "Discover natural and effective ways to manage stress using a combination of nutrition, movement, and mindfulness.",
      category: "Wellness",
      date: "Sep 28, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1758632031161-b6d7e913c2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHNwYSUyMGhlYWxpbmd8ZW58MXx8fHwxNzYwMzM0OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Creating a Sustainable Wellness Routine",
      excerpt: "Build lasting healthy habits with practical tips for integrating wellness practices into your daily life.",
      category: "Lifestyle",
      date: "Sep 25, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MDMxODY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="mb-4">Blog & Insights</h2>
          <p className="text-foreground/70">
            Explore articles, tips, and insights on wellness, nutrition, yoga, meditation, and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <h3 className="line-clamp-2">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Read <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
