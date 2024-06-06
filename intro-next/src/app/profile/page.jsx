import Link from "next/link"

export default function ProfilePage(){
    return(
        <div>
            Profile Page

            <Link href='/admin/dashboard'>
                <h1 className='text-blue-500'>
                    Go to Admin Page 
                </h1>
            </Link>
        </div>
    )
}