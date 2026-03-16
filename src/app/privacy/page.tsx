import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function PrivacyPolicy() {
  const lastUpdated = "March 16, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us when you request a quote, contact us, or sign up for our services. This may include your name, email address, phone number, and company details. We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, and operating system.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to send you technical notices and support messages. We do not sell your personal information to third parties.",
    },
    {
      title: "3. Data Security",
      content:
        "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      title: "4. Third-Party Services",
      content:
        "We may use third-party service providers to help us operate our business and the website or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes.",
    },
    {
      title: "5. Your Rights",
      content:
        "Depending on your location, you may have the right to access, correct, or delete your personal data. You also have the right to object to or restrict certain processing of your data. To exercise these rights, please contact us at the email address provided below.",
    },
    {
      title: "6. Cookies",
      content:
        "Our website uses cookies to enhance your experience. Cookies are small files placed on your device that help us analyze web traffic and remember your preferences. You can set your browser to refuse all or some browser cookies, but this may affect website functionality.",
    },
  ];

  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-24 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-16">
        <SectionHeader
          badgeText="Privacy Policy"
          title="Your Privacy Matters"
          subtitle={`Last updated: ${lastUpdated}. This policy describes how Ramesys collects, uses, and protects your personal information.`}
          centered={true}
        />

        <div className="mx-auto max-w-4xl w-full">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold gradient-text">
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-300 text-lg">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <a
                href="mailto:contact@ramesys.co.uk"
                className="text-primary font-semibold hover:underline mt-2 block text-lg"
              >
                contact@ramesys.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
