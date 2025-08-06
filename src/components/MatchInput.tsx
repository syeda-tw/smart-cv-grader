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
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  cvContent: z
    .string({
      required_error:
        "You need to either upload your CV as a valid TXT, DOCX, or PDF file, or paste it as text.",
    })
    .min(
      100,
      "Please provide more information in the CV field or upload a valid file."
    )
    .max(50000, "CV content is too long"),
  jobDescription: z
    .string()
    .min(100, "Please provide more information in the Job Description field")
    .max(50000, "Job Description is too long"),
});

const MatchInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  //const cvContent = form.watch("cvContent");

  //useEffect(() => {
  //  console.log(cvContent);
  //}, [cvContent]);

  const [cvInputType, setCvInputType] = useState<"upload" | "paste">("upload");
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          Step 1: Upload your CV
          <Button
            variant="outline"
            onClick={() =>
              setCvInputType(cvInputType === "upload" ? "paste" : "upload")
            }
          >
            {cvInputType === "upload"
              ? "Paste your CV Text Instead"
              : "Upload your CV File Instead"}
          </Button>
        </CardTitle>
        <CardDescription>
          {cvInputType === "upload"
            ? "Upload your CV as a valid TXT, DOCX, or PDF file"
            : "Paste your CV as text"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {cvInputType === "upload" ? (
              <> 123</>
            ) : (
              //<FormField
              //  control={form.control}
              //  name="cvContent"
              //  render={({ field }) => (
              //    <FormItem>
              //      <FormLabel>CV Content</FormLabel>
              //      <FileUpload
              //        onContentChange={field.onChange}
              //        value={field.value}
              //      />
              //    </FormItem>
              //  )}
              ///>
              <FormField
                control={form.control}
                name="cvContent"
                render={({ field, formState: { errors } }) => (
                  <FormItem>
                    <FormLabel>CV Content</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        error={!!errors.cvContent}
                        errorMessage={errors.cvContent?.message}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
            <Button type="submit">Analyze Job Post</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default MatchInput;
