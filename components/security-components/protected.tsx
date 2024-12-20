"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/app/utils/getCookie";
import { LoaderCircle } from "lucide-react";
export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const [cookie, setCookie] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function cookieCall() {
      try {
        const token = await getCookie();
        setCookie(token!);
      } catch (error) {
        console.error("Error fetching cookie:", error);
        setCookie("");
      } finally {
        setLoading(false);
      }
    }
    cookieCall();
  }, []);
  const router = useRouter();
  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-xl">
        <p className="">Loading &nbsp;</p>
        <LoaderCircle className="animate-spin " />
      </div>
    );
  if (!cookie) {
    router.push("/login");
  }

  return children;
}
