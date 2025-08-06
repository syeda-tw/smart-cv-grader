import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrialCounter } from "@/components/TrialCounter";
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  Heart,
  ListChecks,
  Upload,
  PlayCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Upload,
      title: "Add Your CV & Job Post",
      description:
        "Start by uploading your CV and pasting in the job description you’re targeting.",
    },
    {
      icon: PlayCircle,
      title: "Run Smart Analysis",
      description:
        "Our AI instantly compares your CV against the job requirements to understand the fit.",
    },
    {
      icon: ListChecks,
      title: "Get Your Match Report",
      description:
        "See what skills match, what’s missing, and your overall match percentage—so you can apply smarter.",
    },
  ];

  const benefits = [
    "Avoid applying to jobs that aren't a good fit",
    "Apply smarter with targeted job matching",
    "Save time with instant AI-powered analysis",
    "Stay focused on roles aligned with your skills",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Perfect{" "}
              <span className="inline-block text-accent">CV Matching</span>{" "}
              <br /> for Job Seekers
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Know if a job is worth applying to, before you apply. Upload your
              CV and a job post to see how well they match, and get clear
              suggestions to boost your chances.
            </p>
            <div className="flex items-center justify-center gap-12 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="h-5 w-5" />
                <span className="text-sm font-medium">
                  3 free analyses per day
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">No signup required</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="gap-2 px-8 font-medium"
                onClick={() => navigate("/matcher")}
              >
                Analyze Job Post
                <ArrowRight className="h-4 w-4" />
              </Button>
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
              Instantly analyze any job post against your CV in three simple
              steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center card-hover border-border/60 bg-background/80 backdrop-blur-sm animate-slide-up"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mx-auto">
                    <feature.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
                Built for Job Seekers & Freelancers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're applying for full-time roles or freelance gigs,
                CV Match AI quickly spot job posts that actually align with your
                CV—so you don’t waste time on mismatches or chase the wrong
                opportunities.
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
                onClick={() => navigate("/matcher")}
              >
                Analyze 3 Job Posts Today
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-10 bg-muted/50 border-border/60 card-hover">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-foreground mb-3">
                      87%
                    </div>
                    <p className="text-muted-foreground font-medium">
                      Average Match Score
                    </p>
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
    </Layout>
  );
}
