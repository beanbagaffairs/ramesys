import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function TermsOfService() {
  const lastUpdated = "March 16, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        'By accessing our website or engaging Ramesys Private Limited ("Ramesys", "we", "us", or "our") for website engineering, application development, custom software systems, digital marketing, or technology consultancy, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not access our website or engage our services.',
    },
    {
      title: "2. Services Offered",
      content:
        "Ramesys provides custom technology solutions, including software development, web engineering, mobile applications, cloud integrations, digital growth strategies, and ongoing technical support. Specific scope, deliverables, timelines, and pricing for client projects are defined in mutually agreed Statements of Work (SOW), project proposals, or service contracts.",
    },
    {
      title: "3. Client Obligations & Project Assets",
      content:
        "Clients are responsible for providing clear requirements, necessary credentials, brand assets, and timely feedback required for project execution. Delays in providing required materials or feedback may impact agreed project schedules and completion timelines.",
    },
    {
      title: "4. Intellectual Property Rights",
      content:
        "Upon receipt of full payment for a project, the client receives ownership rights to custom code, designs, and deliverables created specifically for that project, as specified in the applicable project agreement. Ramesys retains ownership of pre-existing frameworks, developer tools, reusable modules, and proprietary internal methodology used across engagements.",
    },
    {
      title: "5. Fees & Payment Terms",
      content:
        "Fees for services are outlined in the respective project quote or contract. Payment milestones and invoicing schedules must be adhered to as agreed. Invoices must be paid within the timeline stated on the invoice. We reserve the right to pause work or suspend deployment if payments are past due.",
    },
    {
      title: "6. Confidentiality",
      content:
        "Both Ramesys and the client agree to protect non-public proprietary information, business logic, customer data, and source code disclosed during the engagement. Confidential information will not be disclosed to third parties without prior written consent, except as required by applicable law.",
    },
    {
      title: "7. Warranties & Service Quality",
      content:
        "Ramesys warrants that services will be performed with professional diligence and standard industry practices. Custom software deliverables will include a standard bug-fix warranty period as specified in the project contract following project handover.",
    },
    {
      title: "8. Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Ramesys shall not be liable for indirect, incidental, consequential, special, or punitive damages, including loss of data, profit, or business interruption. Aggregate liability arising from any service shall not exceed the total fees paid by the client under the specific engagement giving rise to the claim.",
    },
    {
      title: "9. Termination",
      content:
        "Either party may terminate a project or agreement according to the cancellation terms set forth in the project contract. Upon termination, the client shall pay for all work completed and expenses incurred up to the effective date of termination.",
    },
    {
      title: "10. Governing Law & Dispute Resolution",
      content:
        "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms or our services shall be subject to the exclusive jurisdiction of the courts in West Bengal, India.",
    },
  ];

  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-24 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-16">
        <SectionHeader
          badgeText="Terms of Service"
          title="Terms & Conditions"
          subtitle={`Last updated: ${lastUpdated}. Please review the terms governing our software engineering and technology services.`}
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

            <div className="pt-8 border-t border-white/10 space-y-6">
              <h2 className="text-2xl font-bold gradient-text">
                11. Corporate & Legal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-base">
                <div>
                  <span className="block font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                    Company Name
                  </span>
                  Ramesys Private Limited
                </div>
                <div>
                  <span className="block font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                    CIN
                  </span>
                  U62011WR2026PTC292702
                </div>
                <div>
                  <span className="block font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                    GST
                  </span>
                  19AAPCR6449A1Z2
                </div>
                <div>
                  <span className="block font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:contact@ramesys.co.uk"
                    className="text-primary font-semibold hover:underline"
                  >
                    contact@ramesys.co.uk
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 text-gray-300 text-base">
                <div>
                  <span className="block font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                    Corporate Address
                  </span>
                  <p className="leading-relaxed">
                    Godrej Genesis, 16th floor Unit 1604, Street Number 18 EP &
                    GP block salt lake sector V, Bidhannagar, West Bengal,
                    700091
                  </p>
                </div>
                <div>
                  <span className="block font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                    Registered Address
                  </span>
                  <p className="leading-relaxed">
                    Uttarpara, Hooghly,712258, 1 Radhika Charan Chatter,
                    Uttarpara, Hooghly, Serampur Uttarpara, West Bengal, India,
                    712258
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
