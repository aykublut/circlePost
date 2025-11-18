"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useStore from "@/store/zustand";

const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(1, "firstName is required"),
  lastName: z.string().min(1, "lastName is required"),
  location: z.enum(["Poland", "Turkey"], "Please select a location"),
  circleCode: z
    .string()
    .min(1, "Please enter the CircleCode, should be given by admin")
    .max(10, "CircleCode cannot be longer than 10 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const { setMode } = useStore();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      location: "Poland",
      circleCode: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let result;
        try {
          result = await response.json(); // JSON parse dene
        } catch {
          const text = await response.text(); // JSON değilse text al
          result = { message: text };
        }
        setError(result.message || "Registration failed");
      }

      if (response.ok === true) {
        setSuccess("Success");
        setTimeout(() => {
          setMode("login");
        }, 1000);
      }
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
    }
  };

  return (
    <div className=" flex items-center justify-center  ">
      <div className="  rounded px-8  pb-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Choose a username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter a password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || "Poland"}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Poland">Poland</SelectItem>
                          <SelectItem value="Turkey">Turkey</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="circleCode"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel>Circle Code</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                          🔑
                        </span>
                        <Input
                          maxLength={10}
                          {...field}
                          className="w-full pl-8 font-mono tracking-widest text-center text-white bg-white/10 border border-white/30 rounded-md focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all caret-white"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row items-center w-full justify-center ">
              <Button
                type="submit"
                variant="outline"
                className="cursor-pointer w-full hover:bg-white/80 shadow-sm hover:shadow-white/10 bg-white/30 transition-all"
              >
                Register
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
