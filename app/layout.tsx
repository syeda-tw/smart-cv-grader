import type { Metadata } from "next";
import "./globals.css";
import { Brain, Heart } from "lucide-react";
import TrialCounter from "@/components/TrialCounter";

export const metadata: Metadata = {
  title: "CV Match AI",
  description: "CV Match AI saves you time by showing which jobs are worth applying to",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-foreground rounded-md flex items-center justify-center">
                  <Brain className="h-4 w-4 text-background" />
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  CV Match AI
                </span>
              </div>
              <TrialCounter />
            </div>
          </header>

          {/* Main Content */}
          <main className="min-h-screen bg-background container mx-auto px-6 py-8 max-w-4xl">
            {children}
          </main>

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
                CV Match AI saves you time by showing which jobs are worth applying
                to
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
                  Syeda Taqvi{" "}
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
