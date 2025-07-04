import { CheckCircle, Award, Code, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About N8NHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by Andrew Lewin, N8NHub specializes in enterprise automation architecture 
            that delivers measurable business results through managed intelligent systems.
          </p>
        </div>

        {/* Professional Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Our Company
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              N8NHub was founded by Andrew Lewin with over two decades of technical leadership 
              experience. We specialize in designing and implementing enterprise-scale automation 
              solutions that transform business operations and drive sustainable growth.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our expertise spans automation architecture, process optimization, and 
              technical team leadership, helping organizations leverage technology to 
              achieve operational excellence and competitive advantage.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">Enterprise Automation Architecture</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">Technical Leadership & Mentorship</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">Process Optimization & Strategy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">Digital Transformation Consulting</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-subtle p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Philosophy</h3>
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "True automation success comes from understanding both the technical possibilities 
              and the human impact. It's about creating systems that empower people to do their best work."
            </blockquote>
            <p className="text-muted-foreground">
              This human-centered approach to automation has been the foundation of our 
              successful implementations across various industries and organizational scales.
            </p>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-6 text-center">
                <Code className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  System Architecture
                </h3>
                <p className="text-sm text-muted-foreground">
                  Designing scalable, maintainable automation architectures
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Team Leadership
                </h3>
                <p className="text-sm text-muted-foreground">
                  Leading technical teams through complex implementations
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Process Excellence
                </h3>
                <p className="text-sm text-muted-foreground">
                  Optimizing workflows for maximum efficiency and quality
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Strategic Consulting
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aligning technology solutions with business objectives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Experience Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Years Experience</div>
              <div className="text-sm text-muted-foreground">
                Technical leadership and automation expertise
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Projects Delivered</div>
              <div className="text-sm text-muted-foreground">
                Successful automation implementations
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Teams Led</div>
              <div className="text-sm text-muted-foreground">
                Technical professionals mentored and guided
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-subtle p-8 rounded-lg shadow-card">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Discuss Your Automation Needs?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let's explore how N8NHub's enterprise automation architecture can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/services">
                View Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;