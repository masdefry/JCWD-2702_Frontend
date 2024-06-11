'use client';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar(){
    const dataUser = useSelector((state) => state.user.user)
    console.log('NAVBAR')
    console.log(dataUser)
    return(
        <>
            <main className='flex justify-between items-center bg-red-500 px-10 py-3 text-white'>
                <section>
                    <Link href='/'>
                        <h1 className='font-bold text-2xl'>
                            posapp.
                        </h1>
                    </Link>
                </section>
                <section className='flex gap-3'>
                    {
                        dataUser === null?
                        <>
                            <Link href='/auth'>
                                <div className='bg-white text-black px-2 py-2 rounded-md'>
                                    Login
                                </div>  
                            </Link>
                            <Link href='/register'>
                                <div className='bg-white text-black px-2 py-2 rounded-md'>
                                    Register
                                </div>   
                            </Link> 
                        </>
                        :
                        <div>
                            {dataUser[0]?.username}
                        </div>
                    }
                </section>
            </main>
        </>
    )
}