import { useRef } from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage(){
    const inputUsername = useRef('')
    const inputEmail = useRef('')
    const inputPassword = useRef('')

    const onRegister = async() => {
        try {
            // Untuk Menghindari Auto Refresh Halaman Ketika Form di Submit
            event.preventDefault()

            // Untuk Mendapatkan Value dari Kolom Input
            const username = inputUsername.current.value
            const email = inputEmail.current.value
            const password = inputPassword.current.value

            // Berikutnya, Kita Kirim Data diatas ke API JSON-Server
            await axios.post('http://localhost:5000/users', {
                username, email, password
            })

            toast.success('Register Success!')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <ToastContainer />
            <section className='flex justify-center py-10 border'>
                <div className="w-[50%]">
                    <h1 className='text-3xl font-bold'>
                        Pendaftaran 
                    </h1>
                    <form onSubmit={onRegister} name='register'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input ref={inputUsername} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>    
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input ref={inputEmail} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>    
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input ref={inputPassword} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>   
                        <button type="submit" className='btn bg-red-500 text-white w-full mt-5'>
                            Register    
                        </button> 
                    </form>
                </div>
            </section>
        </>
    )
}