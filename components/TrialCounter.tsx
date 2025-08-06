'use client';

import { useState, useEffect } from 'react';

const TrialCounter = () => {
  const [trialCount, setTrialCount] = useState(0);
  const maxTrials = 3;

  useEffect(() => {
    // Get trial count from localStorage
    const savedCount = localStorage.getItem('cvMatchTrialCount');
    if (savedCount) {
      setTrialCount(parseInt(savedCount, 10));
    }
  }, []);

  const remainingTrials = maxTrials - trialCount;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Trials remaining:</span>
      <span className={`font-semibold ${remainingTrials <= 1 ? 'text-destructive' : 'text-foreground'}`}>
        {remainingTrials}
      </span>
    </div>
  );
};

export default TrialCounter; 