import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, TrendingUp, RotateCcw } from "lucide-react";

interface MatchResultsProps {
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  onTryAgain: () => void;
}

export function MatchResults({ 
  matchPercentage, 
  matchedSkills, 
  missingSkills, 
  onTryAgain 
}: MatchResultsProps) {
  const getMatchColor = () => {
    if (matchPercentage >= 80) return "text-success";
    if (matchPercentage >= 60) return "text-accent";
    return "text-destructive";
  };

  const getMatchMessage = () => {
    if (matchPercentage >= 80) return "Excellent match! You're well-suited for this role.";
    if (matchPercentage >= 60) return "Good match! Consider highlighting relevant experience.";
    if (matchPercentage >= 40) return "Moderate match. Focus on developing missing skills.";
    return "Low match. Consider building more relevant experience.";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="p-6 text-center">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className={`text-4xl font-bold ${getMatchColor()}`}>
              {matchPercentage}%
            </div>
            <h2 className="text-xl font-semibold">CV-Job Match Score</h2>
            <p className="text-muted-foreground">{getMatchMessage()}</p>
          </div>
          
          <Progress value={matchPercentage} className="w-full h-3" />
          
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Based on AI analysis of your skills and experience
            </span>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <h3 className="font-semibold">Matched Skills</h3>
              <Badge variant="secondary">{matchedSkills.length}</Badge>
            </div>
            
            <div className="space-y-2">
              {matchedSkills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {matchedSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-success/10 text-success border-success/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No matching skills identified.</p>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" />
              <h3 className="font-semibold">Missing Skills</h3>
              <Badge variant="secondary">{missingSkills.length}</Badge>
            </div>
            
            <div className="space-y-2">
              {missingSkills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-destructive/20 text-destructive">
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Great! No missing critical skills.</p>
              )}
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 text-center">
        <Button 
          onClick={onTryAgain} 
          size="lg" 
          variant="accent"
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Try Another Analysis
        </Button>
      </Card>
    </div>
  );
}