'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Header() {
  const pathname = usePathname()
 
  return (
    <nav className='bg-purple-500 text-black py-5 px-3 flex items-center  justify-between mb-10' >
        <div className='float-start'>
            <h1 className='text-3xl font-bold'>Header</h1>
        </div>
        <div className='flex items-center justify-center gap-5 text-2xl w-full '>

      <Link className={`link ${pathname === '/' ? 'active  text-blue-600 font-semibold' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/Products' ? 'active  text-blue-600 font-semibold' : ''}`}
        href="/Products"
      >
        Products
      </Link>
        </div>
    </nav>
  )
}