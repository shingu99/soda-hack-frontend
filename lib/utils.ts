import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LoginInputs, RegisterInputs } from "./types";
import axios, { AxiosError } from "axios";
import Error from "next/error";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function registerUser(values: RegisterInputs) {
  try {
    const response = await axios.post(
      "http://localhost:8080/user/signup",
      {
        full_name: values.fullName,
        email: values.email,
        password: values.password,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    return {
      status: 200,
      message: "User Signed up",
    };
  } catch (error: any) {
    return {
      status: 500,
      message: "Either email is already taken or server is down",
    };
  }
}

export async function loginUser(values: LoginInputs) {
  try {
    const response = await axios.post(
      "http://localhost:8080/user/login",
      {
        email: values.email,
        password: values.password,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    return {
      status: 200,
      token: response.data,
    };
  } catch (error: any) {
    return {
      status: 403,
      message: "Invalid Credentials.",
    };
  }
}
