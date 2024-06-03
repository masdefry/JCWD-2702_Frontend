export default function RegisterPage(){
    return(
        <>
            <section className='flex justify-center py-10 border'>
                <div className="w-[50%]">
                    <h1 className='text-3xl font-bold'>
                        Pendaftaran 
                    </h1>
                    <form name='register'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>    
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>    
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>   
                        <button className='btn bg-red-500 text-white w-full mt-5'>
                            Register    
                        </button> 
                    </form>
                </div>
            </section>
        </>
    )
}