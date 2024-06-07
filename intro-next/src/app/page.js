'use client';
import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <Carousel
      nextControlIcon={<FaArrowRight /> }
      previousControlIcon={<FaArrowLeft />}
    >
      <Carousel.Slide>
      <div className='bg-red-100' style={{ width: '100%', height: '100px', position: 'relative' }}>
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
