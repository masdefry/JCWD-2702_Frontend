import { useRef, useState } from "react"
import axios from 'axios';
import { toast } from 'react-toastify';

export default function RegisterPage(){
    // Step-01 Buat useState untuk Disabled Button
    const [disabledButton, setDisabledButton] = useState(false)

    const inputUsername = useRef('')
    const inputEmail = useRef('')
    const inputPassword = useRef('')

    const onRegister = async() => {
        try {
            // Step-03 useState Disabled Button diubah Menjadi true Sebelum Axios
            setDisabledButton(true)

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

            // Untuk Mengkosongkan Kolom Input
            inputUsername.current.value = ''
            inputEmail.current.value = ''
            inputPassword.current.value = ''
        } catch (error) {
            toast.error('Something Went Wrong!')
        } finally{
            // Step-04 useState Disabled Button diubah Menjadi False Lagi
            setDisabledButton(false)
        }
    }

    return(
        <>
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
                        {/* Step-02 useState Disabled Button dipasang dengan Atribut "disabled" */}
                        <button disabled={disabledButton} type="submit" className='btn bg-red-500 text-white w-full mt-5'>
                            {
                                disabledButton === true?
                                    'Loading...'
                                :
                                    'Register'
                            }
                        </button> 
                    </form>
                </div>
            </section>
        </>
    )
}