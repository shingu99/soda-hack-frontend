"use client";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterInputs } from "@/lib/types";
import { registerUser } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterInputs>();
  const password = watch("password");

  const { toast } = useToast();
  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      const result = await registerUser(data);
      if (result.status == 200) {
        toast({
          title: "User is enrolled!",
          description: "You can now Log in.",
          action: (
            <ToastAction altText="Login">
              <a href="/login">Log in</a>
            </ToastAction>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.message,
        });
      }
    } catch (error) {
      console.error(error);
    }
    reset();
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create User Profile</CardTitle>
          <CardDescription>
            Already Signed up?&nbsp;
            <a href="/login" className="underline">
              Log in
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  {...register("fullName", { required: "Name is required" })}
                  id="name"
                  type="text"
                  placeholder="Enter Full name"
                />
                {errors.fullName && (
                  <span className="text-xs text-red-500">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email", { required: "Email is required" })}
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter a password"
                />
                {errors.password && (
                  <span className="text-xs text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="passwordAgain">Re-enter Password</Label>
                <Input
                  {...register("passwordAgain", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  id="passwordAgain"
                  type="password"
                  placeholder="Re-enter the password"
                />
                {errors.passwordAgain && (
                  <span className="text-xs text-red-500">
                    {errors.passwordAgain.message}
                  </span>
                )}
              </div>
              <Button variant="outline" onClick={() => reset()}>
                Cancel
              </Button>
              <Button type="submit">Sign Up</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
