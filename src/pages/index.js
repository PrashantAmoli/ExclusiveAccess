import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { ExclusiveAccessForm } from '@/components/ExclusiveAccessForm';

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
        <div className="w-full h-screen col-span-3 bg-slate-50"></div>
        <ExclusiveAccessForm className="col-span-2" />
    </main>
      </>
  )
}
