"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LoginInputs, RegisterInputs } from "@/lib/types";
import { loginUser } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInputs>();

  const { toast } = useToast();
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const result = await loginUser(data);
      if (result.status == 200) {
        console.log(result.token);
        toast({
          title: "Welcome to your Profile",
          description: "Hello there",
        });
        router.push("/home");
      } else {
        toast({
          variant: "destructive",
          title: "Somewhere some error has occurred.",
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
          <CardTitle>Log in to your Profile</CardTitle>
          <CardDescription>
            Not Signed up?&nbsp;
            <a href="/register" className="underline">
              Register
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
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
              <Button variant="outline" onClick={() => reset()}>
                Cancel
              </Button>
              <Button type="submit">Login</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
