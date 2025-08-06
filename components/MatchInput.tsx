"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  cvContent: z
    .string()
    .min(100, "Please provide more information in the CV field.")
    .max(50000, "CV content is too long"),
  jobDescription: z
    .string()
    .min(100, "Please provide more information in the Job Description field")
    .max(50000, "Job Description is too long"),
});

type FormData = z.infer<typeof formSchema>;

const MatchInput = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cvContent: "",
      jobDescription: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // TODO: Implement the actual submission logic
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Paste your CV</CardTitle>
            <CardDescription>
              Paste your CV content as text in the field below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="cvContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CV Content</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      error={!!form.formState.errors.cvContent}
                      errorMessage={form.formState.errors.cvContent?.message}
                      placeholder="Paste your CV content here..."
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Step 2: Paste your Job Description</CardTitle>
            <CardDescription>
              Paste your Job Description content as text in the field below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      error={!!form.formState.errors.jobDescription}
                      errorMessage={form.formState.errors.jobDescription?.message}
                      placeholder="Paste your Job Description content here..."
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Button type="submit">Analyze Job Post</Button>
        </div>
      </form>
    </Form>
  );
};

export default MatchInput;
