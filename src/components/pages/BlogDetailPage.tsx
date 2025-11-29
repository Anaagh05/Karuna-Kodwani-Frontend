import { motion } from "motion/react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Loader2,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState, useEffect } from "react";
import { fetchBlogById, BlogPost } from "../../services/blogService";

interface BlogDetailPageProps {
  blogId: string;
  onNavigate: (page: string) => void;
}

export function BlogDetailPage({ blogId, onNavigate }: BlogDetailPageProps) {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      setLoading(true);
      const blogData = await fetchBlogById(blogId);
      setBlog(blogData);
      setLoading(false);
    };

    loadBlog();
  }, [blogId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.smallDescription,
        url: window.location.href,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
        <h2 className="text-2xl mb-4">Blog not found</h2>
        <Button
          onClick={() => onNavigate("blog")}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button Header */}
      <motion.div
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                onClick={() => onNavigate("blog")}
                className="hover:bg-emerald-50 hover:text-emerald-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={handleShare}
                className="hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Hero Image Section */}
      <motion.section
        className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-8 lg:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              className="relative w-full h-[360px] overflow-hidden rounded-2xl shadow-xl border-5 border-white group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={blog.blogImage}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <article className="relative">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 text-sm">
                {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight text-gray-900 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {blog.title}
            </motion.h1>

            {/* Metadata Bar */}
            <motion.div
              className="flex flex-wrap items-center gap-6 pb-6 mb-8 border-b border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
                  <User className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Written by
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {blog.authorName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium">
                  {blog.estimateReadTime} min read
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium">
                  {formatDate(blog.createdAt)}
                </span>
              </div>
            </motion.div>

            {/* Small Description Highlight */}
            <motion.div
              className="relative mb-10 p-6 border-l-4 border-emerald-600"
              style={{ backgroundColor: "#f7fef9" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium italic">
                {blog.smallDescription}
              </p>
            </motion.div>

            {/* Main Content - Properly styled for HTML */}
            <motion.div
              className="blog-content mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <style>{`
                .blog-content {
                  color: #374151;
                  line-height: 1.8;
                }
                .blog-content h1 {
                  font-size: 2.25rem;
                  font-weight: 700;
                  color: #111827;
                  margin-top: 2.5rem;
                  margin-bottom: 1.5rem;
                  line-height: 1.2;
                }
                .blog-content h2 {
                  font-size: 1.875rem;
                  font-weight: 700;
                  color: #111827;
                  margin-top: 2rem;
                  margin-bottom: 1.25rem;
                  line-height: 1.3;
                }
                .blog-content h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  color: #111827;
                  margin-top: 1.75rem;
                  margin-bottom: 1rem;
                  line-height: 1.4;
                }
                .blog-content p {
                  font-size: 1.0625rem;
                  color: #4B5563;
                  margin-bottom: 1.5rem;
                  line-height: 1.8;
                }
                .blog-content strong,
                .blog-content b {
                  font-weight: 600;
                  color: #111827;
                }
                .blog-content em,
                .blog-content i {
                  font-style: italic;
                }
                .blog-content ul,
                .blog-content ol {
                  margin-top: 1.5rem;
                  margin-bottom: 1.5rem;
                  padding-left: 1.75rem;
                }
                .blog-content ul {
                  list-style-type: disc;
                }
                .blog-content ol {
                  list-style-type: decimal;
                }
                .blog-content li {
                  font-size: 1.0625rem;
                  color: #4B5563;
                  margin-bottom: 0.75rem;
                  line-height: 1.75;
                  padding-left: 0.5rem;
                }
                .blog-content li::marker {
                  color: #059669;
                  font-weight: 600;
                }
                .blog-content ul ul,
                .blog-content ol ol {
                  margin-top: 0.75rem;
                  margin-bottom: 0.75rem;
                }
                .blog-content a {
                  color: #059669;
                  text-decoration: none;
                  font-weight: 500;
                  transition: all 0.2s;
                }
                .blog-content a:hover {
                  color: #047857;
                  text-decoration: underline;
                }
                .blog-content blockquote {
                  border-left: 4px solid #059669;
                  background: linear-gradient(to right, #d1fae5, #a7f3d0);
                  padding: 1.25rem 1.5rem;
                  margin: 2rem 0;
                  border-radius: 0 0.5rem 0.5rem 0;
                  font-style: italic;
                  color: #047857;
                }
                .blog-content blockquote p {
                  margin-bottom: 0;
                  color: #047857;
                }
                .blog-content code {
                  background-color: #F3F4F6;
                  padding: 0.2rem 0.4rem;
                  border-radius: 0.25rem;
                  font-family: 'Courier New', monospace;
                  font-size: 0.9em;
                  color: #DC2626;
                }
                .blog-content pre {
                  background-color: #1F2937;
                  color: #F9FAFB;
                  padding: 1.25rem;
                  border-radius: 0.5rem;
                  overflow-x: auto;
                  margin: 1.5rem 0;
                }
                .blog-content pre code {
                  background: transparent;
                  padding: 0;
                  color: #F9FAFB;
                }
                .blog-content img {
                  border-radius: 0.75rem;
                  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                  margin: 2rem 0;
                  max-width: 100%;
                  height: auto;
                }
                .blog-content hr {
                  border: none;
                  border-top: 2px solid #E5E7EB;
                  margin: 2.5rem 0;
                }
                .blog-content table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 2rem 0;
                }
                .blog-content th,
                .blog-content td {
                  border: 1px solid #E5E7EB;
                  padding: 0.75rem;
                  text-align: left;
                }
                .blog-content th {
                  background-color: #F3F4F6;
                  font-weight: 600;
                  color: #111827;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: blog.mainDescription }} />
            </motion.div>

            {/* Tags Section */}
            {blog.tags && blog.tags.length > 0 && (
              <motion.div
                className="mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5">
                  Related Tags
                </h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  {blog.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 h-8 py-0.5 bg-white text-gray-700 rounded-full border border-emerald-200 shadow-sm hover:shadow-md hover:bg-emerald-50 transition transform text-sm font-medium whitespace-nowrap"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.85 + index * 0.04,
                        duration: 0.28,
                      }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <span className="text-emerald-600 text-sm mr-1">#</span>
                      <span className="leading-none text-sm text-gray-700">
                        {tag}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Back to Blog Button */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                <Button
                  onClick={() => onNavigate("blog")}
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to All Articles
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Call to Action Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-white text-2xl lg:text-3xl font-bold">
              Enjoyed this article?
            </h2>
            <p className="text-base text-white/90">
              Subscribe to our newsletter for more wellness insights and
              exclusive content.
            </p>
            <div className="flex gap-3 max-w-2xl mx-auto items-center">
              <input
                type="email"
                placeholder="   Enter your email"
                className="flex-1 h-12 px-5 rounded-lg bg-white text-gray-700 placeholder-gray-400 placeholder-opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-sm"
              />
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="h-12 px-6 bg-white text-emerald-600 hover:bg-emerald-50 shadow-md inline-flex items-center justify-center rounded-lg"
                >
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
