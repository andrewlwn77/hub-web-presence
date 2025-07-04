const Privacy = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Privacy Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Information We Collect</h3>
              <p className="text-muted-foreground mb-4">
                n8nhub.com collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Send us an email or contact us through our website</li>
                <li>Request information about our services</li>
                <li>Engage with us for business consultation purposes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">How We Use Information</h3>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Communicate with you about our services</li>
                <li>Provide enterprise automation consulting services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Information Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except as described in this policy. We may share information in response to legal process 
                or to protect our rights and the rights of others.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Data Security</h3>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:andrew@n8nhub.com" className="text-primary hover:underline">
                  andrew@n8nhub.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Terms of Service</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By accessing and using n8nhub.com, you accept and agree to be bound by the terms 
                and provision of this agreement. These terms apply to all visitors, users, and 
                others who access or use the service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Services</h3>
              <p className="text-muted-foreground mb-4">
                n8nhub provides enterprise automation architecture consulting services, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Architecture consulting and strategic planning</li>
                <li>Process automation implementation</li>
                <li>Technical leadership and mentorship</li>
                <li>System integration services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Services</h3>
              <p className="text-muted-foreground">
                All professional services are provided by Andrew Lewin, an experienced Enterprise 
                Automation Architect with 20+ years of technical leadership experience. Services 
                are subject to separate consulting agreements and terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Intellectual Property</h3>
              <p className="text-muted-foreground">
                The content, organization, graphics, design, and other matters related to n8nhub.com 
                are protected under applicable copyrights and other proprietary laws. Copying, 
                redistribution, or publication of any such matters is strictly prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                In no event shall n8nhub or Andrew Lewin be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of or relating to your 
                use of the website or services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Governing Law</h3>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with applicable local 
                laws. Any disputes arising under these terms shall be subject to the jurisdiction 
                of the appropriate courts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Changes to Terms</h3>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be posted on 
                this page with an updated revision date. Your continued use of the website after 
                any changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:andrew@n8nhub.com" className="text-primary hover:underline">
                  andrew@n8nhub.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Professional Statement */}
        <div className="bg-gradient-subtle p-8 rounded-lg shadow-card">
          <h2 className="text-2xl font-bold mb-4 text-foreground text-center">
            Professional Business Operations
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            n8nhub operates as a professional enterprise automation consulting business, 
            committed to maintaining the highest standards of service delivery, client 
            confidentiality, and business ethics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;