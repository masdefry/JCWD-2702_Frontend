import { useRef } from "react"
import axios from 'axios';
import { toast } from 'react-toastify';

export default function LoginPage(){
    const inputEmail = useRef()
    const inputPassword = useRef()

    const onLogin = async() => {
        try {
            event.preventDefault()

            const email = inputEmail.current.value 
            const password = inputPassword.current.value 

            const res = await axios.get(`http://localhost:5000/users?email=${email}`)
            if(res.data.length === 0) throw {message: 'Email Doesnt Match!'}

            if(res.data[0].password !== password) throw {message: 'Password Doesnt Match!'}

            toast.success('Login Success!')
        } catch (error) { // error: {message: '...'}
            toast.error(error.message)
        }
    }

    return(
        <>
            <section className='flex justify-center py-10 border'>
                <div className="w-[50%]">
                    <h1 className='text-3xl font-bold'>
                        Login 
                    </h1>
                    <form onSubmit={onLogin} name='register'>    
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
                           Login
                        </button> 
                    </form>
                </div>
            </section>
        </>
    )
}