import { ArrowRight, CheckCircle, Users, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            N8NHub
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 opacity-95">
            Enterprise Automation Architecture
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Founded by Andrew Lewin, we help organizations build intelligent automation 
            workflows that deliver measurable business outcomes through managed architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="font-semibold shadow-professional"
              asChild
            >
              <a href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="font-semibold border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Founder & Chief Architect
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Andrew Lewin founded N8NHub with over 20 years of technical leadership 
                experience. Our team specializes in designing and implementing automation 
                solutions that drive operational efficiency and business growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">20+ Years Technical Leadership</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Enterprise-Scale Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Automation Architecture Expert</span>
                </div>
              </div>
              <Button className="mt-6" asChild>
                <a href="/about">Learn More About N8NHub</a>
              </Button>
            </div>
            <div className="bg-gradient-subtle p-8 rounded-lg shadow-card">
              <blockquote className="text-lg italic text-muted-foreground">
                "Automation isn't just about efficiency—it's about empowering teams to focus on 
                strategic initiatives that drive real business value."
              </blockquote>
              <cite className="block mt-4 text-sm font-semibold text-foreground">
                — Andrew Lewin, Founder & Chief Architect, N8NHub
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Automation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team delivers comprehensive automation solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Architecture Consulting
                </h3>
                <p className="text-muted-foreground">
                  Strategic planning and design of enterprise automation architectures 
                  tailored to your business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Process Automation
                </h3>
                <p className="text-muted-foreground">
                  Implementation of intelligent automation solutions to streamline 
                  operations and reduce manual overhead.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Technical Leadership
                </h3>
                <p className="text-muted-foreground">
                  Guidance and mentorship for technical teams implementing 
                  automation strategies and best practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our enterprise automation architecture can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:andrew@n8nhub.com">
                Email Directly
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;