"use client";

import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

interface TrialCounterProps {
  onTrialChange?: (remainingTrials: number) => void;
}

const TRIAL_COOKIE_KEY = "cv-match-trials";
const MAX_TRIALS = 3;

export function TrialCounter({ onTrialChange }: TrialCounterProps) {
  const [remainingTrials, setRemainingTrials] = useState(MAX_TRIALS);

  useEffect(() => {
    const stored = Cookies.get(TRIAL_COOKIE_KEY);
    const trials = stored ? parseInt(stored) : MAX_TRIALS;
    setRemainingTrials(trials);
    onTrialChange?.(trials);
  }, [onTrialChange]);

  const useTrialAsync = async (): Promise<boolean> => {
    if (remainingTrials <= 0) return false;
    
    const newCount = remainingTrials - 1;
    setRemainingTrials(newCount);
    // Set cookie to expire in 24 hours
    Cookies.set(TRIAL_COOKIE_KEY, newCount.toString(), { expires: 1 });
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
        {remainingTrials === 0 
          ? 'Come back tomorrow for more free analyses' 
          : `${remainingTrials} free ${remainingTrials === 1 ? 'analysis' : 'analyses'} remaining`
        }
      </Badge>
    </div>
  );
}

export const useTrial = () => {
  return {
    useTrialAsync: (window as any).useTrialAsync || (() => Promise.resolve(false))
  };
};