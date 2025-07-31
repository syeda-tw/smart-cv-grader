import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onContentChange: (content: string, filename?: string) => void;
  value?: string;
  placeholder?: string;
}

export function FileUpload({ onContentChange, value = "", placeholder = "Paste your CV content here..." }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    if (file.type === "text/plain") {
      const text = await file.text();
      onContentChange(text, file.name);
      setUploadedFile(file.name);
    } else {
      // For now, we'll show a message about unsupported file types
      // In a real app, you'd implement PDF/DOCX parsing
      onContentChange(`[${file.name} uploaded - content parsing not implemented in demo]`, file.name);
      setUploadedFile(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    onContentChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <Card
        className={cn(
          "border-2 border-dashed transition-colors",
          isDragging ? "border-accent bg-accent/5" : "border-muted-foreground/25",
          "hover:border-accent/50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <div className="space-y-2">
            <p className="text-sm font-medium">Upload your CV</p>
            <p className="text-xs text-muted-foreground">
              Drag & drop or click to select • PDF, DOCX, TXT
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-4"
            onClick={() => fileInputRef.current?.click()}
          >
            Choose File
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.docx,.txt"
            onChange={handleFileSelect}
          />
        </div>
      </Card>

      {uploadedFile && (
        <Card className="p-4 bg-accent/5 border-accent/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{uploadedFile}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={clearFile}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium">Or paste CV content</label>
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onContentChange(e.target.value)}
          className="min-h-[120px] resize-none"
        />
      </div>
    </div>
  );
}