import { Card } from "@/components/ui/card";
import { Brain, FileText, Target } from "lucide-react";

export function LoadingAnimation() {
  return (
    <Card className="p-8 text-center">
      <div className="space-y-6">
        <div className="flex justify-center items-center space-x-8">
          <div className="animate-pulse">
            <FileText className="h-8 w-8 text-accent" />
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <div className="animate-pulse">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '750ms' }}></div>
          </div>
          <div className="animate-pulse">
            <Target className="h-8 w-8 text-success" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Analyzing your CV...</h3>
          <p className="text-muted-foreground">
            Our AI is comparing your skills and experience with the job requirements
          </p>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-accent to-primary h-2 rounded-full animate-pulse"
            style={{ width: '70%' }}
          ></div>
        </div>
      </div>
    </Card>
  );
}