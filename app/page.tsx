"use client";

import { Hero } from "@/components/hero";
import { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setShowSuccess(true);
    setLoading(true);

      // Reset the form to default values
  form.reset({
    email: "",
    phone: "",
    description: "Select",
  });
  }
  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     setLoading(true);
      
  //     // Make POST request
  //     const response = await fetch('/api/submit-form', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(values),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Submission failed');
  //     }
  
  //     const result = await response.json();
  //     console.log('Form submitted successfully:', result);
      
  //     // Only show success and reset if the request was successful
  //     setShowSuccess(true);
  //     form.reset({
  //       email: "",
  //       phone: "",
  //       description: "Select",
  //     });
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     // You might want to show an error message to the user here
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     setLoading(true);
      
  //     // Construct the contactinfo JSON object based on your form values
  //     const contactInfo = {
  //       "Contact Email": values.email,  // Make sure these match your form schema
  //       "Phone Number": values.phone,
  //       "Description": values.description,
  //       // Add other fields as needed
  //     };
  
  //     // URL encode the contactinfo JSON
  //     const encodedContactInfo = encodeURIComponent(JSON.stringify(contactInfo));
  
  //     // Construct the URL with query parameters
  //     const url = new URL('https://campaigns.zoho.com/api/v1.1/json/listsubscribe');
  //     url.searchParams.append('resfmt', 'JSON');
  //     url.searchParams.append('listkey', process.env.NEXT_PUBLIC_ZOHO_LIST_KEY || '[YOUR_LIST_KEY]');
  //     url.searchParams.append('contactinfo', encodedContactInfo);
  //     url.searchParams.append('source', process.env.NEXT_PUBLIC_ZOHO_SOURCE || '[YOUR_SOURCE_NAME]');
  
  //     // Make POST request
  //     const response = await fetch(url.toString(), {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Zoho-oauthtoken ${process.env.ZOHO_OAUTH_TOKEN}`
  //       },
  //     });
  
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || 'Subscription failed');
  //     }
  
  //     const responseData = await response.json();
  //     console.log('Subscription successful:', responseData);
      
  //     setShowSuccess(true);
  //     form.reset({
  //       email: "",
  //       phone: "",
  //       description: "Select",
  //     });
  //   } catch (error) {
  //     console.error('Error subscribing:', error);
  //     // Handle error (show toast, etc.)
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  
  return (
    <main>
      <Dialog open={true}>
        <DialogOverlay style={{ backdropFilter: 'blur("55.8px")' }}>
          <DialogContent
            className="pointer-events-none max-w-[500px] md:p-8 p-6 rounded-2xl" // Makes content non-interactive
            onInteractOutside={(e) => e.preventDefault()} // Prevents outside clicks
            onEscapeKeyDown={(e) => e.preventDefault()} // Prevents ESC key
          >
            <div className="pointer-events-auto flex flex-col gap-6">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[#333333] md:text-[28px] text-xl font-bold">
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
                        <FormLabel>Phone Number</FormLabel>
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
                  <Button
                    type="submit"
                    className="w-full bg-[#F44363]"
                    disabled={loading}
                  >
                    Unlock the Experience
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
