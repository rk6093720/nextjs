import Link from 'next/link'
import React from 'react'
import Navbar from './components/navbar/page'
import Footer from "./components/footer/page"

const Page = () => {
  return (
    <main>
      <Navbar />
      <Link href={"/about"}>About</Link>
      <Footer />
    </main>
  )
}

export default Page
