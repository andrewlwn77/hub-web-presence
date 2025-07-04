import { Target, Zap, Users, Settings, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Architecture Consulting",
      description: "Strategic planning and design of enterprise automation architectures tailored to your business needs and scalability requirements.",
      features: [
        "Enterprise automation strategy development",
        "Technology stack evaluation and selection",
        "Scalability and performance planning",
        "Integration architecture design",
        "Risk assessment and mitigation"
      ]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Implementation of intelligent automation solutions to streamline operations, reduce manual overhead, and improve efficiency.",
      features: [
        "Workflow analysis and optimization",
        "Custom automation development",
        "Legacy system integration",
        "API design and implementation",
        "Performance monitoring setup"
      ]
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Guidance and mentorship for technical teams implementing automation strategies, best practices, and organizational transformation.",
      features: [
        "Team leadership and mentorship",
        "Technical training and knowledge transfer",
        "Best practices implementation",
        "Code review and quality assurance",
        "Change management support"
      ]
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration of automation solutions with existing enterprise systems and third-party platforms.",
      features: [
        "Enterprise system integration",
        "API development and management",
        "Data migration and synchronization",
        "Security implementation",
        "Testing and validation"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Automation Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            N8NHub delivers comprehensive enterprise automation solutions designed to transform your business 
            operations and drive sustainable growth through intelligent technology implementation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-professional transition-smooth">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Approach Section */}
        <div className="mb-16 bg-gradient-subtle p-8 rounded-lg shadow-card">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Assess</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of current processes, systems, and automation opportunities 
                to identify the highest-impact improvements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Design</h3>
              <p className="text-muted-foreground">
                Strategic architecture planning with scalability, maintainability, and 
                performance at the core of every solution design.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Implement</h3>
              <p className="text-muted-foreground">
                Careful execution with continuous testing, monitoring, and optimization 
                to ensure successful deployment and adoption.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Why Choose N8NHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Code className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  20+ Years Experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proven track record in enterprise automation and technical leadership
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Business-Focused
                </h3>
                <p className="text-sm text-muted-foreground">
                  Solutions aligned with strategic objectives and measurable outcomes
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Scalable Solutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Architectures designed to grow with your business needs
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Team Empowerment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Focus on enabling teams to achieve their full potential
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your automation needs and explore how our team can transform your 
            business operations together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:andrew@n8nhub.com">
                Contact Our Team
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;