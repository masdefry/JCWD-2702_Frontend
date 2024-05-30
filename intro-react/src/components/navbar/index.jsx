import './style.css';

export default function Navbar(){
    return(
        <>
            <div id="navbar" className='bg-amber-400'>
                <div>
                    <img
                        src='https://www.pieroindonesia.com/static/version1715225249/frontend/Ppv2/default/id_ID/images/logo.svg'
                        className='w-[100px] h-[100px]'
                    />
                </div>
                <div id='center'>
                    <div>
                        Home 
                    </div>
                    <div>
                        Products 
                    </div>
                    <div>
                        Company
                    </div>
                </div>
                <div id='right'>
                    <button>
                        Login 
                    </button>
                    <p>
                        Icon
                    </p>
                </div>
            </div>
        </>
    )
}