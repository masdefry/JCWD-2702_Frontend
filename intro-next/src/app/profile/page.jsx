import Link from "next/link"
import './style.css';
import LogoNext from '/public/next.svg'
import Image from "next/image";

export default function ProfilePage(){
    return(
        <div className='rajdhani-light'>
            Profile Page

            <Link href='/admin/dashboard'>
                <h1 className='text-blue-500'>
                    Go to Admin Page 
                </h1>
                <Image 
                    src={LogoNext}
                    width={100}
                    height={100}
                    alt='Image Bebas'
                />
            </Link>
        </div>
    )
}