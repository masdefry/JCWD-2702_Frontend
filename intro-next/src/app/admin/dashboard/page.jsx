import Link from "next/link"

export default function DashboardAdminPage(){
    return(
        <div>
            Dashboard Admin Page

            <Link href='/profile'>
                <h1 className='text-blue-500'>
                    Go to Profile Page
                </h1>
            </Link>
        </div>
    )
}