import { motion } from "motion/react";

export function RefundPolicyPage() {
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
              Return and Refund Policy
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Last updated: Oct 19, 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="space-y-8">
              <p className="text-foreground/70">
                Thank you for shopping at Karuna Kodwani.
              </p>
              <p className="text-foreground/70">
                If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.
              </p>
              <p className="text-foreground/70">
                The following terms are applicable for any products that You purchased with Us.
              </p>

              <div>
                <h2>Interpretation and Definitions</h2>
                <h3>Interpretation</h3>
                <p className="text-foreground/70">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div>
                <h3>Definitions</h3>
                <p className="text-foreground/70">For the purposes of this Return and Refund Policy:</p>
                <ul className="space-y-3 text-foreground/70">
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Karuna Kodwani.</li>
                  <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
                  <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
                  <li><strong>Service</strong> refers to the Website.</li>
                  <li><strong>Website</strong> refers to Karuna Kodwani, accessible from https://www.karunakodwani.com/</li>
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
              </div>

              <div>
                <h2>Your Order Cancellation Rights</h2>
                <p className="text-foreground/70">
                  You are entitled to cancel Your Order within 7 days without giving any reason for doing so.
                </p>
                <p className="text-foreground/70">
                  The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
                </p>
                <p className="text-foreground/70">
                  In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:
                </p>
                <ul className="text-foreground/70">
                  <li>By email: <a href="mailto:karunakodwani@gmail.com" className="text-emerald-600 hover:text-emerald-700">karunakodwani@gmail.com</a></li>
                </ul>
                <p className="text-foreground/70">
                  We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.
                </p>
              </div>

              <div>
                <h2>Conditions for Returns</h2>
                <p className="text-foreground/70">
                  In order for the Goods to be eligible for a return, please make sure that:
                </p>
                <ul className="text-foreground/70">
                  <li>The Goods were purchased in the last 7 days</li>
                  <li>The Goods are in the original packaging</li>
                </ul>
                <p className="text-foreground/70">The following Goods cannot be returned:</p>
                <ul className="text-foreground/70">
                  <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                  <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                  <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                  <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                </ul>
                <p className="text-foreground/70">
                  We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.
                </p>
                <p className="text-foreground/70">
                  Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.
                </p>
              </div>

              <div>
                <h2>Returning Goods</h2>
                <p className="text-foreground/70">
                  You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:
                </p>
                <p className="text-foreground/70">
                  <a href="mailto:karunakodwani@gmail.com" className="text-emerald-600 hover:text-emerald-700">karunakodwani@gmail.com</a>
                </p>
                <p className="text-foreground/70">
                  We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.
                </p>
              </div>

              <div>
                <h2>Gifts</h2>
                <p className="text-foreground/70">
                  If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.
                </p>
                <p className="text-foreground/70">
                  If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3>Contact Us</h3>
                <p className="text-foreground/70">
                  If you have any questions about our Returns and Refunds Policy, please contact us:
                </p>
                <p className="text-foreground/70">
                  By email: <a href="mailto:karunakodwani@gmail.com" className="text-emerald-600 hover:text-emerald-700">karunakodwani@gmail.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
