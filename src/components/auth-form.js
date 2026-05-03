'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read the selected image"));
    reader.readAsDataURL(file);
  });
}

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function queueAuthToast(message) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem("tiles-gallery-auth-toast", message);
}

export default function AuthForm({ mode = "login", nextUrl = "/" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const isLogin = mode === "login";

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const imageFile = formData.get("imageFile");

    try {
      if (isLogin) {
        const result = await authClient.signIn.email({
          email,
          password,
          callbackURL: "/",
        });

        if (result?.error || !result?.data) {
          throw new Error(
            result?.error?.message || "Invalid email or password"
          );
        }

        queueAuthToast("Logged in successfully");
        await pause(50);
      } else {
        let image = "";

        if (imageFile instanceof File && imageFile.size > 0) {
          image = await fileToDataUrl(imageFile);
        }

        const result = await authClient.signUp.email({
          name,
          email,
          password,
          image,
          callbackURL: "/login",
        });

        if (result?.error || !result?.data) {
          throw new Error(
            result?.error?.message || "Registration failed"
          );
        }

        queueAuthToast("Registration successful");
        await pause(50);
      }

      router.push(isLogin ? "/" : "/login");
      router.refresh();
    } catch (error) {
      const message = error?.message || "Something went wrong";
      setFormError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setFormError("");
    setLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: isLogin ? "/" : "/",
      });
    } catch (error) {
      const message = error?.message || "Google sign in failed";
      setFormError(message);
      toast.error(message);
      setLoading(false);
    }
  }

  return (
    <section className="grid gap-6 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur sm:p-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-black/40">
          {isLogin ? "Welcome back" : "Create your account"}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black">
          {isLogin ? "Login" : "Register"}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-black/65">
          {isLogin
            ? "Users can reach this page from the navbar Login button or the protected-route redirect when they try to open a private page. Successful login sends them to the home page, and any error is shown here and as a toast."
            : "New users can join from this form and then return to the login page."}
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        {!isLogin ? (
          <label className="grid gap-2">
            <span className="text-sm font-medium text-black">Name</span>
            <input
              name="name"
              required
              className="input input-bordered h-12 rounded-2xl border-black/10 bg-white"
              placeholder="Your name"
            />
          </label>
        ) : null}

        {!isLogin ? (
          <label className="grid gap-2">
            <span className="text-sm font-medium text-black">Upload Photo</span>
            <input
              name="imageFile"
              type="file"
              accept="image/*"
              required
              className="file-input file-input-bordered h-12 rounded-2xl border-black/10 bg-white px-4 py-2 text-sm"
            />
            <p className="text-xs text-black/45">
              Upload a photo from your device. It will be saved with your account.
            </p>
          </label>
        ) : null}

        <label className="grid gap-2">
          <span className="text-sm font-medium text-black">Email</span>
          <input
            name="email"
            type="email"
            required
            className="input input-bordered h-12 rounded-2xl border-black/10 bg-white"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-black">Password</span>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="input input-bordered h-12 rounded-2xl border-black/10 bg-white"
            placeholder="••••••••"
          />
        </label>

        {formError ? (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {formError}
          </p>
        ) : null}

        <button
          type="submit"
          className="btn btn-neutral h-12 rounded-full"
          disabled={loading}
        >
          {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
        </button>
      </form>

      <div className="grid gap-4 pt-2">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-black/35">
          <span className="h-px flex-1 bg-black/10" />
          <span>Or</span>
          <span className="h-px flex-1 bg-black/10" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn btn-outline h-12 rounded-full border-black/15"
          disabled={loading}
        >
          Continue with Google
        </button>

        <div className="text-sm text-black/65">
          {isLogin ? "No account yet?" : "Already have an account?"}{" "}
          <Link
            href={isLogin ? "/register" : "/login"}
            className="font-semibold text-black underline-offset-4 hover:underline"
          >
            {isLogin ? "Register here" : "Login here"}
          </Link>
        </div>
      </div>
    </section>
  );
}
