import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/FileUpload";
import { Sparkles } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  cvContent: z.string().min(10, "CV content must be at least 10 characters long"),
  jobDescription: z.string().min(10, "Job description must be at least 10 characters long"),
});

type FormData = z.infer<typeof formSchema>;

interface MatchInputProps {
  cvContent: string;
  jobDescription: string;
  onCvContentChange: (content: string) => void;
  onJobDescriptionChange: (description: string) => void;
  onAnalyze: () => void;
  isAnalyzing?: boolean;
}

export default function MatchInput({
  cvContent,
  jobDescription,
  onCvContentChange,
  onJobDescriptionChange,
  onAnalyze,
  isAnalyzing = false,
}: MatchInputProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    values: {
      cvContent,
      jobDescription,
    },
    mode: "onChange",
  });

  const handleSubmit = (data: FormData) => {
    // Ensure parent state is updated with latest form values
    onCvContentChange(data.cvContent);
    onJobDescriptionChange(data.jobDescription);
    onAnalyze();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 animate-fade-in">
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Upload Your CV</h2>
            <FormField
              control={form.control}
              name="cvContent"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileUpload
                      onContentChange={(content) => {
                        field.onChange(content);
                        onCvContentChange(content);
                      }}
                      value={field.value}
                      placeholder="Paste your CV content here or upload a file..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Job Description</h2>
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the job description here..."
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        onJobDescriptionChange(e.target.value);
                      }}
                      className="min-h-[200px] resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        <Card className="p-6 text-center">
          <Button
            type="submit"
            size="lg"
            className="gap-2 px-12"
            disabled={!form.formState.isValid || isAnalyzing}
          >
            <Sparkles className="h-5 w-5" />
            Analyze with AI
          </Button>
        </Card>
      </form>
    </Form>
  );
}
