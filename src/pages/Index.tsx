import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Calendar, Receipt, LayoutDashboard, Check, Shield, Code, Globe } from 'lucide-react';

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
      icon: Receipt,
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

  return (
    <div className="min-h-screen bg-white relative">
      {/* Network Grid Background */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/af94c729-7a05-474a-87b8-570189ede139.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Navbar */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent">CoslynAI</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#6C4FD6] transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-[#6C4FD6] transition-colors">How it Works</a>
              <a href="#contact" className="text-gray-600 hover:text-[#6C4FD6] transition-colors">Contact</a>
              <Button 
                size="sm" 
                className="text-white border-0"
                style={{
                  background: 'linear-gradient(135deg, #6C4FD6 0%, #24E8F8 100%)'
                }}
                onClick={() => window.open('https://evolvyn-form1.vercel.app/', '_blank')}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark Gradient */}
      <section className="relative overflow-hidden z-10" style={{
        background: 'linear-gradient(135deg, #0D1E44 0%, #102A5B 100%)'
      }}>
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge 
              variant="secondary" 
              className="mb-8 px-6 py-3 text-sm font-medium bg-white/10 text-white border-white/20 backdrop-blur-sm"
            >
              AI-Powered Backend Automation
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              AI-Powered Business 
              <span className="block bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Help IT firms, coaches, and consultants save time, close deals faster, and run operations smoothly with intelligent automation systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="px-10 py-4 text-lg font-semibold text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #6C4FD6 0%, #24E8F8 100%)'
                }}
                onClick={() => window.open('https://evolvyn-form1.vercel.app/', '_blank')}
              >
                Book Free Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-4 text-lg font-semibold bg-transparent border-2 border-[#6C4FD6] text-white hover:bg-[#6C4FD6]/10 transition-all duration-300"
              >
                View Case Studies
              </Button>
            </div>
            
            <p className="text-sm text-[#E0E0E0]/60 mt-6">
              No credit card required • 30-minute setup • Cancel anytime
            </p>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none"></div>
      </section>

      {/* Problem/Solution */}
      <section className="bg-white/90 backdrop-blur-sm py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1E44] mb-8 tracking-tight">
              Stop Losing Time on Manual Tasks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Service businesses waste 40% of their time on administrative work. 
              <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent"> CoslynAI </span>
              automates your backend operations so you can focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#0D1E44] mb-8">Before 
                <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent"> CoslynAI</span>
              </h3>
              <ul className="space-y-6">
                {[
                  "Hours spent on manual proposal creation",
                  "Lost leads due to slow follow-up",
                  "Chaotic client onboarding process", 
                  "Invoice delays and payment issues"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#0D1E44] mb-8">After 
                <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent"> CoslynAI</span>
              </h3>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-[#24E8F8] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F9FAFB]/90 backdrop-blur-sm py-24 relative z-10" id="features">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1E44] mb-8 tracking-tight">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Our AI-powered platform handles your entire backend workflow, from lead capture to payment collection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#24E8F8]/10 to-[#6C4FD6]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-[#24E8F8]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#0D1E44] leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-white/90 backdrop-blur-sm py-24 relative z-10" id="how-it-works">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1E44] mb-8 tracking-tight">
              How 
              <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent"> CoslynAI </span>
              Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Get up and running in 30 minutes with our intuitive PERN stack dashboard.
            </p>
          </div>

          <div className="relative mb-16">
            {/* Dashboard Preview - Dark Theme */}
            <div className="bg-gradient-to-br from-[#0D1E44] to-[#102A5B] rounded-3xl p-8 shadow-2xl">
              <div className="bg-[#1a2b4a] rounded-2xl shadow-xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                  <LayoutDashboard className="w-7 h-7 text-[#24E8F8]" />
                  <h3 className="text-xl font-semibold text-white">
                    <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent">CoslynAI</span> Dashboard
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-[#24E8F8]" />
                      <span className="text-sm font-medium text-white/80">Active Leads</span>
                    </div>
                    <div className="text-3xl font-bold text-white">47</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-5 h-5 text-[#6C4FD6]" />
                      <span className="text-sm font-medium text-white/80">Proposals Sent</span>
                    </div>
                    <div className="text-3xl font-bold text-white">23</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Receipt className="w-5 h-5 text-[#24E8F8]" />
                      <span className="text-sm font-medium text-white/80">Revenue This Month</span>
                    </div>
                    <div className="text-3xl font-bold text-white">$47.2k</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              {[
                { step: "1", title: "Connect Your Tools", desc: "Link your existing CRM, email, and accounting software in minutes." },
                { step: "2", title: "Configure Workflows", desc: "Set up automated workflows using our intuitive drag-and-drop builder." },
                { step: "3", title: "Watch It Work", desc: "Sit back as EvolvynAi handles lead nurturing, proposals, and invoicing automatically." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #6C4FD6 0%, #24E8F8 100%)'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D1E44] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden z-10" style={{
        background: 'linear-gradient(135deg, #0D1E44 0%, #102A5B 100%)'
      }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Automate Your Service Business?
          </h2>
          <p className="text-xl text-[#E0E0E0] mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Transform your operations with 
            <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent font-semibold"> CoslynAI's </span>
            AI-powered automation. 
            Book a free demo and see results in your first week.
          </p>
          
          <Button 
            size="lg" 
            className="px-12 py-4 text-lg font-semibold bg-white text-[#0D1E44] hover:bg-gray-100 mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://evolvyn-form1.vercel.app/', '_blank')}
          >
            Book Your Free Demo
          </Button>
          
          <p className="text-[#E0E0E0]/60 text-sm">
            30-minute personalized demo • No sales pressure • Implementation support included
          </p>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="bg-[#F9FAFB]/90 backdrop-blur-sm py-16 border-t border-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-[#24E8F8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0D1E44] mb-2">Trusted by service businesses</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security and reliability</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 text-[#24E8F8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0D1E44] mb-2">GDPR-safe & secure</h3>
              <p className="text-gray-600 text-sm">Full compliance with data protection regulations</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Code className="w-12 h-12 text-[#24E8F8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0D1E44] mb-2">No coding required for end users</h3>
              <p className="text-gray-600 text-sm">Simple, intuitive interface for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1E44] py-16 relative z-10" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#6C4FD6] to-[#24E8F8] bg-clip-text text-transparent">CoslynAI</span>
              </h3>
              <p className="text-[#E0E0E0]/80 mb-6 leading-relaxed">
                AI-powered backend automation for service businesses.
              </p>
              <div className="text-[#E0E0E0]/60 text-sm">
                <p>contact@coslynai.com</p>
                <p>+91 9146867271</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-[#E0E0E0]/80">
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Features</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Case Studies</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Integrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-[#E0E0E0]/80">
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-[#E0E0E0]/80">
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">API Reference</li>
                <li className="hover:text-[#24E8F8] transition-colors cursor-pointer">Status</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-[#E0E0E0]/60">
            <p>&copy; 2025 CoslynAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
