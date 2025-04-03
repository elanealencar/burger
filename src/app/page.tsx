import Head from 'next/head'
import Menu from '@/components/Menu'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'




export default function Home() {
  return (
    <div className="w-screen bg-black text-white p-2.5">
      <Head>
        <title>Burger Heaven</title>
        <meta name="description" content="Burger Heaven" />
      </Head>

      <main className='p-8'>
        <Menu />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
    </div>
  )
}
