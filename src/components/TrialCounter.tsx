import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface TrialCounterProps {
  onTrialChange?: (remainingTrials: number) => void;
}

const TRIAL_STORAGE_KEY = "cv-match-trials";
const MAX_TRIALS = 3;

export function TrialCounter({ onTrialChange }: TrialCounterProps) {
  const [remainingTrials, setRemainingTrials] = useState(MAX_TRIALS);

  useEffect(() => {
    const stored = localStorage.getItem(TRIAL_STORAGE_KEY);
    const trials = stored ? parseInt(stored) : MAX_TRIALS;
    setRemainingTrials(trials);
    onTrialChange?.(trials);
  }, [onTrialChange]);

  const useTrialAsync = async (): Promise<boolean> => {
    if (remainingTrials <= 0) return false;
    
    const newCount = remainingTrials - 1;
    setRemainingTrials(newCount);
    localStorage.setItem(TRIAL_STORAGE_KEY, newCount.toString());
    onTrialChange?.(newCount);
    return true;
  };

  // Expose the function globally for use in other components
  useEffect(() => {
    (window as any).useTrialAsync = useTrialAsync;
  }, [remainingTrials]);

  const getVariant = () => {
    if (remainingTrials === 0) return "destructive";
    if (remainingTrials === 1) return "outline";
    return "secondary";
  };

  return (
    <div className="flex items-center gap-2">
      <Badge variant={getVariant()} className="font-medium">
        {remainingTrials} free {remainingTrials === 1 ? 'analysis' : 'analyses'} remaining
      </Badge>
    </div>
  );
}

export const useTrial = () => {
  return {
    useTrialAsync: (window as any).useTrialAsync || (() => Promise.resolve(false))
  };
};