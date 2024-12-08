import { Button } from 'flowbite-react';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
              React, Next.js and TypeScript
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://portfolio-next2-24.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    My portfolio
                </a>
            </Button>
        </div>
        <div className="flex-1 rounded-2xl border-4 shadow-xl">
        <Image
        src="/newportfolio2.png"
        alt="portfolio"
        width={800} 
        height={600} 
      />
        </div>
    </div>
  )
}