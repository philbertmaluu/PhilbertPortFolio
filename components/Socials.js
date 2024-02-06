//importing the link
import Link from 'next/link';

//importing icons
import {RiYoutubeLine,
        RiInstagramLine,
        RiFacebookLine,
        RiGithubLine,
        RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
       <Link href={'http://127.0.0.1:8002/shareholder'} className='hover:text-accent transition-all duration-300'>
        < RiYoutubeLine />
       </Link>
       <Link href={''} className='hover:text-accent transition-all duration-300'>
        < RiInstagramLine />
       </Link>
       <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
       </Link>
       
       <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
       </Link>
       <Link href={''} className='hover:text-accent transition-all duration-300'>
        < RiLinkedinLine />
       </Link>
    </div>
  );
};

export default Socials;
