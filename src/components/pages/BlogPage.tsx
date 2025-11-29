import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, Search, Loader2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { fetchBlogs, BlogPost } from "../../services/blogService";

interface BlogPageProps {
  onNavigate: (page: string, blogId?: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const categories = [
    "All",
    "Nutrition",
    "Yoga",
    "Meditation",
    "Life Coaching",
    "Wellness",
    "Lifestyle",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch blogs on mount and when category changes
  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      const blogs = await fetchBlogs(selectedCategory);
      setBlogPosts(blogs);
      setLoading(false);
      setCurrentPage(1); // Reset to first page when category changes
    };

    loadBlogs();
  }, [selectedCategory]);

  // Filter blogs based on search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.smallDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
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
              Wellness Blog
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Explore articles, tips, and insights on wellness, nutrition, yoga,
              meditation, and personal growth.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-12 h-12 bg-white"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to first page when searching
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Button
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={
                    selectedCategory === category
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-emerald-600" />
            </div>
          ) : paginatedPosts.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg text-muted-foreground">
                No articles found. Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="flex flex-col h-full hover:shadow-xl transition-shadow overflow-hidden group">
                      <motion.div
                        className="aspect-video overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={post.blogImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <CardHeader className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">
                            {post.category.charAt(0).toUpperCase() +
                              post.category.slice(1)}
                          </Badge>
                        </div>
                        <h3 className="line-clamp-2 group-hover:text-emerald-600 transition-colors">
                          {post.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground/70 line-clamp-3">
                          {post.smallDescription}
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.createdAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.estimateReadTime} min read
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn"
                            onClick={() =>
                              onNavigate("blog-detail", post.id.toString())
                            }
                          >
                            Read{" "}
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          className={
                            currentPage === page
                              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                              : ""
                          }
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-white/90">
              Get the latest wellness tips, blog posts, and updates delivered
              directly to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white h-12"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50"
                >
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
