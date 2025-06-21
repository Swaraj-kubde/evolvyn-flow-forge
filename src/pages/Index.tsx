
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Users, FileText, Calendar, Database, LayoutDashboard, Mail, MessageSquare, Check, Invoice } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Lead Capture & Management",
      description: "Automatically capture and nurture leads with intelligent workflows that convert prospects into clients."
    },
    {
      icon: FileText,
      title: "Automated Proposals",
      description: "Generate professional proposals in minutes using AI-powered templates tailored to your services."
    },
    {
      icon: Calendar,
      title: "Client Onboarding",
      description: "Streamline client onboarding with automated workflows that ensure nothing falls through the cracks."
    },
    {
      icon: Invoice,
      title: "Smart Invoicing",
      description: "Automate invoice generation, tracking, and follow-ups to get paid faster and more consistently."
    }
  ];

  const benefits = [
    "Save 15+ hours per week on administrative tasks",
    "Close deals 40% faster with automated proposals",
    "Reduce client onboarding time by 60%",
    "Never miss a follow-up or payment reminder"
  ];

  const testimonials = [
    {
      quote: "Evolvyn transformed our agency operations. We're closing deals faster and our clients love the seamless experience.",
      author: "Sarah Chen",
      role: "Founder, Digital Growth Co",
      company: "150+ clients served"
    },
    {
      quote: "The automation has freed up my team to focus on strategy instead of paperwork. Game changer for consultants.",
      author: "Marcus Rodriguez",
      role: "Senior Consultant",
      company: "Tech Advisory Partners"
    },
    {
      quote: "Our proposal turnaround went from days to hours. The ROI was immediate and substantial.",
      author: "Emily Watson",
      role: "CEO, Strategy Plus",
      company: "$2M+ in proposals generated"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Trusted by 500+ Service Businesses
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Backend 
              <span className="text-blue-600"> Automation</span> for Service Businesses
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help IT firms, coaches, and consultants save time, close deals faster, and run operations smoothly with intelligent automation systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
                Book Free Demo
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold">
                View Case Studies
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 30-minute setup • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by leading service businesses</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-semibold text-lg">TechConsult Pro</div>
            <div className="text-gray-400 font-semibold text-lg">Growth Partners</div>  
            <div className="text-gray-400 font-semibold text-lg">Digital Advisory</div>
            <div className="text-gray-400 font-semibold text-lg">Strategy Labs</div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stop Losing Time on Manual Tasks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Service businesses waste 40% of their time on administrative work. 
              Evolvyn automates your backend operations so you can focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before Evolvyn</h3>
              <ul className="space-y-4">
                {[
                  "Hours spent on manual proposal creation",
                  "Lost leads due to slow follow-up",
                  "Chaotic client onboarding process", 
                  "Invoice delays and payment issues"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">After Evolvyn</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Scale Your Service Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform handles your entire backend workflow, from lead capture to payment collection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Evolvyn Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running in 30 minutes with our intuitive PERN stack dashboard.
            </p>
          </div>

          <div className="relative">
            {/* Dashboard Preview Placeholder */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12 shadow-xl">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6 border-b pb-4">
                  <LayoutDashboard className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Evolvyn Dashboard</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Active Leads</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">47</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Proposals Sent</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">23</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Invoice className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Revenue This Month</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">$47.2k</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Connect Your Tools", desc: "Link your existing CRM, email, and accounting software in minutes." },
                { step: "2", title: "Configure Workflows", desc: "Set up automated workflows using our intuitive drag-and-drop builder." },
                { step: "3", title: "Watch It Work", desc: "Sit back as Evolvyn handles lead nurturing, proposals, and invoicing automatically." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Loved by Service Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about their results with Evolvyn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Service Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ service professionals who have transformed their operations with Evolvyn. 
            Book a free demo and see results in your first week.
          </p>
          
          <Button size="lg" className="px-8 py-3 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 mb-4">
            Book Your Free Demo
          </Button>
          
          <p className="text-blue-200 text-sm">
            30-minute personalized demo • No sales pressure • Implementation support included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Evolvyn</h3>
              <p className="text-gray-400 mb-4">
                AI-powered backend automation for service businesses.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Integrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Evolvyn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
