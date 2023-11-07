import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/router";

export const ExclusiveAccessForm = ({ className }) => {
  const router = useRouter();
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const signUpForExclusiveAccess = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const emailId = data.email;

    if (emailId.length < 5) {
      toast.warning("Please enter a valid email address.");
    } else if (!emailId.includes(".")) {
      // @ checking in ensured by required attribute in input tag
      toast.warning(`Please enter a valid email address.
      You missed a \'.\' (dot). `);
    } else if (emailId.includes("@")) {
      toast.success("Thanks for signing up! We'll be in touch soon.");

      setTimeout(() => {
        toast.info("Redirecting you to Loch App...");
      }, 2500);

      setTimeout(() => {
        router.push("https://app.loch.one/welcome/");
      }, 4000);
    }
  };

  return (
    <>
      <section
        className={cn(
          "flex flex-col items-center justify-center w-full gap-10 bg-white",
          className
        )}
      >
        <h1 className="w-11/12 max-w-xs text-4xl font-medium text-gray-400">
          Sign up for exclusive access.
        </h1>

        <form
          onSubmit={(e) => signUpForExclusiveAccess(e)}
          className="flex flex-col w-11/12 max-w-xs gap-3 "
        >
          <Input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            autofocus
            ref={emailInputRef}
          />

          <Button type="submit" size="">
            Submit
          </Button>
        </form>

        <p>You&apos;ll receive an email with an invite link to join.</p>
      </section>
    </>
  );
};
