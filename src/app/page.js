import Header from '@/Components/Header'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Page</h1>
      <Header />
      <Link href='/About'>Go to About Page</Link>
    </div>
  )
}

export default page