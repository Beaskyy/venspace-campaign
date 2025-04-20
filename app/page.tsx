"use client";

import { Hero } from "@/components/hero";
import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be at most 15 digits" })
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, {
      message: "Please enter a valid phone number",
    }),
  description: z
    .string()
    .min(1, { message: "Please select what best describes you" }),
  testerProgram: z.boolean(),
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      description: "",
      testerProgram: false,
    },
  });

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     setLoading(true);

  //     const apiValues = {
  //       ...values,
  //       testerProgram: values.testerProgram ? "Yes" : "No"
  //     };

  //     const response = await fetch("/api/sheets", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(apiValues),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to submit to Google Sheets");
  //     }

  //     console.log("Successfully subscribed:", values);
  //     setShowSuccess(true);
  //     setTimeout(() => {
  //       setShowSuccess(false)
  //     }, 5000);

  //     // Reset form
  //     form.reset({
  //       email: "",
  //       phone: "",
  //       description: "",
  //     });
  //   } catch (error: any) {
  //     console.error("Subscription error:", error);
  //     alert(`Subscription failed: ${error.message}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     setLoading(true);

  //     const apiValues = {
  //       ...values,
  //       testerProgram: values.testerProgram ? "Yes" : "No"
  //     };

  //     const response = await fetch("/api/sheets", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(apiValues),
  //     });

  //     const data = await response.json(); // Parse the JSON response

  //     if (!response.ok) {
  //       // Handle the case where email or phone exists
  //       if (data.error === "Entry already exists") {
  //         throw new Error(
  //           data.details.emailExists
  //             ? "This email is already registered"
  //             : "This phone number is already registered"
  //         );
  //       }
  //       throw new Error(data.error || "Failed to submit to Google Sheets");
  //     }

  //     console.log("Successfully subscribed:", values);
  //     setShowSuccess(true);
  //     setTimeout(() => {
  //       setShowSuccess(false)
  //     }, 5000);

  //     // Reset form
  //     form.reset({
  //       email: "",
  //       phone: "",
  //       description: "",
  //     });
  //   } catch (error: any) {
  //     console.error("Subscription error:", error);
  //     toast(error.message); // Set the error state
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      toast.dismiss(); // Clear any existing toasts

      const apiValues = {
        ...values,
        testerProgram: values.testerProgram ? "Yes" : "No",
      };

      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiValues),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "Entry already exists") {
          // Show specific error toast for duplicate entries
          toast.error(data.details.message, {
            duration: 5000,
            position: "top-center",
          });
          return; // Exit early
        }
        throw new Error(data.error || "Failed to submit to Google Sheets");
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      // Reset form
      form.reset({
        email: "",
        phone: "",
        description: "",
        testerProgram: false,
      });
    } catch (error: any) {
      console.error("Subscription error:", error);
      // Show generic error toast
      toast.error(error.message || "An unexpected error occurred", {
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Dialog open={true}>
        <DialogOverlay style={{ backdropFilter: 'blur("55.8px")' }}>
          <DialogContent
            className="pointer-events-none max-w-[500px] md:p-8 p-6 rounded-2xl" // Makes content non-interactive
            onInteractOutside={(e) => e.preventDefault()} // Prevents outside clicks
            onEscapeKeyDown={(e) => e.preventDefault()} // Prevents ESC key
          >
            <VisuallyHidden>
              <DialogTitle>My Hidden Dialog Title</DialogTitle>
            </VisuallyHidden>
            <div className="pointer-events-auto flex flex-col gap-6">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[#333333] md:text-[28px] text-xl font-bold tracking-[1px]">
                  Get early access to{" "}
                  <span className="text-[#F44363]">Venspace</span>
                </h2>
                <p className="text-[#5C5C5C] md:text-base text-sm font-normal">
                  Find the perfect space. Earn from yours.
                </p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#5C5C5C] font-medium">
                          Email address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="johndoe@gmail.com"
                            {...field}
                            className="h-14 px-4 py-3 border border-[#E5E7F0]  bg-[#F5F7FA] text-base text-[#333333] leading-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#5C5C5C] font-medium">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            inputMode="tel"
                            placeholder="09054368324"
                            {...field}
                            onChange={(e) => {
                              // Remove any non-phone characters
                              const value = e.target.value.replace(
                                /[^\d+-]/g,
                                ""
                              );
                              field.onChange(value);
                            }}
                            className="h-14 px-4 py-3 border border-[#E5E7F0]  bg-[#F5F7FA] text-base text-[#333333] leading-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#5C5C5C] font-medium">
                          What describes you best
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="I own a space to share">
                                I own a space to share
                              </SelectItem>
                              <SelectItem value="I am hunting for the perfect space">
                                I am hunting for the perfect space
                              </SelectItem>
                              <SelectItem value="Both! I own and I am looking ">
                                Both! I own and I am looking{" "}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="testerProgram"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-[#F44363] focus:ring-[#F44363]"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-[#5C5C5C] font-normal">
                          I&apos;d like to be part of your testers program and
                          provide feedback
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#F44363]"
                    disabled={loading}
                  >
                    Unlock the Experience
                    {loading && <Loader2 size={5} className="animate-spin" />}
                  </Button>
                </form>
              </Form>
              {showSuccess && (
                <div className="flex items-center gap-1.5">
                  <Image src="/check.svg" alt="check" width={32} height={32} />
                  <p className="text-base text-[#5C5C5C] font-medium">
                    You&apos;re in! We are excited to have you onboard
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </DialogOverlay>
      </Dialog>

      <Hero />
    </main>
  );
}
