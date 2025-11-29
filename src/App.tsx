import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { BlogPage } from "./components/pages/BlogPage";
import { BlogDetailPage } from "./components/pages/BlogDetailPage";
import { FAQPage } from "./components/pages/FAQPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsPage } from "./components/pages/TermsPage";
import { RefundPolicyPage } from "./components/pages/RefundPolicyPage";
import { DieteticsDetailPage } from "./components/pages/DieteticsDetailPage";
import { MeditationDetailPage } from "./components/pages/MeditationDetailPage";
import { YogaDetailPage } from "./components/pages/YogaDetailPage";
import { LifeCoachingDetailPage } from "./components/pages/LifeCoachingDetailPage";
import { Cart, CartItem } from "./components/Cart";
import { PaymentForm } from "./components/PaymentForm";
import { QuestionnaireForm } from "./components/QuestionnaireForm";
import { Footer } from "./components/Footer";
import { Service } from "./components/pages/ServicesPage";
import { CheckCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [blogId, setBlogId] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleAddToCart = (service: Service) => {
    if (service.comingSoon) {
      toast.info("This service is coming soon! Stay tuned for updates.");
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === service.id);
      if (existingItem) {
        toast.success(`Updated ${service.name} quantity`);
        return prevItems.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${service.name} added to cart`);
        return [...prevItems, { ...service, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (serviceId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === serviceId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (serviceId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== serviceId)
    );
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);
    setShowPaymentForm(true);
  };

  const handlePaymentComplete = () => {
    setShowPaymentForm(false);
    setShowQuestionnaire(true);
  };

  const handleQuestionnaireComplete = () => {
    setShowQuestionnaire(false);
    setShowSuccessMessage(true);
    setCartItems([]);
  };

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page);
    if (id) {
      setBlogId(id);
    }
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return Math.round(subtotal * 1.18); // Including 18% GST
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return (
          <ServicesPage
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
          />
        );
      case "service-dietetics":
        return <DieteticsDetailPage onAddToCart={handleAddToCart} />;
      case "service-meditation":
        return <MeditationDetailPage />;
      case "service-yoga":
        return <YogaDetailPage onAddToCart={handleAddToCart} />;
      case "service-life-coaching":
        return <LifeCoachingDetailPage onAddToCart={handleAddToCart} />;
      case "blog":
        return <BlogPage onNavigate={handleNavigate} />;
      case "blog-detail":
        return <BlogDetailPage blogId={blogId} onNavigate={handleNavigate} />;
      case "faq":
        return <FAQPage />;
      case "privacy":
        return <PrivacyPolicyPage />;
      case "terms":
        return <TermsPage />;
      case "refund":
        return <RefundPolicyPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          className="flex-1"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <AnimatePresence>
        {showPaymentForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <PaymentForm
                cartItems={cartItems}
                total={calculateTotal()}
                onPaymentComplete={handlePaymentComplete}
                onCancel={() => setShowPaymentForm(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQuestionnaire && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <QuestionnaireForm onComplete={handleQuestionnaireComplete} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </motion.div>
              <div className="space-y-2">
                <h2>Booking Confirmed!</h2>
                <p className="text-foreground/70">
                  Thank you for choosing Karuna Kodwani. You will receive a
                  confirmation email shortly with details about your sessions.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => {
                    setShowSuccessMessage(false);
                    setCurrentPage("home");
                  }}
                >
                  Back to Home
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster />
    </div>
  );
}
