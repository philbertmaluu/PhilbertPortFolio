//import next image
import Image from 'next/image';
//importing the link from next
import Link from 'next/link';
//importing components 
import Socials from '../components/Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
                <Link href={'/'}>
                  {/* logo */}
                  {/* <h1 className='text-lg'><span className='text-xl'>Philbert </span><span className='mix-blend-color-dodge'>Malulu</span></h1> */}
                  
                    {/* <Image src={'/logo11.svg'} alt="logo" width={120} height={28} priority={true} /> */}
                  
                  
                  {/* socials */} 
                </Link>
                <Socials />
              </div>
            </div>
         </header>;
};

export default Header;
