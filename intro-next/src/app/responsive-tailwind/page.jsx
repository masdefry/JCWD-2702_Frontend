import Image from 'next/image'

export default function ResponsiveTailwindPage(){
    return(
        <>
            <h1 className='text-red-500 md:text-green-500 xl:text-blue-500'>
                Purwadhika
            </h1>

            <div className='bg-red-100' style={{ width: '100%', height: '100%', position: 'absolute' }}>
        
      <Image 
        src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        fill
        style={{objectFit: 'cover'}}
        alt='Cat(s)'
      />
    </div>
        </>
    )
}