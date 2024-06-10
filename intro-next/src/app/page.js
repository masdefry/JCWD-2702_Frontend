'use client';
import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative'>
        <Carousel
      nextControlIcon={<div className='bg-blue-300 text-white p-3 rounded-full absolute top-[-50px] right-[50px]'><FaArrowRight /></div>}
      previousControlIcon={<div className='bg-blue-300 text-white p-3 rounded-full absolute top-[-50px] left-[50px]'><FaArrowLeft /></div>}
    >
      <Carousel.Slide>
        <div className='bg-red-100' style={{ width: '100%', height: '500px', position: 'relative' }}>
          <Image 
            src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
            fill
            style={{ objectFit: 'cover' }}
            alt='Cat(s)'
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className='bg-red-100' style={{ width: '100%', height: '500px', position: 'relative' }}>
          <Image 
            src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
            fill
            style={{ objectFit: 'cover' }}
            alt='Cat(s)'
          />
        </div>
      </Carousel.Slide>
    </Carousel>
    </main>
  );
}
