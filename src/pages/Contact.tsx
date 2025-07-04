import { Mail, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business operations through enterprise automation? 
            Let's start a conversation about your automation needs and goals.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email Contact */}
          <Card className="shadow-card hover:shadow-professional transition-smooth">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Email Andrew</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                For business inquiries, consultation requests, or general questions about 
                enterprise automation architecture services.
              </p>
              <Button size="lg" className="w-full" asChild>
                <a href="mailto:andrew@n8nhub.com">
                  andrew@n8nhub.com
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Professional Inquiry */}
          <Card className="shadow-card hover:shadow-professional transition-smooth">
            <CardHeader className="text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Professional Inquiry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Interested in discussing a specific project or exploring how automation 
                can benefit your organization? Let's connect.
              </p>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="mailto:andrew@n8nhub.com?subject=Professional%20Inquiry%20-%20Enterprise%20Automation">
                  Send Professional Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* What to Include */}
        <div className="mb-16 bg-gradient-subtle p-8 rounded-lg shadow-card">
          <h2 className="text-2xl font-bold mb-6 text-foreground text-center">
            What to Include in Your Message
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">For Consultation Requests:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Brief description of your organization and industry
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Current automation challenges or opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Specific goals or outcomes you're looking to achieve
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Timeline considerations for your project
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">For General Inquiries:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Your role and organization background
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Specific questions about automation services
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Any relevant technical or business context
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Preferred method and timing for follow-up
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Response Information */}
        <div className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Response Time & Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-primary">24</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Initial response time for all professional inquiries
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed review of your requirements and goals
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Follow-up</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized response with next steps or recommendations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Note */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Professional Business Services
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            n8nhub provides enterprise automation architecture services with 20+ years of 
            technical leadership experience. All communications are handled professionally 
            and confidentially.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:andrew@n8nhub.com">
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

export default Contact;