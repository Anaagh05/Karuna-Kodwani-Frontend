import { motion } from "framer-motion";

export function TermsPage() {
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
              Terms and Conditions
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Last updated: Oct 29, 2025
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
              <div>
                <p className="text-foreground/70">
                  I am a qualified dietitian; however, all content on this Website
                  (including articles, programs, newsletters, videos, and
                  downloadable materials) is for general educational and
                  informational purposes only. This Website does not provide medical
                  advice and does not replace a consultation with a licensed doctor
                  or a licensed healthcare provider. If you have a medical condition,
                  food allergy, or dietary restriction, consult your doctor before
                  applying any nutritional advice.
                </p>

                <p className="text-foreground/70">
                  Your use of this Website does not create a dietitian-client
                  relationship. A professional relationship is only formed after an
                  initial consultation, and signed informed consent and client
                  agreement. I strive to ensure the information on this Website is
                  correct and up-to-date. However, I make no warranties regarding
                  accuracy, completeness, reliability, or suitability of the content.
                </p>

                <p className="text-foreground/70">By using this Website, you acknowledge that:</p>
                <ul className="text-foreground/70 list-disc list-inside space-y-2">
                  <li>You are responsible for your own health decisions.</li>
                  <li>You agree not to hold me liable for any outcomes resulting from the use of information provided here.</li>
                  <li>Payment for consultations must be completed as per the listed fee structure.</li>
                  <li>Cancellations or change in schedule must be made at least [e.g., 24 hours] in advance, otherwise a cancellation fee may apply.</li>
                  <li>No refunds on digital products, courses, or meal plan programs will be made.</li>
                </ul>

                <p className="text-foreground/70">
                  All content on this Website, including text, images, meal plans,
                  e-books, and videos, is the intellectual property of [Karuna Kodwani]
                  and may not be reproduced, shared, or distributed without written
                  permission.
                </p>

                <p className="text-foreground/70">You agree not to use the Website to:</p>
                <ul className="text-foreground/70 list-disc list-inside space-y-2">
                  <li>Post spam or unlawful content.</li>
                  <li>Attempt to hack or disrupt the Website.</li>
                  <li>Misuse the content for commercial gain without permission.</li>
                </ul>

                <p className="text-foreground/70">
                  Your personal information is handled according to our Privacy Policy.
                  To the fullest extent permitted by law, [karunakodwani.com] is not
                  liable for direct, indirect, incidental, or consequential damages
                  arising from your use of this Website or any linked resources.
                </p>

                <p className="text-foreground/70">
                  These Terms may be updated or revised at any time. Continued use of
                  the Website constitutes acceptance of any changes. These Terms are
                  governed by the laws of [India/Maharashtra]. Any disputes shall be
                  resolved in the courts of [Mumbai, Maharashtra].
                </p>

                <hr className="my-6" />

                <h3 className="text-xl">Professional relationship & consultations</h3>
                <p className="text-foreground/70">
                  Using this Website does NOT create a professional client relationship.
                  A formal professional relationship is only established when:
                </p>
                <ol className="text-foreground/70 list-decimal list-inside space-y-2">
                  <li>You book a consultation.</li>
                  <li>Complete required intake forms.</li>
                  <li>Sign the Client Consent & Service Agreement.</li>
                </ol>

                <p className="text-foreground/70">
                  By using the Website, you agree that you are responsible for evaluating
                  your own health needs, will not rely solely on the information provided
                  here, and understand results may vary based on individual factors.
                </p>

                <h3 className="text-xl">Accuracy & disclaimers</h3>
                <p className="text-foreground/70">
                  While efforts are made to ensure the accuracy of the information, no
                  guarantees are provided regarding completeness, accuracy, timeliness,
                  reliability, or suitability of content. Content is subject to change
                  without notice.
                </p>

                <h3 className="text-xl">Fees, cancellations & refunds</h3>
                <ul className="text-foreground/70 list-disc list-inside space-y-2">
                  <li>Payments must be made as per the published prices or agreed fee.</li>
                  <li>Cancellations must be made at least [e.g., 24 hours] prior to the appointment time; otherwise, the session fee may be charged.</li>
                  <li>No refunds are issued for delivered consultations or digital resources (meal plans, guides, online programs).</li>
                </ul>

                <h3 className="text-xl">Intellectual property</h3>
                <p className="text-foreground/70">
                  All content on this Website, including text, videos, graphics, plans,
                  and downloadable materials, is the exclusive intellectual property
                  of [Karuna Kodwani] and may not be copied, reproduced, shared,
                  published, or sold without prior written permission.
                </p>

                <h3 className="text-xl">Indemnification & limitation of liability</h3>
                <p className="text-foreground/70">
                  By using this Website or services, you agree to indemnify, defend,
                  and hold harmless [Karuna Kodwani], including its owners, employees,
                  partners, and affiliates, from and against any and all claims, damages,
                  losses, liabilities, and legal fees arising out of:
                </p>
                <ul className="text-foreground/70 list-disc list-inside space-y-2">
                  <li>Your access to or use of the Website.</li>
                  <li>Your application or misuse of any nutritional or lifestyle recommendations.</li>
                  <li>Your violation of these Terms & Conditions.</li>
                  <li>Your reliance on any information provided.</li>
                </ul>

                <p className="text-foreground/70">
                  To the maximum extent permitted by applicable law, [Karuna Kodwani] is not
                  liable for any direct, indirect, incidental, special, or consequential
                  damages arising from your use of this Website or services, including but
                  not limited to health outcomes, injuries, allergic reactions, weight
                  changes, or emotional or physical effects.
                </p>

                <h3 className="text-xl">Waiver & release of liability</h3>
                <p className="text-foreground/70">
                  By using this Website or receiving services, you voluntarily assume all
                  risks associated with nutritional changes and waive the right to bring
                  any claim or lawsuit against [Karuna Kodwani] for any physical,
                  emotional, or medical outcomes. This includes but is not limited to
                  allergic reactions, adverse symptoms, weight changes, and blood parameter changes.
                </p>

                <h3 className="text-xl">Client responsibilities</h3>
                <p className="text-foreground/70">
                  You agree it is your responsibility to fully disclose any and all:
                </p>
                <ul className="text-foreground/70 list-disc list-inside space-y-2">
                  <li>Medical conditions</li>
                  <li>Illnesses</li>
                  <li>Allergies</li>
                  <li>Medications</li>
                  <li>Ongoing treatments</li>
                </ul>
                <p className="text-foreground/70">
                  Failure to disclose medical conditions may increase health risks. [Karuna Kodwani]
                  is not responsible for any adverse reaction caused by undisclosed medical information.
                </p>

                <h3 className="text-xl">No guarantees</h3>
                <p className="text-foreground/70">
                  Nutrition, lifestyle, and health outcomes vary for each individual. We do not guarantee:
                </p>
                <ul className="text-foreground/70 list-disc list-inside space-y-2">
                  <li>Weight loss or gain</li>
                  <li>Symptom reduction</li>
                  <li>Improved blood reports</li>
                  <li>Changed body composition</li>
                  <li>Performance improvements</li>
                </ul>

                <h3 className="text-xl">Chargebacks & account termination</h3>
                <p className="text-foreground/70">
                  Once a service, consultation, program, or downloadable plan has been delivered:
                </p>
                <ul className="text-foreground/70 list-disc list-inside space-y-2">
                  <li>No refunds will be provided.</li>
                  <li>No chargebacks or payment disputes are permitted.</li>
                  <li>Attempted chargebacks or payment reversals may result in legal action and termination of service access.</li>
                </ul>

                <h3 className="text-xl">Copyright & permitted use</h3>
                <p className="text-foreground/70">
                  All nutrition plans, guides, audio/video sessions, and written recommendations are for personal use only and not to be shared, sold, copied, forwarded, or published. Violation may result in termination of access and legal action under copyright law.
                </p>

                <h3 className="text-xl">Governing law</h3>
                <p className="text-foreground/70">
                  These Terms are governed by the laws of [Maharashtra, India]. Any disputes shall be resolved in the courts of [Mumbai, Maharashtra].
                </p>

                <h3 className="text-xl">Contact</h3>
                <p className="text-foreground/70">
                  If you have any questions about these Terms and Conditions, you can contact us:
                </p>
                <p className="text-foreground/70">
                  By email:{" "}
                  <a
                    href="mailto:karunakodwani@gmail.com"
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    karunakodwani@gmail.com
                  </a>
                </p>

                <p className="text-foreground/70">
                  By accessing or using this Website, you confirm that you have read,
                  understood, and agree to be bound by these Terms & Conditions. If you
                  do not agree, discontinue use immediately.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

