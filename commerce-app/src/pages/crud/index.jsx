import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import { toast } from 'react-toastify';

export default function CRUDPage(){
    const [data, setData] = useState([])
    const inputName = useRef()
    const inputAddress = useRef()

    async function onSubmit(){
        try {
            event.preventDefault()
        
            // Step-01 Ambil Value dari Dalam Kolom Input
            const name = inputName.current.value
            const address = inputAddress.current.value

            // Step-02 Validasi 
            if(!name) throw {message: 'Name must be filled!'}
            if(!address) throw {message: 'Address must be filled!'}

            // Step-03 Valuenya dikirim ke API untuk Disimpan ke DB
            // axios.post('url', {data yang mau disimpan})
            console.log('Hello')
            await axios.post('http://localhost:5000/students', {name, address})
            toast.success('Register Success!')
        } catch (error) {
            console.log('CATCH')
            toast.error(error.message)
        }
    }

    async function onFetch(){
        try {
            const response = await axios.get('http://localhost:5000/students')  
            setData(response.data) // {config, statusText, data, ...}

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onFetch()
    }, [])

    return(
        <>
            <form className='flex justify-center gap-5 py-5'>
                <input ref={inputName} type='text' placeholder='Type your name' className='input border border-black' />
                <input ref={inputAddress} type='text' placeholder='Type your address' className='input border border-black' />
                <button onClick={onSubmit} type='submit' className='btn bg-red-500 text-white'>
                    Submit
                </button>
            </form>

            <h1>
                Data Student(s)
            </h1>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {JSON.stringify(item)}
                            <div>
                                {item.name}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}