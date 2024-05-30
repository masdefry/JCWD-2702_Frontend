export default function TailwindCSSPage(){
    return(
        <>
            <h6 className='text-5xl text-orange-400 bg-green-500'>
                Purwadhika
            </h6>

            <div className='flex justify-content-between align-items-center bg-gray-100 h-[500px]'>
                <div>
                    Box-01 
                </div>
                <div>
                    Box-02
                </div>
            </div>

            
            <div className='grid grid-cols-2'>
                <div className='bg-red-400'>
                    Box-01 
                </div>
                <div className='bg-orange-500'>
                    Box-02
                </div>
            </div>

            <button className='btn bg-green-300 hover:bg-green-500 md:bg-red-500 hover:bg-yellow-500 lg:bg-yellow-500'>
                Login
            </button>

            <h1 className='text-5xl text-green-200 md:text-green-500 lg:text-green-700'>
                Purwadhika 
            </h1>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-green-300">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}