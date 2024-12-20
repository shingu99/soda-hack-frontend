"use server";
import { cookies } from "next/headers";

export async function getCookie() {
  try {
    // Use await to resolve the promise
    const cookieStore = await cookies();

    const token = cookieStore.get("access_token");

    if (token && token.value) {
      return token.value as string;
    }

    return null; // Return null if no token is found
  } catch (error) {
    console.error("Error getting cookie:", error);
    throw error;
  }
}
