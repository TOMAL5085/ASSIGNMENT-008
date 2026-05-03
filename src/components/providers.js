'use client';

import { Suspense, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function AuthToastBridge() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const authStatus = searchParams.get("auth");
    if (!authStatus) {
      return;
    }

    const message =
      authStatus === "login-success"
        ? "Logged in successfully"
        : authStatus === "register-success"
          ? "Registration successful"
          : null;

    if (!message) {
      return;
    }

    toast.success(message);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }, [pathname, router, searchParams]);

  return null;
}

export default function Providers({ children }) {
  return (
    <>
      <Suspense fallback={null}>
        <AuthToastBridge />
      </Suspense>
      {children}
      <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
    </>
  );
}
