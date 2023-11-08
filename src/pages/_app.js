import "@/styles/globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Toaster position="bottom-center" />

      <Analytics />
    </>
  );
}
