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
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-foreground rounded-md flex items-center justify-center">
              <Brain className="h-4 w-4 text-background" />
            </div>
            <span className="text-lg font-semibold tracking-tight">CV Match AI</span>
          </div>
          <TrialCounter />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Perfect CV Matching for Job Hunters & Freelancers
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover how well your CV fits job requirements and get actionable insights 
              to improve your match rate. Get 3 free analyses per day with our advanced AI.
            </p>
            <div className="flex items-center justify-center gap-12 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="h-5 w-5" />
                <span className="text-sm font-medium">Perfect for Job Hunters</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">Ideal for Freelancers</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gap-2 px-8 font-medium"
                onClick={() => navigate('/matcher')}
              >
                Start Free Analysis
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="text-sm text-muted-foreground font-medium">
                3 free analyses per day • No signup required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Simple, fast, and accurate CV analysis in three steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center card-hover border-border/60 bg-background/80 backdrop-blur-sm animate-slide-up">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mx-auto">
                    <feature.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Built for Job Hunters & Freelancers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're applying for full-time positions or freelance projects, 
                get detailed insights into how well your CV matches requirements 
                and receive actionable recommendations to improve your chances.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                variant="accent" 
                className="gap-2 font-medium"
                onClick={() => navigate('/matcher')}
              >
                Get 3 Free Analyses Today
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-10 bg-muted/50 border-border/60 card-hover">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-foreground mb-3">87%</div>
                    <p className="text-muted-foreground font-medium">Average Match Score</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">JavaScript</span>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">React.js</span>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">Node.js</span>
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
      <footer className="py-16 px-6 border-t border-border">
        <div className="container mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
              <Brain className="h-4 w-4 text-background" />
            </div>
            <span className="font-semibold tracking-tight">CV Match AI</span>
          </div>
          <p className="text-muted-foreground font-medium">
            Empowering job seekers with AI-driven CV analysis
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by</span>
            <a 
              href="https://github.com/syeda-tw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              https://github.com/syeda-tw
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}