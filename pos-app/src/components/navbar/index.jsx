'use client';
import Link from 'next/link';

// Step-01 Setup Redux to Get Data from Global Store 
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {setUserLogout} from '@/redux/slices/userSlice'

export default function Navbar(){
    // Step-02 Setup Redux to Get User Slice Data
    const dataUser = useSelector((state) => state.user.user)

    const dispatch = useDispatch()

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
                <section className='w-[50%] flex justify-end gap-3'>
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
                        <div className='flex items-center gap-1'>
                            <p className='font-bold'>hello, </p>{dataUser[0]?.username}.
                            <button onClick={() => dispatch(setUserLogout())} className='btn bg-white text-black'>
                                Logout
                            </button>
                        </div>
                    }
                </section>
            </main>
        </>
    )
}