import { useState } from "react";
import { useTrial } from "@/components/TrialCounter";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { MatchResults } from "@/components/MatchResults";
import MatchInput from "@/components/MatchInput";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

type AnalysisState = "input" | "analyzing" | "results";

interface AnalysisResult {
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
}

export default function Matcher() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { useTrialAsync } = useTrial();

  const [state, setState] = useState<AnalysisState>("input");
  const [cvContent, setCvContent] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [results, setResults] = useState<AnalysisResult | null>(null);

  // Replace this with your real API call
  const analyzeCV = async (
    cv: string,
    job: string
  ): Promise<AnalysisResult> => {
    // Example: Replace with actual API call
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cv, job }),
    });
    if (!response.ok) {
      throw new Error("Failed to analyze CV");
    }
    return response.json();
  };

  const handleAnalyze = async () => {
    if (!cvContent.trim() || !jobDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both your CV content and job description.",
        variant: "destructive",
      });
      return;
    }

    // Check and use trial
    const canUseTrial = await useTrialAsync();
    if (!canUseTrial) {
      toast({
        title: "No Trials Remaining",
        description:
          "You've used all your free analyses. Please try again later or upgrade to continue.",
        variant: "destructive",
      });
      return;
    }

    setState("analyzing");

    try {
      const analysisResults = await analyzeCV(cvContent, jobDescription);
      setResults(analysisResults);
      setState("results");

      toast({
        title: "Analysis Complete!",
        description: "Your CV has been successfully analyzed.",
        variant: "default",
      });
    } catch (error) {
      console.error("Analysis failed:", error);
      setState("input");

      toast({
        title: "Analysis Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleTryAgain = () => {
    setState("input");
    setResults(null);
    setJobDescription(""); // Clear job description as per requirements
    // Keep CV content as per requirements
  };



  return (
    <Layout>
      {/* Main Content */}
      {state === "input" && (
        <MatchInput
          cvContent={cvContent}
          jobDescription={jobDescription}
          onCvContentChange={setCvContent}
          onJobDescriptionChange={setJobDescription}
          onAnalyze={handleAnalyze}
        />
      )}
      {state === "analyzing" && <LoadingAnimation />}
      {state === "results" && results && (
        <MatchResults
          matchPercentage={results.matchPercentage}
          matchedSkills={results.matchedSkills}
          missingSkills={results.missingSkills}
          onTryAgain={handleTryAgain}
        />
      )}
    </Layout>
  );
}
