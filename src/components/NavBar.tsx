import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from './ui/button';

const NavBar = () => {
  return (
    <div className="top-0 w-full z-10 py-2 border-s-amber-500 border-b ">
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <Image src='/Logo.svg'
            width={250}
            height={250}
            alt="Picture of the author" />
        </Link>
        <Link className={buttonVariants()} href='/mainform'>
          FORM
        </Link>
      </div>
    </div>
  )
}

export default NavBar
