import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { ExclusiveAccessForm } from '@/components/exclusive_access/ExclusiveAccessForm';
import { ExclusiveAccessWrapper } from '@/components/exclusive_access/ExclusiveAccessWrapper';
import { DashboardNotifications } from '@/components/exclusive_access/Notifications';
import { Testimonials } from '@/components/exclusive_access/Testimonials';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Loch</title>
    </Head>

    <main
      className={`grid md:grid-cols-5 min-h-screen ${inter.className}`}
      >
        <ExclusiveAccessWrapper className="col-span-3">
          <DashboardNotifications/>
          
          <Testimonials />
        </ExclusiveAccessWrapper>

        <ExclusiveAccessForm className="sticky top-0 bottom-0 right-0 col-span-2" />
    </main>
      </>
  )
}
