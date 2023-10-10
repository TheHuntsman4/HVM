import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';

const NavBar = () => {
  return (
    <div className="top-0 w-full z-10 py-2 border-s-amber-500 border-b ">
      <div className='container flex items-center justify-between'>
        <Link href='/'>
            <HandMetal />
        </Link>
        <Link className={buttonVariants()} href='/mainform'>
            FORM
        </Link>
      </div>
    </div>
  )
}

export default NavBar
