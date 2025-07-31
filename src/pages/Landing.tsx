import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrialCounter } from "@/components/TrialCounter";
import { Brain, Target, Zap, ArrowRight, CheckCircle, Users, Briefcase, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your CV against job requirements"
    },
    {
      icon: Target,
      title: "Skill Matching",
      description: "Identify which skills match and what's missing for your target role"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get detailed feedback in seconds, not hours"
    }
  ];

  const benefits = [
    "Improve your CV match rate",
    "Identify skill gaps to focus on",
    "Increase interview chances",
    "Save time with instant analysis"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">CV Match AI</span>
          </div>
          <TrialCounter />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect CV Matching for Job Hunters & Freelancers
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how well your CV fits job requirements and get actionable insights 
              to improve your match rate. Get 3 free analyses per day with our advanced AI.
            </p>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="h-5 w-5" />
                <span>Perfect for Job Hunters</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>Ideal for Freelancers</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gap-2 px-8"
                onClick={() => navigate('/matcher')}
              >
                Start Free Analysis
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="text-sm text-muted-foreground">
                3 free analyses per day • No signup required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, fast, and accurate CV analysis in three steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-up">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Built for Job Hunters & Freelancers
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're applying for full-time positions or freelance projects, 
                get detailed insights into how well your CV matches requirements 
                and receive actionable recommendations to improve your chances.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                variant="accent" 
                className="gap-2"
                onClick={() => navigate('/matcher')}
              >
                Get 3 Free Analyses Today
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">87%</div>
                    <p className="text-muted-foreground">Average Match Score</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>JavaScript</span>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>React.js</span>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Node.js</span>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">CV Match AI</span>
          </div>
          <p className="text-muted-foreground">
            Empowering job seekers with AI-driven CV analysis
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by</span>
            <a 
              href="https://github.com/syeda-tw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://github.com/syeda-tw
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}