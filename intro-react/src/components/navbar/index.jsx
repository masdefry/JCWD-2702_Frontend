import './style.css';

export default function Navbar(){
    return(
        <>
            <div id="navbar">
                <div>
                    <h3>
                        Logo
                    </h3>
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