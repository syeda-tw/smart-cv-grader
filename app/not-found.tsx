import Link from "next/link";
import { Frown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-background p-4">
      <Card className="text-center max-w-md mx-auto border-none shadow-lg">
        <CardContent className="p-8">
          {/* Cute sad face icon */}
          <div className="flex justify-center mb-6">
              <Frown className="h-16 w-16 text-accent dark:text-primary" />
          </div>
          
          {/* Cutesy 404 message */}
          <h1 className="text-6xl font-bold text-primary dark:text-primary mb-2">
              Oopsie! 
          </h1>
         
          <p className="text-lg text-text/70 dark:text-text/70 mb-6 leading-relaxed">
            Looks like this page decided to play hide and seek...
            <br />
            <span className="text-sm">and it's really good at it!</span>
            <br />
          </p>
          
          {/* Cute home button using UI Button component */}
          <Button 
            asChild
            variant="default"
            size="lg"
          >
            <Link href="/">
              <Home className="h-5 w-5" />
              Take me home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}