import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { TrialCounter, useTrial } from "@/components/TrialCounter";
import { FileUpload } from "@/components/FileUpload";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { MatchResults } from "@/components/MatchResults";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type AnalysisState = 'input' | 'analyzing' | 'results';

interface AnalysisResult {
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
}

export default function Matcher() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { useTrialAsync } = useTrial();
  
  const [state, setState] = useState<AnalysisState>('input');
  const [cvContent, setCvContent] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const mockAnalyzeCV = async (): Promise<AnalysisResult> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis based on content
    const cvWords = cvContent.toLowerCase().split(/\s+/);
    const jobWords = jobDescription.toLowerCase().split(/\s+/);
    
    // Simple mock skill extraction
    const allSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker', 'Git', 'TypeScript', 'MongoDB'];
    const matchedSkills = allSkills.filter(skill => 
      cvWords.some(word => word.includes(skill.toLowerCase())) && 
      jobWords.some(word => word.includes(skill.toLowerCase()))
    );
    
    const missingSkills = allSkills.filter(skill => 
      !cvWords.some(word => word.includes(skill.toLowerCase())) && 
      jobWords.some(word => word.includes(skill.toLowerCase()))
    );
    
    const matchPercentage = Math.min(95, Math.max(25, 
      Math.round((matchedSkills.length / (matchedSkills.length + missingSkills.length)) * 100) || 50
    ));

    return {
      matchPercentage,
      matchedSkills: matchedSkills.slice(0, 6), // Limit to 6 for display
      missingSkills: missingSkills.slice(0, 6)  // Limit to 6 for display
    };
  };

  const handleAnalyze = async () => {
    if (!cvContent.trim() || !jobDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both your CV content and job description.",
        variant: "destructive"
      });
      return;
    }

    // Check and use trial
    const canUseTrial = await useTrialAsync();
    if (!canUseTrial) {
      toast({
        title: "No Trials Remaining",
        description: "You've used all your free analyses. Please try again later or upgrade to continue.",
        variant: "destructive"
      });
      return;
    }

    setState('analyzing');
    
    try {
      const analysisResults = await mockAnalyzeCV();
      setResults(analysisResults);
      setState('results');
      
      toast({
        title: "Analysis Complete!",
        description: "Your CV has been successfully analyzed.",
        variant: "default"
      });
    } catch (error) {
      console.error('Analysis failed:', error);
      setState('input');
      
      toast({
        title: "Analysis Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleTryAgain = () => {
    setState('input');
    setResults(null);
    setJobDescription(""); // Clear job description as per requirements
    // Keep CV content as per requirements
  };

  const renderInputs = () => (
    <div className="space-y-8 animate-fade-in">
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upload Your CV</h2>
          <FileUpload 
            onContentChange={(content) => setCvContent(content)}
            value={cvContent}
            placeholder="Paste your CV content here or upload a file..."
          />
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Job Description</h2>
          <Textarea
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="min-h-[200px] resize-none"
          />
        </div>
      </Card>

      <Card className="p-6 text-center">
        <Button 
          onClick={handleAnalyze}
          size="lg"
          className="gap-2 px-12"
          disabled={!cvContent.trim() || !jobDescription.trim()}
        >
          <Sparkles className="h-5 w-5" />
          Analyze with AI
        </Button>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <h1 className="text-xl font-semibold">CV Matcher</h1>
          </div>
          <TrialCounter />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {state === 'input' && renderInputs()}
        {state === 'analyzing' && <LoadingAnimation />}
        {state === 'results' && results && (
          <MatchResults
            matchPercentage={results.matchPercentage}
            matchedSkills={results.matchedSkills}
            missingSkills={results.missingSkills}
            onTryAgain={handleTryAgain}
          />
        )}
      </main>
    </div>
  );
}
