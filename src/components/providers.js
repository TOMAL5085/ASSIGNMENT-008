'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function AuthToastBridge() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const message = window.sessionStorage.getItem("tiles-gallery-auth-toast");

    if (!message) {
      return;
    }

    window.sessionStorage.removeItem("tiles-gallery-auth-toast");
    toast.success(message);
  }, [pathname]);

  return null;
}

export default function Providers({ children }) {
  return (
    <>
      <AuthToastBridge />
      {children}
      <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
    </>
  );
}
