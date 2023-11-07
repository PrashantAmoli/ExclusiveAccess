import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ExclusiveAccessForm } from "@/components/exclusive_access/ExclusiveAccessForm";
import { ExclusiveAccessWrapper } from "@/components/exclusive_access/ExclusiveAccessWrapper";
import { DashboardNotifications } from "@/components/exclusive_access/Notifications";
import { Testimonials } from "@/components/exclusive_access/Testimonials";
import { MobileForm } from "@/components/exclusive_access/MobileForm";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Loch- Sign up for exclusive access</title>
        <meta
          name="description"
          content="Loch provides institution-grade wallet aggregation for retail investors across leading blockchains. Wallet privacy and anonymity are protected."
        />
      </Head>

      <main className={`grid lg:grid-cols-5 min-h-screen ${inter.className}`}>
        <ExclusiveAccessWrapper className="max-lg:w-full lg:col-span-3">
          <DashboardNotifications />

          <Testimonials />
        </ExclusiveAccessWrapper>

        <ExclusiveAccessForm className="sticky top-0 bottom-0 right-0 hidden h-screen col-span-2 lg:flex" />

        <MobileForm
          trigger={
            <Button className="fixed z-30 flex -translate-x-1/2 lg:hidden bottom-1 animate-pulse hover:animate-none left-1/2">
              Sign up for exclusive access
            </Button>
          }
        >
          <ExclusiveAccessForm />
        </MobileForm>
      </main>
    </>
  );
}
